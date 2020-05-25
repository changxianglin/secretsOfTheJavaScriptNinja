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
* 使用迭代器遍历 DOM 树
*
* 6.2.3 与生成器交互
* 我们还能向生成器发送值，从而实现双向通信。使用生成器我们能够生成中间结果，
* 在生成器以为我们还能够使用该结果进行任何什么操作。
*
* 作为生成器函数参数发送值
* 向生成器函数发送值的最简单方法如其他函数一样，调用函数并传入实参。
*
* 使用 next 方法向生成器发送值
* 除了在第一次调用生成器的时候向生成器提供数据，我们还能通过 next 方法向生成器传入参数。
*
* 抛出异常
* 还有一种稍微不那么正统的方式将值应用到生成器上，通过抛出一个异常。每个
* 迭代器除了有一个 next 方法， 还抛出一个方法，让我们再来一个简单的例子。
*
* 6.2.4 探索生成器内部构成
* 我们已经知道了调用一个生成器不会实际执行它。相反，它创建了一个迭代器，通过该迭代器
* 我们才能从生成器中求值。
* 在生成器生成(或让渡)了一个值后，生成器会挂起执行并等待下一个请求的到来。在某些方面来说，生成器的
* 工作更像是一个小程序，一个状态中运动的状态机。
*
* 挂起开始-创建一个生成器后，它最先一这种状态开始。其中的任何代码都未执行。
* 执行-生成器中的代码已执行。执行要么刚开始， 要么是从上次挂起的时候继续。
*
* 通过执行上下文跟踪生成器函数
* 标准函数仅仅被重复调用，每次调用都会创建一个新的执行环境上下文，
* 相比之下，生成器的执行环境上下文则会暂时挂起并在将来恢复。
*
* 6.3 使用 promise
* 在使用 JavaScript 编写代码大量的依赖异步计算，计算那些我们现在不需要但将来某时候可能需要的值。
* ES6 引入了一个新的概念，用于简单地处理异步任务: promise.
*
* promise 对象是我们现在尚未得到但将来会得到值的占位符，它是对我们最终能够得知异步计算结果的一种保证。
* 如果我们兑现了我们的承诺，那么结果会得到一个值。如果发生了问题,结果则是一个错误,一个为什么不能交付的借口。
*
*6.3.1 理解简单回调函数所带来的问题
* 使用异步代码的原因在于不希望执行长时间的任务的时候，应用程序的执行被阻塞(影响用户体验)
* 处理错误麻烦
* 执行多任务并行棘手
*
* 6.3.2 深入研究 Promise
* promise 对象用于作为异步任务结果的占位符，它代表了一个我们暂时还没有获得但在未来有希望获得的值。
* 基于这点原因，在一个 promise 对象的整个生命周期中，它会经历多种状态。
* 一个 promise 无法从完成状态再进入拒绝态或者相反
*
* 6.3.3 拒绝 promise
* 拒绝一个 promise 有两种方式：显示拒绝，即在一个 promise 的执行函数中调用传入的 reject 方法。
* 隐士拒绝，正处理一个 promise 的过程中抛出一个异常。
* 还可以使用替代语法来处理拒绝 promise ,通过内置的 catch 方法。
*
* */