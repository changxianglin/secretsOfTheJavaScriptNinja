/*
* 第 8 章 控制对象的访问
*
* 8.1 使用 getter 与 setter 控制属性访问
*
* 8.1.1 定义 setter 和 getter
*
* 8.1.2 使用 getter 与 setter 校验属性值
* 当对属性赋值时，会立即调用 setter 方法, 我们可以利用这一特性，在代码试图更新属性
* 值时实现一些行为。
*
* 8.1.3 使用 getter 于 setter 定义如何计算属性值
* 除了能够控制指定对象属性外的访问之外，getter 于 setter 还可以用于定义属性值的计算方法，
* 即每次访问该属性时都会进行计算属性值。计算属性不会存储具体的值，它们提供 get 和（或）set 方法，
* 用于直接提取、设置属性。
*
* 8.2 使用代理
* 代理（proxy) 是我们通过代理控制对另一个对象的访问。
* 通过代理可以定义当对象发生交互时可执行的自定义行为-如读取或设置属性，或调用方法。
* 可以将代理理解为通用化的 setter 于 getter，区别是每个 setter 于 getter 仅能
* 控制单个对象属性。而代理可用于对象交互的通用处理，包括调用对象的方法。
*
* 过去使用 setter 与 getter 处理的，均可使用代理对他们进行处理。
*
* 8.2.1 使用代理记录日志
* 当试图弄明白代码是如何工作的或当试图查找严重错误的根源时。最有力的工具之一是日志记录，我们在特定的时刻
* 输出有用的行为信息。
*
* 代理的直接用途之一是在我们读写属性时使用一种更好的、更清洁的方式启用日志记录。
*
* 8.2.2 使用代理检测性能
* 除了用于记录属性访问日志之外，代理还可以在不需要修改函数代码的情况下，评估函数调用的性能。
*
* 8.2.3 使用代理自动填充属性
* 除了简化日志，代理还可用于自动填充属性。
* */