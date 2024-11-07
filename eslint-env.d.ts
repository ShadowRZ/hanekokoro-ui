declare module '@eslint-community/eslint-plugin-eslint-comments/configs' {
  import type { Linter } from 'eslint';

  declare const comments: {
    readonly recommended: Readonly<Linter.Config>;
  };

  export = comments;
}

declare module 'eslint-plugin-promise' {
  import type { Linter } from 'eslint';

  declare const promise: {
    readonly configs: {
      readonly 'flat/recommended': Readonly<Linter.Config>;
    };
  };

  export = promise;
}
