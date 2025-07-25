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
    title: "ActionsExampleDocumentTitleDocx",
    fileType: "docx",
    docType: "word",
    mode: "edit",
    uiTheme: "theme-light",
    text: "ActionsEditDocx",
    isCollaborate: false,
  },
  {
    id: 2,
    url: "https://static.onlyoffice.com/assets/docs/samples/demo.xlsx",
    title: "ActionsExampleDocumentTitleXlsx",
    fileType: "xlsx",
    docType: "cell",
    mode: "edit",
    uiTheme: "theme-light",
    text: "ActionsEditXlsx",
    isCollaborate: false,
  },
  {
    id: 3,
    url: "https://static.onlyoffice.com/assets/docs/samples/demo.pptx",
    title: "ActionsExampleDocumentTitlePptx",
    fileType: "pptx",
    docType: "slide",
    mode: "edit",
    uiTheme: "theme-light",
    text: "ActionsEditPptx",
    isCollaborate: false,
    },
];
