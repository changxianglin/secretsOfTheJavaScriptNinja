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
* 6.2.1 通过迭代器对象控制生成器
* 调用生成器函数不一定会执行生成器函数体，通过创建迭代器对象，可以与生成器通信。
*
* 对迭代器进行迭代
* 通过调用生成器得到的迭代器，暴露出一个next方法让我们向迭代器请求一个新值。
* next 方法返回一个携带生成值的对象，而该对象中包含的另一个属性done也指向了生成器
* 是否还会追加生成值。
* 不同于手动调用迭代器的next方法，for-of循环同时还有查看生成器是否完成，它在后台自动做了完成相同的工作。
*
* 把控制权交给下一个生成器
* 正如标准函数中调用另一个标准函数，我们需要把生成器的执行委托给另一个生成器。
* 在迭代器上使用yield*操作符，程序会跳转到另外一个生成器上执行。
* 现在，对于生成器一般的工作，以及如何代理到其他生成器的工作上，基本如此。
*
* 6.2.2 使用生成器
* 尽管前面例子中生成的序列不错，但现在来看一个更实际的简单例子，生成唯一ID值。
*
* 生成器生成ID序列
*
* */