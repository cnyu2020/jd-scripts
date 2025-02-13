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
exports.jxfactory = exports.sgmh = exports.factory = exports.pet = exports.health = exports.farm = exports.bean = void 0;
var axios_1 = require("axios");
var TS_USER_AGENTS_1 = require("../TS_USER_AGENTS");
var V3_1 = require("./V3");
function bean(cookie) {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, axios_1["default"].post('https://api.m.jd.com/client.action', "functionId=plantBeanIndex&body=".concat(decodeURIComponent(JSON.stringify({ version: "9.0.0.1", "monitor_source": "plant_app_plant_index", "monitor_refer": "" })), "&appid=ld&client=apple&area=5_274_49707_49973&build=167283&clientVersion=9.1.0"), {
                        headers: {
                            Cookie: cookie,
                            Host: "api.m.jd.com",
                            "User-Agent": TS_USER_AGENTS_1["default"]
                        }
                    })];
                case 1:
                    data = (_d.sent()).data;
                    if ((_b = (_a = data.data) === null || _a === void 0 ? void 0 : _a.jwordShareInfo) === null || _b === void 0 ? void 0 : _b.shareUrl)
                        return [2 /*return*/, (_c = data.data) === null || _c === void 0 ? void 0 : _c.jwordShareInfo.shareUrl.split('Uuid=')[1]];
                    else
                        return [2 /*return*/, 'null'];
                    return [2 /*return*/];
            }
        });
    });
}
exports.bean = bean;
function farm(cookie) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, axios_1["default"].post('https://api.m.jd.com/client.action?functionId=initForFarm', "body=".concat(encodeURIComponent(JSON.stringify({ "version": 4 })), "&appid=wh5&clientVersion=9.1.0"), {
                        headers: {
                            "cookie": cookie,
                            "origin": "https://home.m.jd.com",
                            "referer": "https://home.m.jd.com/myJd/newhome.action",
                            "User-Agent": TS_USER_AGENTS_1["default"],
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    })];
                case 1:
                    data = (_c.sent()).data;
                    return [2 /*return*/, (_b = (_a = data.farmUserPro) === null || _a === void 0 ? void 0 : _a.shareCode) !== null && _b !== void 0 ? _b : 'null'];
            }
        });
    });
}
exports.farm = farm;
function health(cookie) {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, axios_1["default"].get("https://api.m.jd.com/client.action/client.action?functionId=jdhealth_getTaskDetail&body=".concat(encodeURIComponent(JSON.stringify({ "buildingId": "", taskId: 6, "channelId": 1 })), "&client=wh5&clientVersion=1.0.0"), {
                        headers: {
                            "Cookie": cookie,
                            "origin": "https://h5.m.jd.com",
                            "referer": "https://h5.m.jd.com/",
                            'Content-Type': 'application/x-www-form-urlencoded',
                            "User-Agent": TS_USER_AGENTS_1["default"]
                        }
                    })];
                case 1:
                    data = (_d.sent()).data;
                    return [2 /*return*/, (_c = (_b = (_a = data.data) === null || _a === void 0 ? void 0 : _a.result) === null || _b === void 0 ? void 0 : _b.taskVos[0].assistTaskDetailVo.taskToken) !== null && _c !== void 0 ? _c : 'null'];
            }
        });
    });
}
exports.health = health;
function pet(cookie) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, axios_1["default"].post('https://api.m.jd.com/client.action', "functionId=initPetTown&body=".concat(JSON.stringify({ "version": 1 }), "&appid=wh5&client=apple&clientVersion=10.3.6&build=167963&rfs=0000"), {
                        headers: {
                            'Host': 'api.m.jd.com',
                            'Origin': 'https://h5.m.jd.com',
                            'User-Agent': TS_USER_AGENTS_1["default"],
                            'Referer': 'https://h5.m.jd.com/',
                            'Content-Type': 'application/x-www-form-urlencoded',
                            'Cookie': cookie
                        }
                    })];
                case 1:
                    data = (_c.sent()).data;
                    return [2 /*return*/, (_b = (_a = data.result) === null || _a === void 0 ? void 0 : _a.shareCode) !== null && _b !== void 0 ? _b : 'null'];
            }
        });
    });
}
exports.pet = pet;
function factory(cookie) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function () {
        var data, _i, _c, t;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, axios_1["default"].post("https://api.m.jd.com/client.action?functionId=jdfactory_getTaskDetail", "functionId=jdfactory_getTaskDetail&body=".concat(encodeURIComponent(JSON.stringify({})), "&client=wh5&clientVersion=9.1.0"), {
                        headers: {
                            Cookie: cookie,
                            origin: "https://h5.m.jd.com",
                            referer: "https://h5.m.jd.com/",
                            "Content-Type": "application/x-www-form-urlencoded",
                            'User-Agent': TS_USER_AGENTS_1["default"]
                        }
                    })];
                case 1:
                    data = (_d.sent()).data;
                    if (data.data.bizCode === 0) {
                        for (_i = 0, _c = (_b = (_a = data.data) === null || _a === void 0 ? void 0 : _a.result) === null || _b === void 0 ? void 0 : _b.taskVos; _i < _c.length; _i++) {
                            t = _c[_i];
                            if (t.taskType === 14)
                                return [2 /*return*/, t.assistTaskDetailVo.taskToken];
                        }
                    }
                    return [2 /*return*/, 'null'];
            }
        });
    });
}
exports.factory = factory;
function sgmh(cookie) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function () {
        var data, _i, _c, t;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, axios_1["default"].post("https://api.m.jd.com/client.action", "functionId=interact_template_getHomeData&body={\"appId\":\"1EFRXxg\",\"taskToken\":\"\"}&client=wh5&clientVersion=1.0.0", {
                        headers: {
                            'Origin': "https://h5.m.jd.com",
                            'Cookie': cookie,
                            'Accept': "application/json, text/plain, */*",
                            'Referer': "https://h5.m.jd.com/babelDiy/Zeus/2WBcKYkn8viyxv7MoKKgfzmu7Dss/index.html",
                            'Host': "api.m.jd.com"
                        }
                    })];
                case 1:
                    data = (_d.sent()).data;
                    if (data.data.bizCode === 0) {
                        for (_i = 0, _c = (_b = (_a = data.data) === null || _a === void 0 ? void 0 : _a.result) === null || _b === void 0 ? void 0 : _b.taskVos; _i < _c.length; _i++) {
                            t = _c[_i];
                            if (t.taskName === '邀请好友助力')
                                return [2 /*return*/, t.assistTaskDetailVo.taskToken];
                        }
                    }
                    return [2 /*return*/, 'null'];
            }
        });
    });
}
exports.sgmh = sgmh;
function jxfactory(cookie) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var url, timestamp, stk, params, t, _i, _b, _c, key, value, h5st, data;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, (0, V3_1.requestAlgo)('c0ff1')];
                case 1:
                    _d.sent();
                    timestamp = Date.now();
                    stk = "_time,bizCode,showAreaTaskFlag,source", params = { showAreaTaskFlag: '1', bizCode: 'dream_factory' };
                    t = [
                        { key: '_time', value: timestamp.toString() },
                        { key: '_ts', value: timestamp.toString() },
                        { key: 'bizCode', value: 'dream_factory' },
                        { key: 'source', value: 'dreamfactory' },
                    ];
                    url = "https://m.jingxi.com/newtasksys/newtasksys_front/GetUserTaskStatusList?source=dreamfactory&_time=".concat(timestamp, "&_ts=").concat(timestamp, "&_stk=").concat(encodeURIComponent(stk), "&_=").concat(timestamp + 3, "&sceneval=2&g_login_type=1&callback=jsonpCBK").concat((0, TS_USER_AGENTS_1.randomWord)(), "&g_ty=ls");
                    for (_i = 0, _b = Object.entries(params); _i < _b.length; _i++) {
                        _c = _b[_i], key = _c[0], value = _c[1];
                        t.push({ key: key, value: value });
                        url += "&".concat(key, "=").concat(value);
                    }
                    h5st = (0, V3_1.geth5st)(t, 'c0ff1');
                    url += "&h5st=".concat(encodeURIComponent(h5st));
                    return [4 /*yield*/, axios_1["default"].get(url, {
                            headers: {
                                'Referer': 'https://actst.jingxi.com/pingou/dream_factory/index.html',
                                'User-Agent': TS_USER_AGENTS_1["default"],
                                'Host': 'm.jingxi.com',
                                'Cookie': cookie
                            }
                        })];
                case 2:
                    data = (_d.sent()).data;
                    return [2 /*return*/, ((_a = JSON.parse(data.match(/try{jsonpCBK.?\((.*)/)[1]).data) === null || _a === void 0 ? void 0 : _a.encryptPin) || 'null'];
            }
        });
    });
}
exports.jxfactory = jxfactory;
