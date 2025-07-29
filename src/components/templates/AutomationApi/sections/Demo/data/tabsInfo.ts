import { IButtonInfo } from "../Demo.types";

let isMobile: boolean = false;
const isMobileOnInit = () => {
  if (typeof window === "undefined") return;
  isMobile = window.innerWidth <= 768;
}
isMobileOnInit();

export const tabsInfo: IButtonInfo[] = [
  {
    id: 1,
    url: "https://static.onlyoffice.com/assets/docs/samples/withcomments.docx",
    title: "Example Title.docx",
    fileType: "docx",
    docType: "word",
    mode: "edit",
    uiTheme: "theme-light",
    text: "WorkingWithComments",
    desc: "CollectsAllTheCommentsFrom",
    iconPositionX: 0,
  },
  {
    id: 2,
    url: "https://static.onlyoffice.com/assets/docs/samples/review.docx",
    title: "Demo.docx",
    fileType: "docx",
    docType: "word",
    mode: "edit",
    uiTheme: "theme-light",
    text: "WorkingWithReview",
    desc: "ManagesReviewProcess",
    iconPositionX: -112,
    permissions: {
      review: true,
    },
  },
  {
    id: 3,
    url: "https://static.onlyoffice.com/assets/docs/samples/withtags.pdf",
    title: "Demo.pdf",
    fileType: "pdf",
    docType: "pdf",
    mode: "view",
    uiTheme: "theme-light",
    text: "FillingOutForms",
    desc: "FillsInTheEmptyCells",
    iconPositionX: -55,
    permissions: {
      fillForms: true,
    },
    },
];
