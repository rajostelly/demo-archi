import type {
  Formats,
  MarkupTranslationValues,
  RichTranslationValues,
  TranslationValues,
} from "next-intl";
import type { ReactNode } from "react";

import type { I18nTranslationStructure } from "./src/i18n/messages/en.json";
// type I18nTranslationStructure = typeof import('./messages/fr.json');

type DeepKeys = DeepKeyOf<I18nTranslationStructure>;

export type KeyType<T, S extends string> = S extends `${infer T1}.${infer T2}`
  ? T1 extends keyof T
    ? KeyType<T[T1], T2>
    : never
  : S extends keyof T
    ? T[S]
    : never;

export type DeepKeyOf<T> = T extends object
  ? {
      [K in keyof T]: T[K] extends object
        ? `${K & string}.${DeepKeyOf<T[K]> & string}`
        : K;
    }[keyof T]
  : never;

export type KeyOf<T> = T extends object
  ? {
      [K in keyof T]: `${K & string}` | `${K & string}.${KeyOf<T[K]>}`;
    }[keyof T]
  : never;

export type I18nParentKeys = Exclude<KeyOf<I18nTranslationStructure>, DeepKeys>;
export type I18nParamType<T extends I18nParentKeys | undefined> = DeepKeyOf<
  T extends undefined
    ? I18nTranslationStructure
    : KeyType<I18nTranslationStructure, T>
>;
export type I18nType<T extends I18nParentKeys | undefined> = {
  <TargetKey extends I18nParamType<T>>(
    key: TargetKey,
    values?: TranslationValues,
    formats?: Formats,
  ): string;
  rich<TargetKey extends I18nParamType<T>>(
    key: TargetKey,
    values?: RichTranslationValues,
    formats?: Formats,
  ): ReactNode;
  markup<TargetKey extends I18nParamType<T>>(
    key: TargetKey,
    values?: MarkupTranslationValues,
    formats?: Formats,
  ): string;
  raw<TargetKey extends I18nParamType<T>>(key: TargetKey): string;
  has<TargetKey extends I18nParamType<T>>(key: TargetKey): boolean;
};
export enum I18nLocale {
  en = "en",
  fr = "fr",
}
