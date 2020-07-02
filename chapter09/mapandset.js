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
* 9.1.3 在数组任意位置添加、删除元素
* 上一个例子在数组的起始位置或结束位置删除元素，约束性太强。
* 通常我们需要从任意位置删除元素。
* delete
* slice
* 使用 splice 也可以实现在数组任意位置插入元素。
*
* 9.1.4 数组常用操作
* 遍历
* 基于现有数组元素映射创建新数组
* 验证数组元素是否匹配指定的条件
* 查找特定数组元素
* 聚合数组，基于数组元素计算(如，计算数组之和)
*
* 遍历
* forEach
* 映射
* map
* 测试数组元素
* every 和 some
* 数组查找
* find（一个或无)
* filter(多个元素)
* indexOf
* 数组排序
* sort
* 合计数组元素
* reduce
*
* 9.1.5 复用内置的数组函数
*
* 9.2 map (字典)
* 9.2.1 别把对象当做 map
* 9.2.2 创建 map
* get、set、size、has、delete
* 处理 map时有一个基本概率是确定两个映射的 Key 是否相等。
* key 相等
*
* 9.2.3 遍历 map
* 因为 map 是集合，可以使用 for of 循环遍历 map。
*
* 9.3 set (set 集合中的元素是唯一的)
* 9.3.1 创建 set
* 创建 set 的方法室使用构造函数： Set。
*
* Set 常见操作
* 并集 Union
* 交集 Intersect
* 差集 Difference
*
* */