"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable prettier/prettier */
const styled_components_1 = __importDefault(require("styled-components"));
const Box_1 = __importDefault(require("components/layout/Box"));
const styles_1 = require("utils/styles");
/**
 * Flexコンポーネント
 * flexboxの実現に利用する
 */
const Flex = (0, styled_components_1.default)(Box_1.default) `
  ${(props) => (0, styles_1.toPropValue)('align-items', props.alignItems, props.theme)}
  ${(props) => (0, styles_1.toPropValue)('align-content', props.alignContent, props.theme)}
  ${(props) => (0, styles_1.toPropValue)('justify-content', props.justifyContent, props.theme)}
  ${(props) => (0, styles_1.toPropValue)('justify-items', props.justifyItems, props.theme)}
  ${(props) => (0, styles_1.toPropValue)('flex-wrap', props.flexWrap, props.theme)}
  ${(props) => (0, styles_1.toPropValue)('flex-basis', props.flexBasis, props.theme)}
  ${(props) => (0, styles_1.toPropValue)('flex-direction', props.flexDirection, props.theme)}
  ${(props) => (0, styles_1.toPropValue)('flex-grow', props.flexGrow, props.theme)}
  ${(props) => (0, styles_1.toPropValue)('flex-shrink', props.flexShrink, props.theme)}
  ${(props) => (0, styles_1.toPropValue)('justify-self', props.justifySelf, props.theme)}
  ${(props) => (0, styles_1.toPropValue)('align-self', props.alignSelf, props.theme)}
  ${(props) => (0, styles_1.toPropValue)('order', props.order, props.theme)}
`;
Flex.defaultProps = {
    display: 'flex',
};
exports.default = Flex;
