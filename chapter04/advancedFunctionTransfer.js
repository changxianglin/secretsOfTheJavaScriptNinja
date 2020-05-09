/*
* 第 4 章 函数进阶： 理解函数调用
* 函数中有两个隐含的参数: arguments 和 this
* 调用函数的不同方式
* 处理函数上下文的问题
*
* 为什么 this 参数表示函数上下文？
* 函数和方法之间有什么却别？
* 如果一个构造函数显示地返回一个对象会发生什么？
*
* 4.1 使用隐式函数参数
* 形参
* 实参
*
* 4.1.1 arguments 参数
* arguments 参数是传递给函数的所有参数集合，无论是否有明确对应的形参.
* 通过它我们都可以访问到函数函数的所有参数。
* 借此可以实现原生 JavaScript 并不支持的函数重载特性，而且可以实现接收参数数量可变的可变函数。
* 有剩余参数，对 arguments 参数需求已大大减少，旧代码会涉及。
*
* arguments 对象作为函数参数的别名
* 避免使用别名
*
* 4.1.2 this 参数: 函数上下文
* this 参数是面向对象 JavaScript 编程的一个重要组成部分，
* 代表函数调用相关联的对象。因此，通常称之为函数上下文。
* 在 JavaScript 中，将一个函数作为方法调调仅仅是函数调用的一种方式。
* 事实上，this 参数的指向不仅是有定义函数的方式和位置决定的，同时还收到函数调用方式的影响。
* 真正理解 this 参数是面向对象 JavaScript 编程的基础。
*
* 4.2 函数调用
* 函数调用方式对函数内代码的执行有很大影响，主要提现在 this 参数以及函数上下文如何建立的。
* 4 中方法调用函数
* 1.作为一个函数，直接调用
* 2.作为一个方法，关联在一个对象上实现面向对象编程
* 3.作为一个构造函数，实现一个新的对象
* 4.通过函数的 apply 或者 call 方法
*
* 4.2.1 作为函数直接被调用
*
* 4.2.2 作为方法被调用
* 当一个函数这赋值给一个对象的属性，并且通过对象属性引用的方式调用函数时，函数会作为对象的方法被调用
* 当函数作为某各对象的方法被调用时，改对象会成为函数的上下文，并且在函数内部可以通过参数访问到。
* 这也是 JavaScript 实现面向对象编程的主要方式之一，(构造函数是另外一种方式）
*
* 4.2.3 作为构造函数被调用
* 若要通过函数的方式调用，需要在函数调用之前使用关键字 new。
* 构造函数调用是 JavaScript 中一个强大的特性。
* 一般来讲，当调用构造函数时会发生一个系列特殊的操作，使用关键字 new 调用函数会触发一下几个动作
* 1. 创建一个新的空对象
* 2. 该对象作为 this 参数传递给构造函数，从而成为构造函数的上下文
* 3. 新构造的对象作为 new 运算符的返回值
*
* 构造函数返回值
* 我们之前提到过，构造函数的目的是初始化新创建的对象，并且新构造的对象会作为构造
* 函数的调用结果
* 如果构造函数返回一个对象，则该对象作为整个表达式的值返回，而传入构造函数的 this 将被丢弃
* 但是，如果构造函数返回的时非对象类型，则忽略返回值，返回新创建的对象
*
* 编写构造函数的注意事项
* 以大写开头
*
* 4.2.2 使用 apply 和 call 方法调用
* 使用 apply 和 call 方法
* JavaScript 为我们提供了一种调用函数的方式，从而可以显示的指定任何对象作为函数的上下文。
* 我们可以使用每个函数上都存在的种两种方法来完成: apply 和 call
*
* 若想使用 apply 方法调用函数，需要为其传递两个参数，作为函数的上下文的对象和一个数组作为函数调用的参数。
* call 方法的使用方式类似，不同点在于是直接以参数列表的形式，而不再是作为数组传递
*
* 强制制定回调函数的函数上下文
*
* 如果有一组无关的值，则直接使用 call 方法。若已有参数是数组类型，apply 方法是更加的选择。
*
* 4.3 解决函数上下文的问题
* 在回调函数中(例如事件处理器),函数上下文与预期不符，但可以使用 call 或 apply 方法绕过。
* 在本节种有另外两种选择: 箭头函数和 bind
*
* 4.3.1 使用箭头函数绕过上函数上下文
* 箭头函数作为回调函数还有一个更优秀的特性，箭头函数没有单独的 this 值。 箭头函数的 this 与
* 声明所在的上下文相同。
*
* 4.3.2 使用 bind 方法
* 在本章种，你已经学会了每个函数都必须访问的两个方法：call 与 apply 。你还学习了如何使用他们控制调用函数的
* 上下文及参数。
* 函数还可访问 bind 方法创建新函数。无论使用那种方法调用，bind 方法创建的新函数与原始函数的函数体相同，
* 新函数被绑定到指定的对象上。
* 所有函数军可访问 bind 方法，可以创建并返回一个新函数，并绑定传入的对象上。不管如何调用该函数，this 均被
* 设置为对象本身。被绑定的函数与原始函数行为一致，函数体一致。
* 调用 bind 方法不会修改原始函数，而是创建一个全新的函数。
* */