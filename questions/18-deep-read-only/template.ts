// 三元表达式 + 递归
// 这里 T 为函数时，T extends {} 也成立，需要单独设置一个判断条件
type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends Function
    ? T[K]
    : T extends {}
    ? DeepReadonly<T[K]>
    : T[K]
}
