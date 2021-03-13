export * from "../v1.0/exports";

export type Assign<L, R> = Omit<L, keyof R> & R;

export type ExtractExtends<S, T> = { [K in keyof S] : (S[K] extends T ? K : never) }[keyof S];

export type ExcludeExtends<S, T> = { [K in keyof S] : (S[K] extends T ? never : K) }[keyof S];

export type PickExtends<S, T> = Pick<S, ExtractExtends<S, T>>;

export type OmitExtends<S, T> = Pick<S, ExcludeExtends<S, T>>;

export type PartialExcept<
    T,
    K extends keyof T
> = Pick<T, K> & Partial<Omit<T, K>>;
