/*
* 第 5 章 精通函数: 闭包和作用域
* 使用闭包可以减少代码数量和复杂度来添加高级特性，还能实现不太可能完成的功能。
* 如果没有闭包，将完全不可能实现私有变量。
* JavaScript 语言的蓝图，以及我们编码的方式，都是由闭包塑造出来的。
* 从传统意义上来说，闭包是由纯函数式编程语言的特性之一。
* 令人鼓舞的是，闭包也进入了主流开发语言，因为闭包能够大大的简化复杂操作，所以很容易在
* JavaScript 库或其他高级代码库种看出闭包的使用。
*
* 闭包带来的问题是 JavaScript 的作用域是如何工作的。为此我们将探讨 JavaScript 的作用域
* 规则，需要特别注意新增的特性。
*
* 5.1 理解闭包
* 闭包允许函数访问并操作函数外部的变量。只要变量或函数存在于声明函数时的作用域内，闭包即可使函数能访问这些
* 变量或函数。
*
* 当在外部函数种声明内部函数时，不仅定义了函数的声明，而且还创建了一个闭包。该闭包不仅包含了函数的声明，
* 还包含了在函数声明作用域中的所有变量。当最终执行内部函数时，尽管声明时的作用域已经消失了，但是通过闭包，
* 任然能够访问到原始作用域。
*
* 谨记每一个通过闭包访问变量的函数都具有一个作用域链，作用域链包含闭包的全部信息，这一点非常重要。
*
* 5.2 使用闭包
* 首先我们会关闭闭包的实用性和优势。
*
* 5.2.1 封装私有变量
* 许多编程语言使用私有变量、这些私有变量时对外部隐藏的对象属性。
* 这是非常有用的一种特性，因为当通过其他代码访问这些变量时，我们不希望
* 对象的实现细节对用户造成过度负荷。
*
* 我们可通过闭包内部方法获取私有变量的值，但是不能直接访问私有变量。这有效地阻止了读取私有变量不
* 可控的修改，这与真是的面向对象语言中的私有变量一样。
*
* 5.2.2 回调函数
* 处理回调函数时另一种常见的使用闭包的情景。
* 闭包内的函数不仅可以在创建时刻访问这些变量，而且当闭包内部的函数执行时，还可以更新这些变量的值。
* 闭包不是在创建的那一时刻的状态的快照，二十一个真是的状态封装，只要闭包在，就可以对变量进行修改。
* 闭包和作用域是强相关的。
* */