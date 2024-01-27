"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const head_1 = __importDefault(require("next/head"));
const styled_components_1 = require("styled-components");
const GlobalStyle = (0, styled_components_1.createGlobalStyle) `
html,
body,
textarea {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Sagoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif;
}

* {
  box-sizing: border-box;
}

a {
  cursor: pointer;
  text-decoration: none;
  transition: .25s;
  color: #000;
}

ol, ul {
  list-style: none;
}
`;
const MyApp = ({ Component, pageProps }) => {
    return (<>
      <head_1.default>
        <meta key='charset' name='charset' content='utf-8'/>
        <meta key='viewport' name='viewport' content='widith=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=5'/>
        <meta property='og:locale' content='ja_JP'/>
        <meta property='og:type' content='website'/>
      </head_1.default>
      <GlobalStyle />
      <Component {...pageProps}/>
    </>);
};
exports.default = MyApp;
