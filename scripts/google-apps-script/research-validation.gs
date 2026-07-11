/**
 * 科研问题导航系统｜外部验证数据收集后端
 *
 * 使用方式：
 * 1. 打开 https://script.google.com/
 * 2. 新建 Apps Script 项目
 * 3. 将本文件内容粘贴到 Code.gs
 * 4. 确认 SPREADSHEET_ID 是你的 Google Sheet ID
 * 5. 部署为 Web App：
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 6. 在 Project Settings > Script properties 增加：
 *    方案 A：使用中国科大/Anthropic-compatible 接口（按 Claude Code 配置）
 *    - AI_PROVIDER = anthropic
 *    - ANTHROPIC_AUTH_TOKEN = 你的 USTC token
 *    - ANTHROPIC_BASE_URL = https://api.llm.ustc.edu.cn/
 *    - ANTHROPIC_MODEL = deepseek-v4-pro 或 qwen3.6-chat
 *
 *    方案 B：使用中国科大/自定义 OpenAI-compatible 接口
 *    - AI_PROVIDER = ustc
 *    - USTC_API_KEY = 你的 API key
 *    - USTC_BASE_URL = https://api.llm.ustc.edu.cn/v1/chat/completions
 *    - USTC_MODEL = 你的模型名或 agent 名（按平台要求填写）
 *
 *    方案 C：使用 OpenAI
 *    - AI_PROVIDER = openai
 *    - OPENAI_API_KEY = 你的 OpenAI API key
 *    - OPENAI_MODEL = gpt-4.1-mini 或你想用的模型（可选）
 * 7. 将部署后的 Web App URL 填入前端页面的 GAS_WEB_APP_URL
 */

const SPREADSHEET_ID = '1zeaJKth9AUHjZkifqhFcNkrprKWzqXxG-vm0vAWTXUA';

const SHEET_NAMES = {
  all: 'all_submissions',
  pretest: 'pretest',
  problem: 'problem',
  session: 'session',
  feedback: 'feedback',
  followup: 'followup',
  ai: 'ai_interactions',
  error: 'errors',
};

const HEADERS = [
  'server_received_at',
  'submission_type',
  'tester_id',
  'page',
  'client_collected_at',
  'stage',
  'discipline',
  'familiarity',
  'raw_problem',
  'duration',
  'deadline',
  'session_log',
  'result_summary',
  'understand',
  'match',
  'action_fit',
  'acceptance',
  'executed',
  'deliverable',
  'payload_json',
];

function doGet() {
  return jsonOutput({
    ok: true,
    service: 'research-validation-collector',
    message: 'Apps Script endpoint is running. Use POST from the validation page.',
  });
}

function doPost(e) {
  try {
    const payload = parsePayload_(e);
    if (payload.action === 'ai_step') {
      return handleAiStep_(payload);
    }

    const submissionType = normalizeSubmissionType_(payload.submissionType || payload.section || 'all');

    appendSubmission_(SHEET_NAMES.all, submissionType, payload);
    if (submissionType !== 'all') {
      appendSubmission_(SHEET_NAMES[submissionType] || SHEET_NAMES.all, submissionType, payload);
    }

    return jsonOutput({
      ok: true,
      submissionType,
      testerId: payload.testerId || '',
      receivedAt: new Date().toISOString(),
    });
  } catch (err) {
    logError_(err, e);
    return jsonOutput({
      ok: false,
      error: String(err && err.message ? err.message : err),
    });
  }
}

function handleAiStep_(payload) {
  const aiResult = runResearchValidationAgent_(payload);
  const enriched = Object.assign({}, payload, {
    submissionType: 'ai',
    ai_result: aiResult,
    resultSummary: aiResult.summary || aiResult.next_action || '',
  });
  appendSubmission_(SHEET_NAMES.all, 'ai', enriched);
  appendSubmission_(SHEET_NAMES.ai, 'ai', enriched);
  return jsonOutput({
    ok: true,
    action: 'ai_step',
    result: aiResult,
    receivedAt: new Date().toISOString(),
  });
}

