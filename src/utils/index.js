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
exports.fetcher = void 0;
const fetcher = (resource, init) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const res = yield fetch(resource, init);
    if (!res.ok) {
        // レスポンスが失敗した場合は例外を投げる
        const errorRes = yield res.json();
        const error = new Error((_a = errorRes.message) !== null && _a !== void 0 ? _a : 'APIリクエスト中にエラーが発生しました。');
        throw error;
    }
    return res.json();
});
exports.fetcher = fetcher;
