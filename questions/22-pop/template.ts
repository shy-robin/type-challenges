type Pop<T extends unknown[]> = T extends [...infer K, infer L] ? K : never
