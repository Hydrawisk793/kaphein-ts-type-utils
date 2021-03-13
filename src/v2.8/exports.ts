export * from "../v2.1/exports";

export type BoundFunction<
    FunctionType extends (...args : any[]) => any,
    ThisType
> = (
    this : ThisType,
    ...args : Parameters<FunctionType>
) => ReturnType<FunctionType>;

export type PromiseThenType<P> = P extends PromiseLike<infer T> ? T : never;
