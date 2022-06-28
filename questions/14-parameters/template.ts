type MyParameters<T extends (...args: any[]) => unknown> = T extends (...args: infer V) => unknown ? [...V] : never
