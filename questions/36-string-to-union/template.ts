type StringToUnion<
  T extends string,
  K extends unknown = never
> = T extends `${infer F}${infer Rest}` ? StringToUnion<Rest, K | F> : K
