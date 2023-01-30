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
import AppLoader from './appLoader';
var AppController = /** @class */ (function (_super) {
    __extends(AppController, _super);
    function AppController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppController.prototype.getSources = function (callback) {
        _super.prototype.getResp.call(this, {
            endpoint: 'sources',
        }, callback);
    };
    AppController.prototype.getNews = function (e, callback) {
        var target = e.target;
        var newsContainer = e.currentTarget;
        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                var sourceId = target.getAttribute('data-source-id');
                if (typeof sourceId !== 'string')
                    return;
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    _super.prototype.getResp.call(this, {
                        endpoint: 'everything',
                        options: {
                            sources: sourceId,
                        },
                    }, callback);
                }
                return;
            }
            target = target.parentNode;
        }
    };
    return AppController;
}(AppLoader));
export default AppController;
