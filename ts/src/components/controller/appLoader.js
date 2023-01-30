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
import Loader from './loader';
var AppLoader = /** @class */ (function (_super) {
    __extends(AppLoader, _super);
    function AppLoader() {
        return _super.call(this, 'https://newsapi.org/v2/', {
            apiKey: 'd70cb089c27d4cfdafcab0bb9e9a9bfc',
        }) || this;
    }
    return AppLoader;
}(Loader));
export default AppLoader;
