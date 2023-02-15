export interface Linksmodel {
    name:string;
    link:string;
    dropdown?:boolean;
}

export interface deservemodel {
    image:string;
    title:string;
    subtitle?:string;
}

export interface Projectmodel {
    image:any;
    title:string;
    type?:string;
}

export interface latestModel {
    image:any;
    title:string;
    date?:string;
    time?:string;
    type?:string;
}

export interface helpModel {
    image:any;
    title:string;
    subtitle:string;
    svg:any;
}