// 泛型也支持扩展运算符
type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U]
