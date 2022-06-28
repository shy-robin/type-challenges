// 利用扩展运算符实现 push
type Push<T extends unknown[], U extends unknown> = [...T, U]
