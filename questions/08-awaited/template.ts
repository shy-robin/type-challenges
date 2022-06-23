/**
 * 参考文档：https://juejin.cn/post/6907908365930725389
 * 这里的 infer 关键字表示后面的 U 是一个推断类型，开发者不知道它具体是哪种类型，由输入的类型决定；
 * 后面表达式中继续调用了 MyAwaited，相当于函数递归，最终返回不是 Promise<unknown> 的类型。
 */
type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer U>
  ? U extends Promise<unknown>
    ? MyAwaited<U>
    : U
  : T
