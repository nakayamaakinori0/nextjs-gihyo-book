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
const utils_1 = require("utils");
/**
 * ユーザAPI(個別取得)
 * @param context APIコンテキスト
 * @param params パラメータ
 * @returns ユーザ
 */
const getUser = (context, { id }) => __awaiter(void 0, void 0, void 0, function* () {
    /**
    // ユーザAPI
    // サンプルレスポンス
    {
      "id": "1",
      "username": "taketo",
      "displayName": "Taketo Yoshida",
      "email": "taketo@example.com",
      "profileImageUrl": "/user/1.png",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
    }
    */
    return yield (0, utils_1.fetcher)(`${context.apiRootUrl.replace(/\/$/g, '')}/users/${id}`, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });
});
exports.default = getUser;
