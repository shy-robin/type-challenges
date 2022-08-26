/**
 * 1. 将字符串拆分为数组，然后读取数组的长度即可得到字符串的长度；
 * 2. 使用递归，每次将第一个字符存入数组，递归结束，返回数组长度。
 */
type LengthOfString<
  T extends string,
  M extends string[] = []
> = T extends `${infer F}${infer L}`
  ? LengthOfString<L, [...M, F]>
  : M['length']
