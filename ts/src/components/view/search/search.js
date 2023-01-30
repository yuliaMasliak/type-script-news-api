var searchNews = function () {
    var sourcesBtns = document.querySelector('main');
    var searchInput = document.createElement('div');
    searchInput.classList.add('search');
    searchInput.innerHTML =
        '<form><input type="text" class="search-input"/><input type="submit" class="submit-input" value="Search"/></form>';
    sourcesBtns.prepend(searchInput);
};
export default searchNews;
