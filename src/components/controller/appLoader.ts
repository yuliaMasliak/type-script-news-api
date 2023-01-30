import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '9df73b9103bf44149cab4e959d5dd37d',
        });
    }
}

export default AppLoader;
