import en from "./messages/en.json";
import fr from "./messages/fr.json";

type DeepKeyOf<T> = T extends object
  ? {
      [K in keyof T]: T[K] extends object
        ? `${K & string}.${DeepKeyOf<T[K]> & string}`
        : K;
    }[keyof T]
  : never;

type EnKeys = DeepKeyOf<typeof en>;
type FrKeys = DeepKeyOf<typeof fr>;

export type MissingInFr = Exclude<EnKeys, FrKeys>;
export type MissingInEn = Exclude<FrKeys, EnKeys>;

/**
 * Asserts that T is `never`. Will produce a TS error with a custom message
 * if there are missing keys.
 */
type AssertAllKeysExist<T extends never, Msg extends string> = T; // TS will show `Type '..."' does not satisfy the constraint 'never'` with your custom message

// Use descriptive names for the “error” types:
type _MissingInFrError = AssertAllKeysExist<
  MissingInFr,
  "⚠️ Missing keys in fr.json"
>;
type _MissingInEnError = AssertAllKeysExist<
  MissingInEn,
  "⚠️ Missing keys in en.json"
>;
