# 🌐 GitHub Pages 部署指南

## 📋 部署步骤

### 1. 确认仓库设置
- ✅ 仓库名称：`Academicpage`
- ✅ GitHub用户名：`Tenor-John`
- ✅ 仓库URL：https://github.com/Tenor-John/Academicpage

### 2. 启用GitHub Pages

1. **访问仓库设置**：
   ```
   https://github.com/Tenor-John/Academicpage/settings
   ```

2. **配置Pages**：
   - 在左侧菜单中点击 "Pages"
   - 在 "Source" 下选择 "**GitHub Actions**"
   - 不要选择 "Deploy from a branch"

### 3. 自动部署
✅ GitHub Actions工作流已配置完成！

推送代码后，GitHub会自动：
- 安装Hugo
- 构建网站
- 部署到GitHub Pages

### 4. 访问你的网站

部署完成后（大约2-5分钟），你的网站将在以下地址可用：

```
https://tenor-john.github.io/Academicpage
```

## 🔍 检查部署状态

### 监控构建过程：
1. 访问：https://github.com/Tenor-John/Academicpage/actions
2. 查看 "Deploy Hugo site to Pages" 工作流
3. 等待绿色的 ✅ 完成标志

### 如果构建失败：
- 点击失败的工作流查看错误日志
- 常见问题通常是配置文件语法错误

## 🎯 网站功能确认

部署成功后，你的网站将包含：

- ✅ **首页**：个人简介和照片
- ✅ **发表文章**：学术论文列表
- ✅ **项目**：研究项目展示
- ✅ **经历**：教育和工作经历
- ✅ **教学**：教学相关内容
- ✅ **简历下载**：LaTeX简历文件

## 🔄 更新网站

以后要更新网站内容：

1. **本地修改文件**
2. **提交并推送**：
   ```bash
   git add .
   git commit -m "更新内容"
   git push origin main
   ```
3. **自动重新部署**：GitHub Actions会自动重新构建和部署

## 📱 域名设置（可选）

如果你有自定义域名：
1. 在仓库根目录创建 `static/CNAME` 文件
2. 在文件中写入你的域名（如：`example.com`）
3. 在你的域名提供商设置DNS记录

## 🆘 故障排除

### 网站无法访问：
- 检查GitHub Actions是否成功完成
- 确认Pages设置中Source为"GitHub Actions"
- 等待DNS传播（最多24小时）

### 内容未更新：
- 检查最新提交是否成功推送
- 清除浏览器缓存
- 检查GitHub Actions构建日志

---

🎉 **恭喜！** 你的学术主页即将在 https://tenor-john.github.io/Academicpage 上线！
