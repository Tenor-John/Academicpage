# 📹 视频文件使用指南

## 🎥 支持的视频格式

- **MP4** (推荐) - 最佳兼容性
- **WebM** - 现代浏览器支持
- **OGV** - 开源格式

## 📁 视频文件存放位置

将视频文件放在以下目录：
```
static/
├── videos/           # 研究视频
├── uploads/         # 其他上传文件
└── images/          # 图片文件
```

## 🔧 在页面中使用视频

### 1. 使用自定义shortcode（推荐）

```markdown
{{< video src="/videos/your-video.mp4" width="90%" caption="视频说明" >}}
```

参数说明：
- `src`: 视频文件路径（必需）
- `width`: 视频宽度（可选，默认100%）
- `height`: 视频高度（可选，默认auto）
- `poster`: 视频封面图片（可选）
- `caption`: 视频说明文字（可选）

### 2. 使用HTML5标签

```html
<video width="100%" controls>
  <source src="/videos/your-video.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
```

## 📋 视频文件命名建议

使用描述性的文件名，便于管理：
```
co2-reduction-demo.mp4          # CO2还原演示
dft-calculation.mp4             # DFT计算过程
electrochemical-test.mp4       # 电化学测试
sem-characterization.mp4       # SEM表征
conference-presentation.mp4    # 会议报告
```

## 🎨 视频页面示例

### 在项目页面中添加：
```markdown
## 实验演示 | Experimental Demo

{{< video src="/videos/experiment-demo.mp4" width="90%" caption="实验操作演示" >}}
```

### 在发表文章中添加：
```markdown
## 补充视频材料 | Supplementary Videos

{{< video src="/videos/supporting-material.mp4" width="80%" caption="论文支撑材料视频" >}}
```

### 在个人主页中添加：
```markdown
## 研究亮点 | Research Highlights

{{< video src="/videos/research-overview.mp4" poster="/images/research-poster.jpg" caption="研究工作概览" >}}
```

## 📱 移动端优化

视频在移动设备上会自动调整大小，确保良好的用户体验。

## 🔄 视频文件优化建议

1. **文件大小控制**：
   - 研究演示：< 50MB
   - 长时间报告：< 200MB
   - 使用视频压缩工具优化

2. **分辨率建议**：
   - 标清：720p (1280x720)
   - 高清：1080p (1920x1080)
   - 4K仅在必要时使用

3. **编码格式**：
   - H.264编码（MP4容器）
   - AAC音频编码

## 🌐 GitHub Pages限制

- 单个文件大小限制：100MB
- 仓库总大小建议：< 1GB
- 大文件建议使用外部存储服务

## 🎯 使用场景示例

1. **实验过程记录**
2. **计算结果可视化**
3. **学术报告录制**
4. **设备操作演示**
5. **研究成果展示**

现在你可以在学术主页的任何页面中添加视频内容了！
