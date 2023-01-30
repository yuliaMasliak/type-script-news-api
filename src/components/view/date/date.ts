import { EDays, EMonth, Date, TimePick } from '../../app/interfaces';
import './date.css';

const dateBlock = document.querySelector('.date') as HTMLElement;

function getDate(): void {
    const date = new Date();
    const dateToShow: Partial<Date> = {
        dayOfWeek: '',
        dateDay: date.getDate(),
        monthOfaYear: '',
        year: date.getFullYear(),
    };

    const day = date.getDay();
    const month = date.getMonth();

    for (let key in Object.values(EDays)) {
        if (+key === day) {
            dateToShow.dayOfWeek = EDays[key];
        }
    }
    for (let key in Object.values(EMonth)) {
        if (+key === month) {
            dateToShow.monthOfaYear = EMonth[key];
        }
    }
    const timeToShow: TimePick = {
        hours: date.getHours(),
        minutes: date.getMinutes(),
    };
    if (date.getMinutes() < 10) {
        timeToShow.minutes = '0' + date.getMinutes();
    }
    dateBlock.innerHTML = `${dateToShow.dayOfWeek} ${timeToShow.hours}:${timeToShow.minutes} <br> ${dateToShow.dateDay} ${dateToShow.monthOfaYear} ${dateToShow.year}`;
}
export default getDate;
