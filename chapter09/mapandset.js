/*
* 9.1 数组
* 数组是最常见的数据类型之一。
*
* 9.1.1 创建数组
* 使用内置的 Array 构建函数
* 使用数组字面量[]
*
* JavaScript 的数组对象，假如访问不存在的对象，会返回 undefined。
* JavaScript 可以手动修改 length 属性的值。
*
* 9.1.2 在数组两端添加、删除元素。
* push
* unshift
* pop
* shift
* 性能方面
* pop 和 push 只影响数组最后一个元素，pop 移除最后一个元素，push 在数组末尾增加元素。
* shift 和 unshift 方法修改第一个元素，之后每一个元素的索引都需要修改，因此 pop 和 push 比
* shift 和 unshift  要快很多。
*
* */