function runResearchValidationAgent_(payload) {
  const rawProblem = String(payload.rawProblem || '').trim();
  const history = Array.isArray(payload.history) ? payload.history : [];
  const turnCount = Number(payload.turnCount || history.filter(x => x.role === 'assistant').length || 0);
  const forceFinal = Boolean(payload.forceFinal);

  if (!rawProblem) {
    return {
      type: 'question',
      question: '请先用你平时会使用的语言描述一个真实科研卡点。',
      question_type: '分流追问',
      reason: '缺少原始问题，无法开始正式测试。',
    };
  }

  const system = [
    '你是“科研问题导航系统”的外部验证 AI 主持人。',
    '你的任务不是泛泛安慰，也不是替用户写完整论文，而是把一个真实科研卡点导向下一步可执行动作。',
    '你不能要求用户提前理解内部文件编号、入口、决策树或系统术语。',
    '正式测试规则：只基于用户原始问题和后续回答进行 3-5 轮必要追问；追问越少越好。',
    '每个追问必须属于以下之一：分流追问、执行细化追问、有效但不改变路径。',
    '如果已经足够判断，或追问达到 5 轮，必须输出 final。',
    '如果出现明显身心健康、安全风险或严重现实危机，不做科研效率建议，建议寻求现实支持。',
    '输出必须是严格 JSON，不要 Markdown，不要代码块。',
    '',
    'JSON 格式二选一：',
    '{"type":"question","question":"下一问","question_type":"分流追问/执行细化追问/有效但不改变路径","reason":"为什么问这个"}',
    '{"type":"final","processing_direction":"先从什么方向处理","key_judgment":"关键判断","next_action":"1-2天内可执行的下一步具体动作","deliverable":"做完后能拿出来看的可检查结果","followup_questions_count":数字,"risk_or_boundary":"边界/风险","summary":"发给被访者的简短结果摘要"}',
  ].join('\n');

  const conversation = [
    { role: 'user', content: '原始科研卡点：\n' + rawProblem },
  ];
  history.slice(-10).forEach(item => {
    if (!item || !item.role || !item.content) return;
    conversation.push({ role: item.role === 'assistant' ? 'assistant' : 'user', content: String(item.content) });
  });
  if (forceFinal || turnCount >= 5) {
    conversation.push({ role: 'user', content: '请停止追问，基于现有信息输出 final JSON。' });
  }

  const text = callAiProvider_(system, conversation);
  return parseAiJson_(text);
}

function callAiProvider_(system, conversation) {
  const props = PropertiesService.getScriptProperties();
  const provider = String(props.getProperty('AI_PROVIDER') || 'anthropic').toLowerCase();
  if (provider === 'anthropic' || provider === 'claude' || provider === 'ustc_anthropic') {
    return callAnthropicCompatibleMessages_(system, conversation, {
      apiKey: props.getProperty('ANTHROPIC_AUTH_TOKEN') || props.getProperty('USTC_API_KEY'),
      baseUrl: props.getProperty('ANTHROPIC_BASE_URL') || 'https://api.llm.ustc.edu.cn/',
      model: props.getProperty('ANTHROPIC_MODEL') || props.getProperty('ANTHROPIC_DEFAULT_SONNET_MODEL') || props.getProperty('AI_MODEL') || 'deepseek-v4-pro',
      version: props.getProperty('ANTHROPIC_VERSION') || '2023-06-01',
      providerName: 'USTC/Anthropic-compatible',
    });
  }
  if (provider === 'ustc' || provider === 'custom') {
    return callOpenAiCompatibleChat_(system, conversation, {
      apiKey: props.getProperty('USTC_API_KEY'),
      url: props.getProperty('USTC_BASE_URL') || 'https://api.llm.ustc.edu.cn/v1/chat/completions',
      model: props.getProperty('USTC_MODEL') || props.getProperty('AI_MODEL') || 'deepseek-chat',
      providerName: 'USTC/custom',
    });
  }
  if (provider === 'openai') {
    return callOpenAIResponses_(system, conversation, props);
  }
  throw new Error('Unsupported AI_PROVIDER: ' + provider);
}

