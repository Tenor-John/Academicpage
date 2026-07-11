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
 * 6. 将部署后的 Web App URL 填入前端页面的 GAS_WEB_APP_URL
 */

const SPREADSHEET_ID = '1zeaJKth9AUHjZkifqhFcNkrprKWzqXxG-vm0vAWTXUA';

const SHEET_NAMES = {
  all: 'all_submissions',
  pretest: 'pretest',
  problem: 'problem',
  session: 'session',
  feedback: 'feedback',
  followup: 'followup',
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
  if (['pretest', 'problem', 'session', 'feedback', 'followup', 'all'].indexOf(t) >= 0) return t;
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
