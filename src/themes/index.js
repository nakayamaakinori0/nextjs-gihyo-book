"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.theme = void 0;
const colors_1 = __importDefault(require("./colors"));
const fontSizes_1 = __importDefault(require("./fontSizes"));
const letterSpacings_1 = __importDefault(require("./letterSpacings"));
const lineHeights_1 = __importDefault(require("./lineHeights"));
const space_1 = __importDefault(require("./space"));
exports.theme = {
    space: space_1.default,
    fontSizes: fontSizes_1.default,
    letterSpacings: letterSpacings_1.default,
    lineHeights: lineHeights_1.default,
    colors: colors_1.default,
};
