/**
 * 实现链式调用，option、get 两个参数需要是函数类型，返回类型也应当是函数；
 * 给反省设置初始值最后返回，相当于声明一个局部变量使用；
 * 如果对象的 key 和 value 均相同则返回 never，不执行下一步；
 * 利用 Omit 去除之前重复的 key，再和新的 key 合并。
 * https://github.com/type-challenges/type-challenges/issues/13951
 */
type Chainable<T = {}> = {
  option: <K extends string, V>(
    key: K extends keyof T ? (V extends T[K] ? never : K) : K,
    value: V
  ) => Chainable<Omit<T, K> & Record<K, V>>
  get: () => T
}
