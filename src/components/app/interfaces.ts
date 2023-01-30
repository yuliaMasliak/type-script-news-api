export interface INews {
    draw(data: []): void;
}

export interface ISource {
    draw(data: []): void;
}

export type Inint = {
    id: string;
    name: string;
};
export interface IArticle {
    source: Inint;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}
export interface ISources {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}
export interface NewsDataType {
    articles: IArticle[];
    totalResults: number;
    status: string;
}

export interface SourceDataType {
    sources: Array<ISources>;
    status: string;
}

export interface IAppView {
    news: INews;
    sources: ISource;
    drawNews(data: NewsDataType): void;
    drawSources(data: SourceDataType): void;
}
export interface IData {
    articles: string;
    sources: string;
}
export type Options<T> = { [key: string]: T };

export type Wrapped<T> = T[];

export type Iload = {
    method?: string;
    endpoint?: string;
    options?: {
        source?: string;
    };
    callback?: void;
};

export type IurlOptions = {
    [optionName: string]: string;
};

export type AllData = IArticle | ISources;

export enum EDays {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
}
export enum EMonth {
    January,
    February,
    March,
    April,
    May,
    June,
    August,
    September,
    October,
    November,
    December,
}
export type Date = {
    dayOfWeek: string;
    dateDay: number;
    monthOfaYear: string;
    year: number;
    GMT: number;
};
export type Time = {
    hours: number;
    minutes: number | string;
    seconds: number;
};
export type TimePick = Pick<Time, 'hours' | 'minutes'>;

export type IApiKey = string;
