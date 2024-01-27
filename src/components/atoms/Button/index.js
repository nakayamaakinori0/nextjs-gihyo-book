"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable prettier/prettier */
const styled_components_1 = __importDefault(require("styled-components"));
const styles_1 = require("utils/styles");
const variants = {
    // プライマリ
    primary: {
        color: 'white',
        backgroundColor: 'primary',
        border: 'none',
        pseudoClass: {
            hover: {
                backgroundColor: 'primaryDark',
            },
            disabled: {
                backgroundColor: 'primary',
            },
        },
    },
    // セカンダリ
    secondary: {
        color: 'white',
        backgroundColor: 'secondary',
        border: 'none',
        pseudoClass: {
            hover: {
                backgroundColor: 'secondaryDark',
            },
            disabled: {
                backgroundColor: 'secondary',
            },
        },
    },
    // デンジャー
    danger: {
        color: 'white',
        backgroundColor: 'danger',
        border: 'none',
        pseudoClass: {
            hover: {
                backgroundColor: 'dangerDark',
            },
            disabled: {
                backgroundColor: 'danger',
            },
        },
    },
};
/*
 * ボタン
 * バリアント、色、タイポグラフィ、ボーダー、レイアウト、スペース
 * 関連のPropsを追加
 */
const Button = styled_components_1.default.button `
  ${({ variant, color, backgroundColor, pseudoClass, theme }) => {
    // バリアントのスタイルの適用
    if (variant && variants[variant]) {
        const styles = [];
        !color && styles.push((0, styles_1.toPropValue)('color', variants[variant].color, theme));
        !backgroundColor && styles.push((0, styles_1.toPropValue)('backgroundColor', variants[variant].pseudoClass.hover.backgroundColor, theme));
        !pseudoClass && styles.push(`&:hover { ${(0, styles_1.toPropValue)('background-color', variants[variant].pseudoClass.hover.backgroundColor, theme)} }`);
        return styles.join('\n');
    }
}}
  ${(props) => (0, styles_1.toPropValue)('font-size', props.fontSize, props.theme)}
  ${(props) => (0, styles_1.toPropValue)('letter-spacing', props.letterSpacing, props.theme)}
  ${(props) => (0, styles_1.toPropValue)('line-height', props.lineHeight, props.theme)}
  ${(props) => (0, styles_1.toPropValue)('color', props.color, props.theme)}
  ${(props) => (0, styles_1.toPropValue)('background-color', props.backgroundColor, props.theme)}
  ${(props) => (0, styles_1.toPropValue)('width', props.width, props.theme)}
  ${(props) => (0, styles_1.toPropValue)('height', props.height, props.theme)}
  ${(props) => (0, styles_1.toPropValue)('min-width', props.minWidth, props.theme)}
  ${(props) => (0, styles_1.toPropValue)('min-height', props.minHeight, props.theme)}
  ${(props) => (0, styles_1.toPropValue)('display', props.display, props.theme)}
  ${(props) => (0, styles_1.toPropValue)('border', props.border, props.theme)}
  ${(props) => (0, styles_1.toPropValue)('overflow', props.overflow, props.theme)}
  ${(props) => (0, styles_1.toPropValue)('margin', props.margin, props.theme)}
  ${(props) => (0, styles_1.toPropValue)('margin-top', props.marginTop, props.theme)}
  ${(props) => (0, styles_1.toPropValue)('margin-right', props.marginRight, props.theme)}
  ${(props) => (0, styles_1.toPropValue)('margin-bottom', props.marginBottom, props.theme)}
  ${(props) => (0, styles_1.toPropValue)('margin-left', props.marginLeft, props.theme)}
  ${(props) => (0, styles_1.toPropValue)('padding', props.padding, props.theme)}
  ${(props) => (0, styles_1.toPropValue)('padding-top', props.paddingTop, props.theme)}
  ${(props) => (0, styles_1.toPropValue)('padding-right', props.paddingRight, props.theme)}
  ${(props) => (0, styles_1.toPropValue)('padding-bottom', props.paddingBottom, props.theme)}
  ${(props) => (0, styles_1.toPropValue)('padding-left', props.paddingLeft, props.theme)}
  &:hover {
    ${(props) => { var _a, _b; return (0, styles_1.toPropValue)('background-color', (_b = (_a = props.pseudoClass) === null || _a === void 0 ? void 0 : _a.hover) === null || _b === void 0 ? void 0 : _b.backgroundColor); }}
  }
  &:disabled {
    ${(props) => { var _a, _b; return (0, styles_1.toPropValue)('background-color', (_b = (_a = props.pseudoClass) === null || _a === void 0 ? void 0 : _a.disabled) === null || _b === void 0 ? void 0 : _b.backgroundColor); }}
  }
  cursor: pointer;
  outline: 0;
  text-decoration: 'none';
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  border-radius: 4px;
  border: none;
`;
Button.defaultProps = {
    variant: 'primary',
    paddingLeft: 2,
    paddingRight: 2,
    paddingTop: 1,
    paddingBottom: 1,
    color: 'white',
    display: 'inline-block',
    textAlign: 'center',
    lineHeight: 'inherit',
    fontSize: 'inherit',
};
exports.default = Button;
