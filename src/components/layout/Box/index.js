"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable prettier/prettier */
const styled_components_1 = __importDefault(require("styled-components"));
const styles_1 = require("utils/styles");
/**
 * Boxコンポーネント
 * レイアウトの調整に利用する
 * ${(props) => toPropValue('color', props.color, props.theme)}
 */
const Box = styled_components_1.default.div `
  ${(props) => (0, styles_1.toPropValue)('color', props.color, props.theme)}
  ${(props) => (0, styles_1.toPropValue)('backgroundColor', props.backgroundColor, props.theme)}
  ${(props) => (0, styles_1.toPropValue)('width', props.width, props.theme)}
  ${(props) => (0, styles_1.toPropValue)('height', props.height, props.theme)}
  ${(props) => (0, styles_1.toPropValue)('minWidth', props.minWidth, props.theme)}
  ${(props) => (0, styles_1.toPropValue)('minHeight', props.minHeight, props.theme)}
  ${(props) => (0, styles_1.toPropValue)('display', props.display, props.theme)}
  ${(props) => (0, styles_1.toPropValue)('border', props.border, props.theme)}
  ${(props) => (0, styles_1.toPropValue)('overflow', props.overflow, props.theme)}
  ${(props) => (0, styles_1.toPropValue)('margin', props.margin, props.theme)}
  ${(props) => (0, styles_1.toPropValue)('marginTop', props.marginTop, props.theme)}
  ${(props) => (0, styles_1.toPropValue)('marginRight', props.marginRight, props.theme)}
  ${(props) => (0, styles_1.toPropValue)('marginBottom', props.marginBottom, props.theme)}
  ${(props) => (0, styles_1.toPropValue)('marginLeft', props.marginLeft, props.theme)}
  ${(props) => (0, styles_1.toPropValue)('padding', props.padding, props.theme)}
  ${(props) => (0, styles_1.toPropValue)('paddingTop', props.paddingTop, props.theme)}
  ${(props) => (0, styles_1.toPropValue)('paddingRight', props.paddingRight, props.theme)}
  ${(props) => (0, styles_1.toPropValue)('paddingBottom', props.paddingBottom, props.theme)}
  ${(props) => (0, styles_1.toPropValue)('paddingLeft', props.paddingLeft, props.theme)}
`;
exports.default = Box;