function callAnthropicCompatibleMessages_(system, conversation, config) {
  if (!config.apiKey) {
    throw new Error('Missing Script Property ANTHROPIC_AUTH_TOKEN');
  }
  const base = String(config.baseUrl || '').replace(/\/+$/, '');
  const url = base.endsWith('/v1/messages') ? base : base + '/v1/messages';

  const messages = conversation.map(item => ({
    role: item.role === 'assistant' ? 'assistant' : 'user',
    content: String(item.content || ''),
  }));

  const response = UrlFetchApp.fetch(url, {
    method: 'post',
    contentType: 'application/json',
    muteHttpExceptions: true,
    headers: {
      'x-api-key': config.apiKey,
      'anthropic-version': config.version,
      // Some third-party gateways accept Bearer auth even when exposing Anthropic-compatible APIs.
      'Authorization': 'Bearer ' + config.apiKey,
    },
    payload: JSON.stringify({
      model: config.model,
      system: system,
      messages: messages,
      max_tokens: 900,
      temperature: 0.2,
    }),
  });

  const code = response.getResponseCode();
  const body = response.getContentText();
  if (code < 200 || code >= 300) {
    throw new Error(config.providerName + ' API error ' + code + ': ' + body);
  }

  const json = JSON.parse(body);
  if (Array.isArray(json.content)) {
    const text = json.content
      .map(part => {
        if (typeof part === 'string') return part;
        if (part && part.text) return part.text;
        if (part && part.type === 'text' && part.text) return part.text;
        return '';
      })
      .filter(Boolean)
      .join('\n')
      .trim();
    if (text) return text;
  }
  if (json.output_text) return json.output_text;
  if (json.completion) return json.completion;
  if (json.result) return typeof json.result === 'string' ? json.result : JSON.stringify(json.result);
  throw new Error(config.providerName + ' response did not contain content text');
}

function callOpenAiCompatibleChat_(system, conversation, config) {
  if (!config.apiKey) {
    throw new Error('Missing Script Property USTC_API_KEY');
  }
  const messages = [
    { role: 'system', content: system },
  ].concat(conversation);

  const response = UrlFetchApp.fetch(config.url, {
    method: 'post',
    contentType: 'application/json',
    muteHttpExceptions: true,
    headers: {
      Authorization: 'Bearer ' + config.apiKey,
    },
    payload: JSON.stringify({
      model: config.model,
      messages: messages,
      temperature: 0.2,
      max_tokens: 900,
      response_format: { type: 'json_object' },
    }),
  });

  const code = response.getResponseCode();
  const body = response.getContentText();
  if (code < 200 || code >= 300) {
    throw new Error(config.providerName + ' API error ' + code + ': ' + body);
  }

  const json = JSON.parse(body);
  if (json.choices && json.choices[0] && json.choices[0].message) {
    return json.choices[0].message.content || '';
  }
  if (json.output_text) return json.output_text;
  if (json.result) return typeof json.result === 'string' ? json.result : JSON.stringify(json.result);
  if (json.answer) return typeof json.answer === 'string' ? json.answer : JSON.stringify(json.answer);
  throw new Error(config.providerName + ' response did not contain choices[0].message.content');
}

function callOpenAIResponses_(system, conversation, props) {
  const apiKey = props.getProperty('OPENAI_API_KEY');
  if (!apiKey) {
    throw new Error('Missing Script Property OPENAI_API_KEY');
  }
  const model = props.getProperty('OPENAI_MODEL') || 'gpt-4.1-mini';

  const input = [
    { role: 'system', content: system },
  ].concat(conversation);

  const response = UrlFetchApp.fetch('https://api.openai.com/v1/responses', {
    method: 'post',
    contentType: 'application/json',
    muteHttpExceptions: true,
    headers: {
      Authorization: 'Bearer ' + apiKey,
    },
    payload: JSON.stringify({
      model: model,
      input: input,
      temperature: 0.2,
      max_output_tokens: 900,
    }),
  });

  const code = response.getResponseCode();
  const body = response.getContentText();
  if (code < 200 || code >= 300) {
    throw new Error('OpenAI API error ' + code + ': ' + body);
  }

  const json = JSON.parse(body);
  return extractResponseText_(json);
}

