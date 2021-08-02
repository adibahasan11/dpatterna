"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoldDecorator = void 0;
var textDecorator_1 = require("./textDecorator");
var BoldDecorator = /** @class */ (function (_super) {
    __extends(BoldDecorator, _super);
    function BoldDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BoldDecorator.prototype.decoration = function () {
        return _super.prototype.decoration.call(this).bold();
    };
    return BoldDecorator;
}(textDecorator_1.TextDecorator));
exports.BoldDecorator = BoldDecorator;
