---
title: 技能学习 | Skill Learning
summary: 技能培训和实验教程 | Skills training and experimental tutorials
type: landing

design:
  css_class: 'skill-learning-page container-fluid'

cascade:
  - _target:
      kind: page
    params:
      show_breadcrumb: true

sections:
  - block: markdown
    content:
      title: 技能学习概述 | Skill Learning Overview
      text: |
        欢迎来到我的技能学习页面！这里包含了各种技能培训课程以及为学习者制作的实验教程。
        
        Welcome to my skill learning page! Here you'll find various skill training courses and experimental tutorials I've created for learners.
        
        ## 📚 教学内容 | Teaching Content
        
        - **课程教学**：化学相关课程的教学内容
        - **实验教程**：详细的实验操作指导，配有视频演示
        - **仪器指南**：实验室仪器使用操作手册
        - **学习资源**：相关的学习材料和参考资料
        
        ## 🎥 教程特色 | Tutorial Features
        
        - 图文并茂的详细说明
        - 高清视频演示操作过程
        - 安全注意事项提醒
        - 常见问题解答
        
        ## 🔗 快速导航 | Quick Navigation
        
        - 📋 [**实验室仪器使用指南**](/teaching/laboratory-instruments/) - 528Lab全部仪器操作手册
        - 🎓 [**实验教程中心**](/teaching/tutorials/) - 详细实验操作指导
        - 📚 [**课程教学**](#courses) - 参与教学的课程内容
        
  - block: collection
    id: courses
    content:
      title: 课程教学 | Courses
      text: 我参与教学的课程列表
      filters:
        folders:
          - teaching
        exclude_folders:
          - teaching/tutorials
    design:
      view: article-grid
      columns: 2
      
  - block: collection
    id: tutorials
    content:
      title: 实验教程 | Experimental Tutorials
      text: 详细的实验操作教程，包含视频演示
      filters:
        folders:
          - teaching/tutorials
    design:
      view: article-grid
      columns: 3
---
