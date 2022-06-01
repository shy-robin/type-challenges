type TupleToObject<T extends readonly string[]> = {
  // T[number] 中的 number 表示 T 数组的索引，所以 T[number] 表示 T 所有元素值的数组
  [K in T[number]]: K
}
