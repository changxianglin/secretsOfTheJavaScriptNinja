/*
* 第 7 章 面向对象于原型
* JavaScript 中函数是第一型对象，闭包可以使得函数变得更加灵活，有用，还可以结合生成器函数于 promise 解决异步代码的问题。
* 现在我们开始探讨 JavaScript 的另一个重要方面： 原型。
*
* 可以在原型对象上增加特定属性，原型是定义属性和功能的一种便捷方式，对象可以访问原型上的属性和功能。
* 原型类似于经典的面向对象语言中的类，实际上，JavaScript 中原型的主要用途是使用一种类风格的面向对象
* 和继承的方式进行编码，这于传统的基于类的语言 Java、C#类似，但也不完全使这样。
*
* 7.1 理解原型
* 在软件开发的过程中，为了避免重复造轮子，我们希望可以经可能地复用代码，继承使代码复用的一种方式，
* 继承有助于合成地组织程序代码，将一个对象的属性扩展到另一个对象上。在 JavaScript 中，可通过原型实现继承。
*
* 原型的概念很简单，每个对象都含有原型的引用，当查找属性时，若对象本身不具有该属性，则会查找原型上是否有该属性。
* 每个对象都可以有一个原型，每个对象的原型也可以拥有一个原型，以此类推，形成一个原型链。
* 查找特定属性将会被委托在原型链上，只有当没有更多的原型可以进行查找时，才会停止查找。
*
* 7.2 对象构造器于原型
* 创建一个新对象最简单的方法。创建空对象。
* 但是那些具有面向对象开发语言背景的读者，可能会想念封装和构建类的构造函数。
* 构造函数使用来初始化对象为知己的初始状态。毕竟，如果我们要创建多个相同类型的对象的实例。
* 每个实例单独进行属性分配，不仅繁琐，而且容易出错。我们希望能够在一个地方将这些对象的属性和方法整合
* 为一个类。
*
* 每一个函数都具有一个原型对象。
* 每一个函数的原型具有一个 constructor 属性，该属性指向函数本身。
* constructor 对象的原型设置为新创建的对象的原型。
* 构造器调用 new 
*
* 7.2.1 实例属性
* 当把函数作为构造函数，通过操作符new进行调用时，它的上下文被定义为新的对象实例。
* 通过原型暴露属性，通过构造函数的参数进行初始化。
*
* 7.2.2 JavaScript 动态特性的副作用
* 你已经看到JavaScript是一门动态语言，可以很容易地添加、删除和修改属性。这种特性同样使用原型，
* 包括函数原型和对象原型。
*
* 对象与函数原型之间的引用关系是在对象创建时建立的，新创建的对象将引用新的原型，它只能访问 pierce 方法，
* 原来旧的对象保持原有的原型，仍然能够访问 swingSword 方法。
*
* 7.2.3 通过构造函数实现对象类型
* 虽然知道 JavaScript 如何使用原型查找引用属性，这一点很重要，但也需要知道对象实例是通过哪个函数构造创建的。
* 如所述，可以通过构造函数的原型中的 constructor 属性访问对象的构造器。
* 我们首先定义一个构造器， 并使用该构造器函数创建一个实例对象。然后使用操作符 typeof 检查该实例对象的属性。
* 这也发现不了什么。因为所有的实例都是对象类型，所以返回类型的中是对象。更有趣的操作符 instanceof,它提供了一种
* 用于检测一个实例是否有特定构造函数创建的方法。
*
* 我们不需要访问原始构造函数就可以直接创建对象，即使原始构造函数已经不在作用域内，在这种场景下完全可以使用构造函数的引用。
*
* 7.3 实现继承
* 继承是一种在新对象上复用现有对象的属性的形式。这有助于避免重复代码和重复数据。在 JavaScript 中，
* 继承原理于其他流行的面对对象语言略有不同。
*
* 我们真正想要实现的是一个完整的原型链，在原型链上、一个对象的原型直接是另一个对象的实例。
*
* 通过执行 instanceof 操作符, 我们可以判定函数是否继承原型链上的对象功能.
*
* 7.3.1 重写 constructor 属性的问题
*
* 配置对象的属性
* 在 JavaScript 中，对象是通过属性描述进行描述的，我们可以配置一下关键字
* configurable
* enumerable
* value
* writable
* get
* set
* 调整属性的配置信息，我们可以使用内置的 Object.defineProperty 方法。
*
* 最后解决 constructor 属性被覆盖的问题
*
*
* 7.3.2 instanceof 操作符
* 在大部分编程语言中，检测对象是否是类的最直接方法是使用操作符 instanceof。
*
* instanceof 操作符的警告
*
* 7.4 在 es6 中使用 JavaScript 的 class
* JavaScript 可以让我们使用原型实现继承，但是对于许多开发者，尤其是从其他语言面向对象语言转向
* JavaScript 的开发者来说，他们会更喜欢把 JavaScript 的继承系统简化、抽象化更熟悉的形式。
*
* 虽然现在我们可以在 JavaScript 中使用关键字 class,但其底层的实现任然是基于原型继承。
*
* 7.4.1 使用关键字 class
* ES6 引入新的关键字 class, 它提供了一种更为优雅的创建对象和继承的方式，底层任然是基于原型的实现。
*
* class 是语法糖
* 虽然 ES6 引入关键字 class, 但是底层仍然是基于原型的实现。class 只是语法糖，使得在 JavaScript 模拟类
* 的代码更为简洁。
*
* 静态方法
* 之前的示例展示了如何定义所有实例对象可访问的对象方法(原型方法)。除了对象方法之外，经典面向对象语言中 Java 中一般
* 使用类级别的静态方法。
* 在 es6 之前实现静态方法是在构造函数上添加方法。
*
* 7.4.2 实现继承
*
* */