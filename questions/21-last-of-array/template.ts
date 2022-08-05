type Last<T extends unknown[]> = T extends [...infer T, infer K] ? K : never
