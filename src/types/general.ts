import type { ReactElement, ReactNode, JSXElementConstructor } from 'react';

// Represents any translated message that can be either plain text,
// a single JSX element, or a mix of text and elements (rich translation).
// Used to support flexible i18n rendering with tools like `t.rich()`.
export type FormattedMessage =
  | string
  | ReactElement<HTMLElement, string | JSXElementConstructor<HTMLElement>>
  | ReadonlyArray<ReactNode>;
