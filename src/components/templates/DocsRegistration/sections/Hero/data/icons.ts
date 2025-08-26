import { IIconTooltip } from "@src/components/widgets/IconTooltip";

const iconsSprite = "/images/templates/docs-registration/editors-sprite.svg";

export const icons: IIconTooltip[] = [
  {
    id: "document-editor",
    tooltipLabel: "DocumentEditors",
    href: "/document-editor",
    icon: {
      url: iconsSprite,
    },
  },
  {
    id: "spreadsheet-editor",
    tooltipLabel: "SpreadsheetEditor",
    href: "/spreadsheet-editor",
    icon: {
      url: iconsSprite,
      positionX: "-72px",
    },
  },
  {
    id: "presentation-editor",
    tooltipLabel: "PresentationEditor",
    href: "/presentation-editor",
    icon: {
      url: iconsSprite,
      positionX: "-144px",
    },
  },
  {
    id: "pdf-editor",
    tooltipLabel: "PdfReader",
    href: "/pdf-editor",
    icon: {
      url: iconsSprite,
      positionX: "-216px",
    },
  },
  {
    id: "form-creator",
    tooltipLabel: "FormCreator",
    href: "/form-creator",
    icon: {
      url: iconsSprite,
      positionX: "-288px",
    },
  },
];
