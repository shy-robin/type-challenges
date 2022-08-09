type Space = ' ' | '\n' | '\t'
// 递归 + 类型推断
type TrimLeft<S extends string> = S extends `${Space}${infer R}`
  ? TrimLeft<R>
  : S
