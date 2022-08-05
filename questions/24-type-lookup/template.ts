type LookUp<T, K extends string> = T extends { type: K } ? T : never
