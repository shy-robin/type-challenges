type AppendArgument<
  Fn extends (...args: any[]) => any,
  A extends any
> = Fn extends (...args: infer T) => infer K ? (...args: [...T, A]) => K : never
