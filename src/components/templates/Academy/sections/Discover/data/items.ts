export interface ICoursesItems {
  id: string;
  keyModules?: {
    title?: string;
    description: string;
    iconUrl: string;
  }[];
  levels: {
    basic: string[];
    basicplus: string[];
    pro: string[];
  }[];
  featuresCovered?: {
    description: string;
    iconUrl: string;
  }[];
}

export const coursesItems: ICoursesItems[] = [
  {
    id: "docs",
    keyModules: [
      {
        title: "DocumentEditor",
        description: "DocumentEditorDesc",
        iconUrl: "/images/templates/academy/courses/docs/document.svg",
      },
      {
        title: "SpreadsheetEditor",
        description: "SpreadsheetEditorDesc",
        iconUrl: "/images/templates/academy/courses/docs/spreadsheet.svg",
      },
      {
        title: "PresentationEditor",
        description: "PresentationEditorDesc",
        iconUrl: "/images/templates/academy/courses/docs/presentation.svg",
      },
      {
        title: "FormCreator",
        description: "FormCreatorDesc",
        iconUrl: "/images/templates/academy/courses/docs/form.svg",
      },
      {
        title: "PDFEditor",
        description: "PDFEditorDesc",
        iconUrl: "/images/templates/academy/courses/docs/pdf.svg",
      },
    ],
    levels: [
      {
        basic: ["DocsBasic"],
        basicplus: ["DocsBasicPlus1", "DocsBasicPlus2"],
        pro: ["DocsPro1", "DocsPro2"],
      },
    ],
  },
  {
    id: "docspace",
    keyModules: [
      {
        description: "DocspaceCourse1",
        iconUrl: "/images/templates/academy/courses/docspace/collab.svg",
      },
      {
        description: "DocspaceCourse2",
        iconUrl: "/images/templates/academy/courses/docspace/sharing.svg",
      },
    ],
    levels: [
      {
        basic: ["DocspaceBasic"],
        basicplus: ["DocspaceBasicPlus"],
        pro: ["DocspacePro"],
      },
    ],
  },
  {
    id: "workspace",
    levels: [
      {
        basic: ["WorkspaceBasic"],
        basicplus: ["WorkspaceBasicPlus"],
        pro: ["WorkspacePro"],
      },
    ],
    featuresCovered: [
      {
        description: "WorkspaceCourse1",
        iconUrl: "/images/templates/academy/courses/workspace/tools.svg",
      },
      {
        description: "WorkspaceCourse2",
        iconUrl: "/images/templates/academy/courses/workspace/product.svg",
      },
    ],
  },
];
