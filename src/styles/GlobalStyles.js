import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }
  body {
    margin: 0;
  }
  main {
    display: block;
  }
  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }
  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }
  pre {
    font-family: monospace, monospace;
    font-size: 1em;
  }
  a {
    background-color: transparent;
  }
  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }
  b,
  strong {
    font-weight: bolder;
  }
  code,
  kbd,
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }
  small {
    font-size: 80%;
  }
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  img {
    border-style: none;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }
  button,
  input {
    overflow: visible;
  }
  button,
  select {
    text-transform: none;
  }
  [type="button"],
  [type="reset"],
  [type="submit"],
  button {
    -webkit-appearance: button;
  }
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner,
  button::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring,
  button:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }
  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }
  progress {
    vertical-align: baseline;
  }
  textarea {
    overflow: auto;
  }
  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box;
    padding: 0;
  }
  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }
  [type="search"] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }
  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }
  details {
    display: block;
  }
  summary {
    display: list-item;
  }
  template {
    display: none;
  }
  [hidden] {
    display: none;
  }

  :root {
    --theme: #961E1E;
    --content: #ffffff;
    --theme-secondary: #5A1E96;
    --content-secondary: #ffffff;
    --theme-dark: #21C08B;
    --content-dark: #111111;
    --background: #ffffff;
    --background-dark: #222831;
    --background-dark-two: #39414D;
    --content-bg-dark: #2E3642;
  }

  * {
    box-sizing: border-box;
  }
  *:before,
  *:after {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    position: relative;
    ${({ dark }) => dark ? css`background: var(--background-dark);` : css`background: var(--background);`}
    ${({ dark }) => dark ? css`color: var(--content);` : css`color: var(--content-dark);`};
    line-height: 1.5rem;
  }

  ::-webkit-scrollbar {
    width: 10px;
    ${({ dark }) => dark ? css`background-color: var(--background-dark-two);` : css`background-color: #DDDDDD;`}
  }

  ::-webkit-scrollbar-thumb {
    width: 10px;
    ${({ dark }) => dark ? css`background-color: var(--theme-dark);` : css`background-color: var(--theme);`}
  }

  p {
    margin: 1rem auto;
  }

  a {
    text-decoration: none;
    color: inherit;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  ::-moz-selection {
    /* Code for Firefox */
    background: var(--theme);
    color: var(--content);
  }

  ::selection {
    background: var(--theme);
    color: var(--content);
  }

  pre {
    ${({ dark }) => dark ? css`background-color: var(--theme-dark);` : css`background-color: var(--theme);`}
    ${({ dark }) => dark ? css`color: var(--content-dark);` : css`color: var(--content);`}
    border-radius: 4px;
    font-size: 85%;
    line-height: 1.45;
    overflow: auto;
    padding: 16px;
    code {
      background: transparent;
      ${({ dark }) => dark ? css`color: var(--content-dark);` : css`color: var(--content); font-weight: bold;`}
      padding: 0;
      &::selection {
        background: #6C0C78;
        color: var(--content);
      }
    }
    &::-moz-selection {
      background-color: var(--theme);
      color: var(--content);
    }
    &::selection {
      background: #6C0C78;
      color: var(--content);
    }
  }

  code {
    background-color: #666666;
    color: var(--content);
    padding: 5px 10px;
    border-radius: 3px;
    span {
      &::selection {
        background: #6C0C78;
        color: var(--content);
      }
    }
    &::selection {
      background: var(--theme);
      color: var(--content);
    }
  }

  blockquote {
    margin-left: -1.75rem;
    margin-right: 1.75rem;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 1.42188rem;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.75rem;
    font-size: 1.20112rem;
    line-height: 1.75rem;
    color: hsla(0,0%,0%,0.59);
    font-style: italic;
    border-left: 0.32813rem solid hsla(0,0%,0%,0.9);
  }
`;