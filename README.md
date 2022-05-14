# GESIGN-SYSTEM

**`Global Components (ViteJS React-TS)`**, **`Global EmotionStyles (ViteJS React-TS)`**, **`SampleApps (Nextjs)`**

    cd packages && yarn create vite

<br />

```json
// Package Json Name 수정
// main 추가
{
  "name": "@common/styles",
  "private": true,
  "version": "0.0.0",
  "main": "src/index.ts"
  ...
}
```

<br />

```json
// rootDir/tsconfig.json
// path 추가
{
  "references": [
    {
      "path": "packages/styles"
    }
  ]
}
```

<br />

```js
// rootDir/.eslintrc.js
// override 추가
  {
    files: ['packages/styles/**/*.ts?(x)', 'packages/styles/**/*.js?(x)'],
    settings: {
      'import/resolver': {
        typescript: {
          project: path.resolve(`${__dirname}/packages/styles/tsconfig.json`),
        },
      },
    },
  },
```

<br />

```js
// rootDir/lint-staged.config.js
module.exports = {
  '*.+(ts|tsx)': [() => 'yarn tsc -p tsconfig.json --noEmit'],
  'apps/nextjs/**/*.+(ts|tsx)': [
    () => 'yarn tsc -p apps/nextjs/tsconfig.json --noEmit',
  ],
  'packages/components/**/*.+(ts|tsx)': [
    () => 'yarn tsc -p packages/components/tsconfig.json --noEmit',
  ],
  // 아래의 경로 추가
  'packages/styles/**/*.+(ts|tsx)': [
    () => 'yarn tsc -p packages/styles/tsconfig.json --noEmit',
  ],
  '**/*.+(ts|tsx|js|jsx)': ['eslint --fix --cache', 'prettier --write'],
};
```

<br />

```json
{
  "scripts": {
    "common:components": "yarn workspace @common/components",
    // 아래의 workspace 추가
    "common:styles": "yarn workspace @common/styles",
    "apps:next": "yarn workspace @apps/next",
    "postinstall": "husky install"
  }
}
```

<br />

```bash
yarn common:styles add @emotion@react @emotion/styled @common/components
```

```bash
yarn common:styles add -D typescript-styled-plugin
```

```bash
yarn common:styles install
```

<br />

```json
// packages/styles/tsconfig.json
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "jsx": "react-jsx",
    "composite": true,
    "declaration": true,
    "baseUrl": ".",
    "plugins": [
      {
        "name": "typescript-styled-plugin",
        "tags": ["styled", "css"]
      }
    ]
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

<br />

```ts
// pakages/styles/src/types.ts
export interface ThemeTypes {
  colors: {
    black: string;
    white: string;
  };
}
```

<br />

```ts
// pakages/styles/src/theme.ts
import { ThemeTypes } from './types';

const theme: ThemeTypes = {
  colors: {
    black: '#000',
    white: '#fff',
  },
};

export default theme;
```

<br />

```ts
// pakages/styles/src/emotion.d.ts
import { ThemeTypes } from './types';
import '@emotion/react';

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Theme extends ThemeTypes {}
}
```

<br />

```ts
// pakages/styles/src/globalStyle.tsx
// GlobalStyle 확장자명은 .tsx로 생성
import { css, Global } from '@emotion/react';

export const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        margin: 0;
        padding: 0;
        height: 100%;
        background: whitesmoke;
        font-size: 10px;
      }
      #__next {
        height: 100%;
      }
    `}
  />
);
```

<br />

```ts
// pakages/styles/src/index.ts
import { globalStyles } from './globalStyle';
import theme from './theme';
import { ThemeTypes } from './types';

export type ThemeType = ThemeTypes;
export { theme, globalStyles };
```

---

**Use Apps**

```bash
yarn apps:next add @emotion/core @emotion/react @emotion/styled @common/styles
```

```bash
yarn apps:next add -D @emotion/babel-plugin
```

<br />

```json
// apps/nextjs/.babelrc
{
  "presets": [
    [
      "next/babel",
      {
        "preset-react": {
          "runtime": "automatic",
          "importSource": "@emotion/react"
        }
      }
    ]
  ],
  "plugins": ["@emotion/babel-plugin"]
}
```

<br />

```ts
// apps/nextjs/pages/_app.tsx
import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';

import { theme, globalStyles } from '@common/styles';
import '@common/styles/src/emotion.d';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      {globalStyles}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
```

<br />

```ts
// apps/nextjs/pages/index.tsx
import styled from '@emotion/styled';
import type { NextPage } from 'next';

import { Button } from '@common/components';

const Home: NextPage = () => (
  <Wrapper>
    <Button color="peru" />
    <Button color="green" />
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  ${({ theme }) => theme.colors.white}
`;

export default Home;
```
