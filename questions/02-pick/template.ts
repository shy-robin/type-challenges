type MyPick<T, K extends keyof T> = {
  // 泛型约束，限制 K 是 T 所有键的数组，注意，这里的 keyof 返回的是一个数组
  // 参考：https://www.typescriptlang.org/docs/handbook/2/keyof-types.html
  [key in K]: T[key] // 使用 in 语法遍历 K 类型数组的值，即获得每个键名，T[key] 则为对应键名的类型
}
