---
title: 教学 | Teaching
summary: 教学课程和实验教程 | My courses and experimental tutorials
type: landing

cascade:
  - _target:
      kind: page
    params:
      show_breadcrumb: true

sections:
  - block: markdown
    content:
      title: 教学概述 | Teaching Overview
      text: |
        欢迎来到我的教学页面！这里包含了我参与的课程教学以及为学生制作的实验教程。
        
        Welcome to my teaching page! Here you'll find courses I'm involved in and experimental tutorials I've created for students.
        
        ## 📚 教学内容 | Teaching Content
        
        - **课程教学**：化学相关课程的教学内容
        - **实验教程**：详细的实验操作指导，配有视频演示
        - **学习资源**：相关的学习材料和参考资料
        
        ## 🎥 教程特色 | Tutorial Features
        
        - 图文并茂的详细说明
        - 高清视频演示操作过程
        - 安全注意事项提醒
        - 常见问题解答
        
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
