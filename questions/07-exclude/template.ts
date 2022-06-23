// 参考资料：https://juejin.cn/post/6998736350841143326
// extends 用作条件判断，当 T 内的所有类型均能在 U 中找到时，条件为真，即 T 继承自 U；
// 且 extends 前是一个泛型，所以会进行分配、判断、联合，具体参考上面的文档。
type MyExclude<T, U> = T extends U ? never : T
