# 高数复习网站

这是一个基于 `PPTs/tcu13ge_ppt_ch10.ppt` 到 `PPTs/tcu13ge_ppt_ch14.ppt` 整理的静态复习网站，当前同时保留两套页面版本：

- 新版：文档型双栏复习站
- 原版：仓库最初页面版本

覆盖章节：

- Chapter 10 无穷数列与级数
- Chapter 11 参数方程与极坐标
- Chapter 12 向量与空间解析几何
- Chapter 13 向量值函数与空间运动
- Chapter 14 偏导数

## 使用方式

保留以下文件和文件夹在同一个目录中：

- `index.html`
- `new/`
- `classic/`

然后直接双击打开 `index.html`。

首页会提供两个独立入口：

- `./new/index.html`：进入新版
- `./classic/index.html`：进入原版

不需要安装额外环境，也不需要启动本地服务。

## 当前结构

- `index.html`：版本入口 landing page
- `new/`：当前新版文档站
- `classic/`：原版页面

## 文件说明

- `new/index.html`：新版入口页
- `new/content.js`：新版与原版共用的知识点数据源副本
- `new/app.js`：新版页面渲染、章节路由、目录联动与交互实验逻辑
- `new/styles.css`：新版文档站样式
- `classic/index.html`：原版入口页
- `classic/app.js`：原版页面逻辑
- `classic/styles.css`：原版页面样式

## 新版特点

- 左侧目录负责章节与小分节跳转
- 右侧目录负责当前页知识点跳转，并支持分组折叠
- 正文保持文档式阅读流，不再把主体做成折叠块
- SVG 图解、动画演示和 3D 交互画布仍然保留
- 图形缩放只通过按钮控制，不使用鼠标滚轮缩放
