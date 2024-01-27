"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
//先ほど定義したsrc/utils/index.tsから読み込み
const utils_1 = require("utils");
/**
 * 認証API（サインイン）
 * @param context APIコンテキスト
 * @param params パラメータ
 * @returns ログインユーザ
 */
const signin = (context, params) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, utils_1.fetcher)(`${context.apiRootUrl.replace(/\/$/g, '')}/auth/signin`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
    });
});
exports.default = signin;
