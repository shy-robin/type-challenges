// https://github.com/type-challenges/type-challenges/issues/614
// K 为联合类型则出发分发，并且之后递归调用；最后将结果合并为联合类型。
type Permutation<T extends unknown, K = T> = [T] extends [never]
  ? []
  : K extends K
  ? [K, ...Permutation<Exclude<T, K>>]
  : never
