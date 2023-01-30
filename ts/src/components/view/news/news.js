import './news.css';
var News = /** @class */ (function () {
    function News() {
    }
    News.prototype.draw = function (data) {
        var news = data.length >= 10 ? data.filter(function (_item, idx) { return idx < 10; }) : data;
        var fragment = document.createDocumentFragment();
        var newsItemTemp = document.querySelector('#newsItemTemp');
        news.forEach(function (item, idx) {
            var newsClone = newsItemTemp.content.cloneNode(true);
            if (idx % 2) {
                var newsItem = newsClone.querySelector('.news__item');
                newsItem.classList.add('alt');
            }
            var newsMetaPhoto = newsClone.querySelector('.news__meta-photo');
            newsMetaPhoto.style.backgroundImage = "url(".concat(item.urlToImage || 'img/news_placeholder.jpg', ")");
            var newsMetaAuthor = newsClone.querySelector('.news__meta-author');
            newsMetaAuthor.textContent = item.author || item.source.name;
            var NewsMetaDate = newsClone.querySelector('.news__meta-date');
            NewsMetaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
            var NewsDecsrTitle = newsClone.querySelector('.news__description-title');
            NewsDecsrTitle.textContent = item.title;
            var NewsDecsrSorce = newsClone.querySelector('.news__description-source');
            NewsDecsrSorce.textContent = item.source.name;
            var NewsDecsrContent = newsClone.querySelector('.news__description-content');
            NewsDecsrContent.textContent = item.description;
            var NewsReadMore = newsClone.querySelector('.news__read-more a');
            NewsReadMore.setAttribute('href', item.url);
            fragment.append(newsClone);
        });
        var newsBlock = document.querySelector('.news');
        newsBlock.innerHTML = '';
        var newsBlock1 = document.querySelector('.news');
        newsBlock1.appendChild(fragment);
    };
    return News;
}());
export default News;
