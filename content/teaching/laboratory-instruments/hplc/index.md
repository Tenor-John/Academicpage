---
title: HPLC操作指南 | HPLC Operation Guide
summary: 高效液相色谱仪的操作流程、理论基础和使用经验
date: 2024-07-23
authors:
  - admin
tags:
  - HPLC
  - 高效液相色谱
  - 分离分析
  - 液相色谱
categories:
  - 仪器操作指南
---

# 高效液相色谱（HPLC）操作指南

High Performance Liquid Chromatography Operation Guide

## 📋 仪器简介 | Introduction

高效液相色谱法（HPLC）是将少量液体样品注入装有微小颗粒（直径为3至5μm，称为固定相）的管子中，样品中的单个成分随着通过泵输送的高压液体（流动相）通过色谱柱进入装有颗粒的管子。

High Performance Liquid Chromatography (HPLC) is a technique that injects small amounts of liquid samples into columns packed with tiny particles (3-5 μm diameter, called stationary phase), where individual components are separated as they travel through the column with high-pressure liquid (mobile phase) delivered by pumps.

---

## 🔬 基本原理 | Basic Principles

{{< callout type="info" title="分离原理" >}}
柱填料用于将成分相互分离。这涉及到其分子与填料颗粒之间的各种化学和/或物理相互作用。分离出来的成分会在色谱柱出口处被检测器检测到，检测器会测量这些成分的含量。
{{< /callout >}}

### 工作流程：

{{< step step="1" title="样品引入" >}}
将样品注入流动相中，开始分离过程
{{< /step >}}

{{< step step="2" title="色谱分离" >}}
样品中各组分与固定相发生不同程度的相互作用，实现分离
{{< /step >}}

{{< step step="3" title="检测分析" >}}
分离后的组分依次被检测器检测，生成色谱图
{{< /step >}}

---

## 🔧 系统组成 | System Components

HPLC系统一般由**输液泵、进样器、色谱柱、检测器、数据记录及处理装置**等组成。其中**输液泵、色谱柱、检测器是关键部件**。

### 1. 输液泵系统

{{< callout type="tip" title="泵的性能要求" >}}
输液泵的性能好坏直接影响到整个系统的质量和分析结果的可靠性。
{{< /callout >}}

#### 性能要求：
- **流量稳定**：RSD应≤0.5%
- **流量范围宽**：分析型0.1~10mL/min，制备型可达100mL/min
- **输出压力高**：一般应达到150~300kg/cm²
- **液缸容积小**
- **密封性能好，耐腐蚀**

#### 泵的类型：

**往复式柱塞泵**：
- 单活塞往复泵
- 双活塞往复泵
- 特点：恒流泵，不受系统阻力变化影响

**隔膜型往复泵**：
- 活塞不直接接触流动相
- 死体积小（约0.1mL）
- 更换流动相后平衡快

**气动放大泵**：
- 恒压泵
- 结构相对简单
- 适用于特定应用

### 2. 进样器

{{< video src="/videos/tutorials/hplc-injection.mp4" width="85%" caption="HPLC进样器操作演示" >}}

### 3. 色谱柱

**色谱柱规格分类**：

| 柱类型 | 内径 | 柱长 | 用途 |
|--------|------|------|------|
| 常规分析柱 | 2~5mm (常用4.6mm) | 10~30cm | 日常分析 |
| 窄径柱 | 1~2mm | 10~20cm | 高分辨分析 |
| 毛细管柱 | 0.2~0.5mm | - | 微量分析 |
| 半制备柱 | >5mm | - | 少量制备 |
| 制备柱 | 20~40mm | 10~30cm | 大量制备 |

### 4. 检测器

**检测器要求**：
- 灵敏度高
- 噪音低
- 线性范围宽
- 重现性好
- 适用范围广

---

## 🎥 操作视频教程 | Operation Videos

### 基础操作流程
{{< video src="/videos/tutorials/hplc-basic-operation.mp4" width="90%" caption="HPLC基础操作流程演示" >}}

### 流动相配制
{{< video src="/videos/tutorials/mobile-phase-preparation.mp4" width="85%" caption="流动相配制和脱气处理" >}}

### 色谱柱安装
{{< video src="/videos/tutorials/column-installation.mp4" width="85%" caption="色谱柱正确安装方法" >}}

### 梯度洗脱设置
{{< video src="/videos/tutorials/gradient-elution.mp4" width="90%" caption="梯度洗脱程序设置" >}}

---

## 🔄 标准操作程序 | Standard Operating Procedure

