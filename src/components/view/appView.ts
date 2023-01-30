import News from './news/news';
import Sources from './sources/sources';
import { IAppView, SourceDataType, NewsDataType } from '../app/interfaces';

export class AppView implements IAppView {
    news: News;
    sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data?: NewsDataType): void {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data?: SourceDataType): void {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
