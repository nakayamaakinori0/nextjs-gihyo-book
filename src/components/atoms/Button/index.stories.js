"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Disabled = exports.Secondary = exports.Primary = void 0;
const index_1 = __importDefault(require("./index"));
exports.default = {
    title: 'Atoms/Button',
    argTypes: {
        variant: {
            options: ['primary', 'secondary'],
            control: { type: 'radio' },
            defaultValue: 'primary',
            description: 'Button variant',
            table: {
                type: { summary: 'primary | secondary' },
                defaultValue: { summary: 'primary' },
            },
        },
        children: {
            control: { type: 'text' },
            defaultValue: 'Button',
            description: 'ボタンテキスト',
            table: {
                type: { summary: 'string' },
            },
        },
        disabled: {
            control: { type: 'boolean' },
            defaultValue: false,
            description: 'Disabledフラグ',
            table: {
                type: { summary: 'boolean' },
            },
        },
        width: {
            control: { type: 'number' },
            description: '横幅',
            table: {
                type: { summary: 'number' },
            },
        },
        height: {
            control: { type: 'number' },
            description: '縦幅',
            table: {
                type: { summary: 'number' },
            },
        },
        onClick: {
            description: 'onClickイベントハンドラ',
            table: {
                type: { summary: 'function' },
            },
        },
    },
};
const Template = (args) => <index_1.default {...args}/>;
// プライマリボタン
exports.Primary = Template.bind({});
exports.Primary.args = { variant: 'primary', children: 'Primary Button' };
// セカンダリボタン
exports.Secondary = Template.bind({});
exports.Secondary.args = { variant: 'secondary', children: 'Secondary Button' };
// 無効化ボタン
exports.Disabled = Template.bind({});
exports.Disabled.args = { disabled: true, children: 'Disabled Buttonj' };
