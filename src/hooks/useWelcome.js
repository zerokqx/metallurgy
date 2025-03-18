"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
var react_1 = require("react");
/**
 * @description Отслеживает является ли пользователь новоприбывшем или уже был
 * на данном сайте.
 * @param auto Параметр который отвечает за автоматическую регистрацию юзера
 * как не нового. Не возвращет Function регистрации юзера
 * @param debug при debug true пользователь будет всегда новым и status true.
 * По умолчанию false
 *
 */
exports.x = 10;
var useWelcome = function (auto, debug) {
    if (auto === void 0) { auto = false; }
    if (debug === void 0) { debug = false; }
    var keyName = 'welcome';
    var trigger = localStorage.getItem(keyName);
    var _a = (0, react_1.useState)(true), status = _a[0], setStatus = _a[1];
    (0, react_1.useEffect)(function () {
        if (debug)
            return;
        else {
            auto && setWelcome();
            trigger ? setStatus(false) : setStatus(true);
        }
    }, [trigger]);
    var setWelcome = function () {
        if (!trigger)
            localStorage.setItem(keyName, '1');
    };
    return auto ? status : [status, setWelcome];
};
exports.default = useWelcome;
