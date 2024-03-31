import {MessageInterface, ModelInterface} from './interfaces'

export type nestedArrayOr<T> = T | Array<nestedArrayOr<T>>;

export type stringKeysOf<T> = {
  [K in keyof T]-?: T[K] extends string ? K : never
}[keyof T];

type withoutLeadingUnderscore<T> = {
  [K in keyof T as K extends string ? (K extends `_${string}` ? never : K) : K]: T[K]
};

export type fieldsMessages<T = ModelInterface, D = MessageInterface[]> = Partial<{[key in keyof withoutLeadingUnderscore<T>]: D}>
