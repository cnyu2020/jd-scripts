"use strict";
/**
 * 网络测试
 * 1、测试是否能访问助力池
 * 2、助力获取失败、没有统计到运行次数，很大可能因为访问api失败
 * 3、如果出现失败，自行更换设备dns
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var date_fns_1 = require("date-fns");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cars, db, num, j, i, db_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("\n==================\u811A\u672C\u6267\u884C- \u5317\u4EAC\u65F6\u95F4(UTC+8)\uFF1A".concat((0, date_fns_1.format)(Date.now(), 'yyyy-MM-dd HH:mm:ss'), "\n\n"));
                cars = ['bean', 'farm', 'health', 'jxfactory', 'pet'];
                db = cars[Math.floor(Math.random() * cars.length)];
                num = (0, TS_USER_AGENTS_1.getRandomNumberByRange)(30, 50);
                console.log("\u672C\u6B21\u968F\u673A\u9009\u62E9".concat(db, "\u83B7\u53D6").concat(num, "\u4E2A\u968F\u673A\u52A9\u529B\u7801"));
                return [4 /*yield*/, car(db, num)];
            case 1:
                _a.sent();
                j = 0;
                _a.label = 2;
            case 2:
                if (!(j < cars.length)) return [3 /*break*/, 8];
                i = 1;
                _a.label = 3;
            case 3:
                if (!(i < 3)) return [3 /*break*/, 7];
                db_1 = cars[j];
                return [4 /*yield*/, runTimes(db_1, i)];
            case 4:
                _a.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)((0, TS_USER_AGENTS_1.getRandomNumberByRange)(1000, 3000))];
            case 5:
                _a.sent();
                _a.label = 6;
            case 6:
                i++;
                return [3 /*break*/, 3];
            case 7:
                j++;
                return [3 /*break*/, 2];
            case 8: return [2 /*return*/];
        }
    });
}); })();
function car(db, num) {
    return __awaiter(this, void 0, void 0, function () {
        var data, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.get)("https://api.jdsharecode.xyz/api/".concat(db, "/").concat(num))];
                case 1:
                    data = (_a.sent()).data;
                    console.log('获取助力池成功');
                    console.log(data.length, data);
                    return [3 /*break*/, 3];
                case 2:
                    e_1 = _a.sent();
                    console.log("\u83B7\u53D6\u52A9\u529B\u6C60\u5931\u8D25:", e_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function runTimes(db, i) {
    return __awaiter(this, void 0, void 0, function () {
        var e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.get)("https://api.jdsharecode.xyz/api/runTimes0509?activityId=".concat(db, "&sharecode=123"))];
                case 1:
                    _a.sent();
                    console.log("".concat(db, "\u4E0A\u62A5\u6D4B\u8BD5\u6210\u529F ").concat(i));
                    return [3 /*break*/, 3];
                case 2:
                    e_2 = _a.sent();
                    console.log("".concat(db, "\u4E0A\u62A5\u6D4B\u8BD5\u5931\u8D25 ").concat(i), e_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
