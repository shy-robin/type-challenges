/**
 * 判断两个泛型是否相同，注意这里需要使用 [] 包括泛型以避免分布式条件类型的情况；
 * 具体参考：https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types
 * 这种实现方式会有一些问题，如无法判断元素相同的数组和元组
 */
type Equal<T, U> = [T] extends [U] ? ([U] extends [T] ? true : false) : false

/**
 * 官方实现，适用于所有情况。
 * 原理参考：https://stackoverflow.com/questions/68961864/how-does-the-equals-work-in-typescript
 */
type IsEqual<T, U> = (<G>() => G extends T ? 0 : 1) extends (<G>() => G extends U ? 0 : 1) ? true : false

// 递归实现
type Includes<T extends readonly any[], U> = T extends [
  infer First,
  ...infer Rest
] // 如果 T 是一个数组，则进行下一步，否则返回 false
  ? IsEqual<First, U> extends true // 如果 T 的第一个元素类型和 U 相同，则返回 true，否则进行递归
    ? true
    : Includes<Rest, U>
  : false
