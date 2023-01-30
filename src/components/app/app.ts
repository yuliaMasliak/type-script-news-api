import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { NewsDataType, SourceDataType } from './interfaces';

class App {
    controller: AppController;

    view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void {
        (<HTMLElement>document.querySelector('.sources')).addEventListener('click', (e: Event) =>
            this.controller.getNews(e, (data?: NewsDataType) => this.view.drawNews(data))
        );
        this.controller.getSources((data?: SourceDataType) => this.view.drawSources(data));
    }
}

export default App;
