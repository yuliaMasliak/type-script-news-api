import App from './components/app/app';
import './global.css';
import { submitBtn, handleSearch } from './components/view/search/search';
import getDate from './components/view/date/date';

const app = new App();
app.start();
submitBtn.addEventListener('click', handleSearch);
getDate();
