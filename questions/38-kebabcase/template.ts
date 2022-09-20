type KebabCase<S extends string> = S extends `${infer F}${infer Rest}`
  ? Rest extends Uncapitalize<Rest>
    ? `${Lowercase<F>}${KebabCase<Rest>}`
    : `${Lowercase<F>}-${KebabCase<Rest>}`
  : S
