type Merge<
  T extends Record<PropertyKey, unknown>,
  U extends Record<PropertyKey, unknown>
> = {
  // 注意，需要判断 K 是否属于 U 的键，这样才能使 U 的重复属性覆盖 T
  [K in keyof T | keyof U]: K extends keyof U
    ? U[K]
    : K extends keyof T
    ? T[K]
    : never
}
