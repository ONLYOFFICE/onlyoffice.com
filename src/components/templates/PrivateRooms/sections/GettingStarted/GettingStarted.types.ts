export interface IGettingStarted {
    title: string;

    text: {
        heading: string;
        textLinks?: {

            url: string;
            
            isExternal?: boolean;
    }[];
    }[]

    btnTitle: string;

    btnSubTitle: string;

    btnText: string;
}