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
 * Gridコンポーネント
 * gridレイアウトの実現に利用する
 */
const Grid = (0, styled_components_1.default)(Box_1.default) `
  ${(props) => (0, styles_1.toPropValue)('grid-gap', props.gridGap, props.theme)}
  ${(props) => (0, styles_1.toPropValue)('grid-column-gap', props.gridColumnGap, props.theme)}
  ${(props) => (0, styles_1.toPropValue)('grid-row-gap', props.gridRowGap, props.theme)}
  ${(props) => (0, styles_1.toPropValue)('grid-column', props.gridColumn, props.theme)}
  ${(props) => (0, styles_1.toPropValue)('grid-row', props.gridRow, props.theme)}
  ${(props) => (0, styles_1.toPropValue)('grid-auto-flow', props.gridAutoFlow, props.theme)}
  ${(props) => (0, styles_1.toPropValue)('grid-auto-columns', props.gridAutoColumns, props.theme)}
  ${(props) => (0, styles_1.toPropValue)('grid-auto-rows', props.gridAutoRows, props.theme)}
  ${(props) => (0, styles_1.toPropValue)('grid-template-columns', props.gridTemplateColumns, props.theme)}
  ${(props) => (0, styles_1.toPropValue)('grid-template-rows', props.gridTemplateRows, props.theme)}
  ${(props) => (0, styles_1.toPropValue)('grid-template-areas', props.gridTemplateAreas, props.theme)}
  ${(props) => (0, styles_1.toPropValue)('grid-area', props.gridArea, props.theme)}
`;
Grid.defaultProps = {
    display: 'grid',
};
exports.default = Grid;
