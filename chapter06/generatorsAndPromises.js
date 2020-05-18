/*
* 第 6 章 未来的函数： 生成器和promises
*
* 通过生成器让函数持续执行
* 使用promise处理异步任务
* 使用生成器和promise书写优雅代码
*
* 6.1 使用生成器和promises 编写优雅的异步代码
*
* 6.2 使用生成器函数
* 生成器函数几乎是一个完全崭新的函数类型，它和标准的普通函数完全不同。
* 生成器函数能生成一组值的序列，但每个值的生成是基于每次请求，并不同与标准函数
* 那样建立即生成。我们必须显示地向生成器请求一个新值，随后生成器要么响应一个新生成的值。
* 要么就告诉我们它之后都不会再生成新值。更让人好奇的是，每次生成器函数生成一个值，它都不会像普通函数一样停止执行。
* 相反，生成器几乎不挂起，随后，当对另一个值的请求到来后，生成器就会从上次离开的位置恢复执行。
*
* */