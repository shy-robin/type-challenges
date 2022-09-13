type AppendToObject<
  T extends Record<string, any>,
  U extends string,
  V extends unknown
> = {
  [k in keyof T | U]: k extends keyof T ? T[k] : V
}