### 开机准备

{{< step step="1" title="系统检查" >}}
1. 检查电源连接
2. 确认流动相储量
3. 检查废液瓶容量
4. 确认所有连接牢固
{{< /step >}}

{{< step step="2" title="流动相准备" >}}
1. 配制所需流动相
2. 超声脱气10-15分钟
3. 过滤（0.45μm滤膜）
4. 将流动相置入储液瓶
{{< /step >}}

{{< step step="3" title="系统启动" >}}
1. 开启检测器，预热30分钟
2. 启动泵系统，低流速冲洗管路
3. 逐步提升至工作流速
4. 观察基线稳定性
{{< /step >}}

### 样品分析

{{< step step="4" title="样品准备" >}}
1. 样品过滤或离心处理
2. 适当稀释至检测范围
3. 使用与流动相相容的溶剂
4. 避免样品中有颗粒物质
{{< /step >}}

{{< step step="5" title="方法设置" >}}
1. 选择合适的色谱柱
2. 设置流动相组成
3. 确定流速和柱温
4. 设置检测波长
5. 设定进样体积
{{< /step >}}

{{< step step="6" title="进样分析" >}}
1. 使用进样针抽取样品
2. 排除气泡
3. 进样操作要快速准确
4. 观察色谱图实时显示
{{< /step >}}

### 关机程序

{{< step step="7" title="系统清洗" >}}
1. 用纯水冲洗管路系统
2. 如使用缓冲盐，需充分清洗
3. 最后用甲醇或乙腈冲洗
4. 关闭泵系统
{{< /step >}}

{{< step step="8" title="设备关闭" >}}
1. 关闭检测器
2. 记录使用情况
3. 整理工作台面
4. 切断电源
{{< /step >}}

---

## 💡 使用经验与技巧 | Tips & Tricks

### 流动相选择

{{< callout type="tip" title="流动相优化" >}}
- **反相色谱**：常用甲醇-水、乙腈-水系统
- **缓冲液**：维持适当pH值，提高分离效果
- **添加剂**：三乙胺（减少拖尾）、甲酸（提高响应）
{{< /callout >}}

### 色谱柱维护

**延长柱寿命的方法**：
1. 使用保护柱
2. 样品预处理充分
3. 避免pH极端值
4. 定期再生处理
5. 妥善储存

### 常见问题解决

**基线噪音大**：
- 检查流动相是否充分脱气
- 确认检测器灯源稳定
- 检查管路连接是否漏液

**峰形不好**：
- 优化流动相组成
- 检查色谱柱性能
- 调整样品浓度

**保留时间漂移**：
- 确保流速稳定
- 检查柱温控制
- 流动相组成准确

---

## 📊 数据分析 | Data Analysis

### 定性分析
- 保留时间比对
- 光谱信息确认
- 标准品对照

### 定量分析
- 外标法
- 内标法
- 标准加入法

{{< video src="/videos/tutorials/hplc-data-analysis.mp4" width="90%" caption="HPLC数据处理和分析方法" >}}

---

## 📚 参考资料 | References

### 推荐书籍
1. 《现代液相色谱法》
2. 《HPLC实用指南》
3. 《液相色谱-质谱联用技术》

### 相关标准
- GB/T 30431-2013 液相色谱仪
- USP通则<621>液相色谱法
- ICH Q2(R1)分析方法验证

---

## ⚠️ 安全注意事项 | Safety Precautions

{{< callout type="danger" title="安全警告" >}}
1. **有机溶剂**：在通风良好环境下使用，避免吸入蒸气
2. **高压系统**：注意管路连接，避免高压泄漏
3. **废液处理**：按规定收集处理有机废液
4. **电气安全**：保持设备干燥，定期检查电路
{{< /callout >}}

---

## 🔧 维护保养 | Maintenance

### 日常维护
- 每日记录使用状况
- 定期更换流动相
- 保持设备清洁
- 检查管路连接

### 定期保养
- 更换密封圈
- 清洗进样阀
- 检定流量准确性
- 校准检测器

---

## 📞 技术支持 | Technical Support

**联系方式**：
- 实验室管理员：江韬
- 邮箱：tjiang23@mail.ustc.edu.cn
- 设备厂商技术支持热线
- 在线技术文档

---

**相关链接**：
- [LC-MS操作指南](/teaching/laboratory-instruments/lc-ms/)
- [样品前处理方法](/teaching/sample-preparation/)
- [实验室安全规范](/teaching/safety-guidelines/)
