import './sources.css';
var Sources = /** @class */ (function () {
    function Sources() {
    }
    Sources.prototype.draw = function (data) {
        var fragment = document.createDocumentFragment();
        var sourceItemTemp = document.querySelector('#sourceItemTemp');
        data.forEach(function (item) {
            var sourceClone = sourceItemTemp.content.cloneNode(true);
            var SourceItemName = sourceClone.querySelector('.source__item-name');
            SourceItemName.textContent = item.name;
            var SourceItem = sourceClone.querySelector('.source__item');
            SourceItem.setAttribute('data-source-id', item.id);
            fragment.append(sourceClone);
        });
        document.querySelector('.sources').append(fragment);
    };
    return Sources;
}());
export default Sources;
