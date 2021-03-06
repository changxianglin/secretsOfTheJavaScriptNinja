/*
2.2 页面构建阶段
构建前必须根据服务器获取的响应(HTML、css和JavaScript)来构建，页面构建的目标是建立 web 应用的 UI, 主要步骤如下:
1. 解析 HTML 代码并构建文档对象模型(DOM)
2. 执行 JavaScript 代码

2.2.1 HTML 解析和 DOM 构建
遇到并解析脚本元素时，浏览器会停止从 HTML构建 DOM, 并开始执行 JavaScript 代码。

2.2.2 执行 JavaScript 代码
所有包含在脚本元素的 JavaScript 代码由浏览器的 JavaScript 引擎执行。

JavaScript 中的全局对象
浏览器暴露给 JavaScript 引擎的主要全局对象是 window 对象，它代表了包含一个页面的窗口。
全局 window 对象最重要的属性是 document, 它代表了当前页面的 DOM。
通过使用 document 对象，JavaScript 代码就能在任何程度上改变 DOM， 包含修改或移除现存的节点，以及创建和插入新的节点

JavaScript 代码的不同类型
全局代码
函数代码

在页面构建阶段执行 JavaScript 代码

只要还有没有处理完的 HTML 元素和没执行完的 JavaScript 代码，下面步骤都会一直交替执行
1. 将 HTML 构建为 DOM
2. 执行 JavaScript 代码
当浏览器处理完所有的 HTML 元素后， 页面构建阶段就结束了。随后浏览器就会进入应用生命周期的第二部分: 事件处理

2.3 事件处理
客户端 Web 应用是一种 GUI 应用， 也就是说这种应用会对不同类型的事件作响应, 

2.3.1 事件处理器总览
浏览器执行环境的核心思想基于: 同一时刻只能执行一个代码片段，即所谓的单线程执行模型。
事件队列
事件是异步的
浏览器事件
网络事件
用户事件
计时器事件
事件处理的概念是 Web 应用的核心

2.3.2 注册事件处理器
通过把函数赋给某个特殊属性 （window.onload = function() {})
通过使用内置 addEventListener 方法 (document.body.addEventListener('mousemove', function() {} ))

2.3.3 处理事件
事件循环会检查队列
*/