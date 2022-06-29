/**
 * 1. 使用 = 给泛型 K 设置默认值；
 * 2. 使用 as 给筛选出的元素执行进一步操作，如 key in keyof T 会筛选出 T 的所有属性名，后面跟上
 *    as (key extends K ? never : key) 表示进一步筛选出不存在于 K 中的属性名。
 */

type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [key in K]: T[key]
} & { [key in keyof T as (key extends K ? never : key)]: T[key] }

// 也可以利用 Exclude 实现上面效果
// type MyReadonly2<T, K extends keyof T = keyof T> = { readonly [key in K]: T[key] } & { [key in Exclude<keyof T, K>]: T[key] }
