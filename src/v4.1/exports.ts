export * from "../v2.8/exports";

export declare type PrefixToKeys<
    T,
    N extends string = string
> = { [K in keyof (Pick<T, Extract<keyof T, string>>) as `${ N }${ K }`] : (Pick<T, Extract<keyof T, string>>)[K]; };

export declare type SuffixToKeys<
    T,
    N extends string = string
> = { [K in keyof (Pick<T, Extract<keyof T, string>>) as `${ K }${ N }`] : (Pick<T, Extract<keyof T, string>>)[K]; };
