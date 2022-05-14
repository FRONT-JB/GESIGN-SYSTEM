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
