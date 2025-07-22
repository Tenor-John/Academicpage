# 学术主页使用指南

## 🚀 快速开始

### 1. 安装 Hugo

#### Windows用户：
1. 访问 [Hugo Releases](https://github.com/gohugoio/hugo/releases)
2. 下载最新的 `hugo_extended_*_windows-amd64.zip`
3. 解压到某个目录（如 `C:\Hugo\bin`）
4. 将该目录添加到系统PATH环境变量

#### 或者使用 Chocolatey：
```powershell
choco install hugo-extended
```

#### 或者使用 Scoop：
```powershell
scoop install hugo-extended
```

### 2. 运行网站

```powershell
# 进入项目目录
cd j:\Academicpage

# 安装Hugo模块依赖
hugo mod get -u

# 启动开发服务器
hugo server -D

# 或者指定端口
hugo server -D --port 1313
```

访问 `http://localhost:1313` 查看网站

### 3. 构建发布版本

```powershell
# 构建静态网站文件
hugo --gc --minify

# 生成的文件在 public/ 目录
```

## 📝 已配置的内容

### ✅ 个人信息
- **姓名**: 江韬 (Tor John)
- **职位**: 博士研究生
- **机构**: 中国科学技术大学动态化学实验室
- **邮箱**: tjiang23@mail.ustc.edu.cn
- **研究方向**: 电催化、光催化、计算化学

### ✅ 网站配置
- 网站标题：江韬的学术主页
- 导航菜单：中英双语
- 个人简介：中英双语介绍

### ✅ 学术内容
- **教育背景**: 博士在读 + 本科学历
- **工作经历**: 研究经历和实习经历
- **技能**: 计算技能和实验技能
- **项目**: 3个研究项目示例
- **发表文章**: 1篇期刊文章示例

## 🎨 自定义修改

### 修改个人信息
编辑文件：`content/authors/admin/_index.md`

### 添加新项目
在 `content/project/` 目录下创建新文件夹和 `index.md`

### 添加发表文章
在 `content/publication/` 目录下创建新文件夹和 `index.md`

### 修改网站样式
编辑文件：`assets/css/custom.css`

### 更换头像
替换文件：`content/authors/admin/avatar.jpg`

## 📱 部署到GitHub Pages

1. 在GitHub创建仓库 `username.github.io`
2. 推送代码到仓库
3. 在仓库设置中启用GitHub Pages
4. 选择Source为GitHub Actions
5. 创建 `.github/workflows/hugo.yml` 工作流文件

## 🔧 故障排除

### 如果网站无法正常显示：
1. 检查Hugo版本是否为extended版本
2. 运行 `hugo mod get -u` 更新依赖
3. 清除缓存：`hugo mod clean`

### 如果中文显示异常：
检查 `config/_default/hugo.yaml` 中的 `hasCJKLanguage: true`

## 📞 联系方式

如有问题，请联系：tjiang23@mail.ustc.edu.cn