function extractResponseText_(json) {
  if (json.output_text) return json.output_text;
  const parts = [];
  (json.output || []).forEach(item => {
    (item.content || []).forEach(content => {
      if (content.text) parts.push(content.text);
      if (content.type === 'output_text' && content.text) parts.push(content.text);
    });
  });
  const text = parts.join('\n').trim();
  if (!text) throw new Error('OpenAI response did not contain text');
  return text;
}

function parseAiJson_(text) {
  const cleaned = String(text || '').trim()
    .replace(/^```json\s*/i, '')
    .replace(/^```\s*/i, '')
    .replace(/\s*```$/i, '');
  try {
    return JSON.parse(cleaned);
  } catch (err) {
    return {
      type: 'final',
      processing_direction: 'AI 输出格式异常，需要人工复核',
      key_judgment: '模型未返回严格 JSON。',
      next_action: '请主持人查看 raw_text，并决定是否重新生成。',
      deliverable: '一次人工复核记录。',
      risk_or_boundary: '该条不应计入独立 AI 成功案例。',
      summary: cleaned,
      raw_text: cleaned,
    };
  }
}

function parsePayload_(e) {
  if (!e || !e.postData || !e.postData.contents) {
    throw new Error('Missing POST body');
  }

  const raw = e.postData.contents;
  try {
    return JSON.parse(raw);
  } catch (err) {
    // Fallback for form-encoded submissions if you ever use a normal HTML form.
    if (e.parameter && Object.keys(e.parameter).length) {
      return e.parameter;
    }
    throw new Error('Invalid JSON payload');
  }
}

function normalizeSubmissionType_(type) {
  const t = String(type || '').toLowerCase().trim();
  if (['pretest', 'problem', 'session', 'feedback', 'followup', 'ai', 'all'].indexOf(t) >= 0) return t;
  return 'all';
}

function appendSubmission_(sheetName, submissionType, payload) {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = getOrCreateSheet_(ss, sheetName);
  ensureHeaders_(sheet);

  const row = [
    new Date(),
    submissionType,
    payload.testerId || '',
    payload.page || '',
    payload.collectedAt || '',
    payload.stage || '',
    payload.discipline || '',
    payload.familiarity || '',
    payload.rawProblem || '',
    payload.duration || '',
    payload.deadline || '',
    payload.sessionLog || '',
    payload.resultSummary || '',
    payload.understand || '',
    payload.match || '',
    payload.actionFit || '',
    payload.acceptance || '',
    payload.executed || '',
    payload.deliverable || '',
    JSON.stringify(payload),
  ];

  sheet.appendRow(row);
}

function getOrCreateSheet_(ss, sheetName) {
  return ss.getSheetByName(sheetName) || ss.insertSheet(sheetName);
}

function ensureHeaders_(sheet) {
  const firstRow = sheet.getRange(1, 1, 1, HEADERS.length).getValues()[0];
  const hasAnyHeader = firstRow.some(value => value !== '');
  if (!hasAnyHeader) {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    sheet.setFrozenRows(1);
  }
}

function logError_(err, e) {
  try {
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = getOrCreateSheet_(ss, SHEET_NAMES.error);
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['server_received_at', 'error', 'raw_post']);
      sheet.setFrozenRows(1);
    }
    sheet.appendRow([
      new Date(),
      String(err && err.stack ? err.stack : err),
      e && e.postData ? e.postData.contents : '',
    ]);
  } catch (_) {
    // Avoid throwing from error logging.
  }
}

function jsonOutput(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
