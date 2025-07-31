import { IItemsTab } from "../Formats.types";

export const itemsTab: IItemsTab[] = [
    {
        heading: "AdvancedDocumentProcessing",
        text: "InsertFormattedText",
        iconPositionX: 0,
        code: "docBuilder",
        href: "https://static-www.teamlab.info/v9.5.0/images/landing/document-builder/documents/sampletext.docx",
        apiIcons: [
            {
                row: [
                { label: "Edit",    width: "100%", widthTablet: "calc(33% - 11px)", widthMobile: "calc(50% - 8px)",       iconPosX: 0,   },
                { label: "Convert", width: "100%", widthTablet: "calc(33% - 11px)", widthMobile: "calc(50% - 8px)",        iconPosX: -48, },
                { label: "Merge",   width: "100%", widthTablet: "calc(33% - 11px)", widthMobile: "calc(50% - 8px)",        iconPosX: -96, },
                { label: "Split",   width: "100%", widthTablet: "calc(33% - 11px)", widthMobile: "calc(50% - 8px)",        iconPosX: -144 },
                { label: "Compress",width: "100%", widthTablet: "calc(33% - 11px)", widthMobile: "calc(50% - 8px)",        iconPosX: -192 },
                { label: "Compare", width: "100%", widthTablet: "calc(33% - 11px)", widthMobile: "calc(50% - 8px)",        iconPosX: -240 },
                ],
            },
            {
                row: [
                { label: "Rotate",          minWidth: "calc(14.41% - 14px)", widthTablet: "calc(33% - 11px)", widthMobile: "calc(50% - 8px)", iconPosX: -287, },
                { label: "DeletePages",     minWidth: "calc(14.41% - 14px)", widthTablet: "calc(33% - 11px)", widthMobile: "calc(50% - 8px)", iconPosX: -336, },
                { label: "GenerateReports", minWidth: "calc(14.41% - 14px)", widthTablet: "calc(33% - 11px)", widthMobile: "calc(50% - 8px)", iconPosX: -385, },
                { label: "CreateInvoices",  minWidth: "calc(14.41% - 14px)", widthTablet: "calc(33% - 11px)", widthMobile: "calc(50% - 8px)", iconPosX: -432, },
                { label: "Translate",       minWidth: "calc(14.41% - 14px)", widthTablet: "calc(33% - 11px)", widthMobile: "calc(50% - 8px)", iconPosX: -480, },
                { label: "RemoveComments",  minWidth: "calc(14.41% - 14px)", widthTablet: "calc(33% - 11px)", widthMobile: "calc(50% - 8px)", iconPosX: -528, },
                ],
            },
            {
                row: [
                { label: "SearchAndReplace", minWidth: "calc(16.35% - 18px)", widthTablet: "calc(33% - 11px)", widthMobile: "calc(50% - 8px)", iconPosX: -576, },
                { label: "Parser",           minWidth: "calc(16.35% - 18px)", widthTablet: "calc(33% - 11px)", widthMobile: "calc(50% - 8px)", iconPosX: -624, },
                { label: "MailMerge",        minWidth: "calc(16.35% - 18px)", widthTablet: "calc(33% - 11px)", widthMobile: "calc(50% - 8px)", iconPosX: -672  },
                { label: "OCR",              minWidth: "calc(16.35% - 18px)", widthTablet: "calc(33% - 11px)", widthMobile: "calc(50% - 8px)", iconPosX: -720  },
                { label: "Watermarks",       minWidth: "calc(16.35% - 18px)", widthTablet: "calc(33% - 11px)", widthMobile: "calc(50% - 8px)", iconPosX: -768, },
                { label: "Annotation",       minWidth: "calc(16.35% - 18px)", widthTablet: "calc(33% - 11px)", widthMobile: "calc(50% - 8px)", iconPosX: -816, },
                ],
            }
        ],
        apiLinks: true
    },
    {
        heading: "SpreadsheetCreation",
        text: "FormatTheSelectedRange",
        iconPositionX: -56,
        code: "xlsxBuilder",
        href: "https://static-www.teamlab.info/v9.5.0/images/landing/document-builder/documents/samplespreadsheet.xlsx",
        apiIcons: [
            {
                row: [
                { label: "Edit",        width: "100%", widthTablet: "calc(33% - 11px)", widthMobile: "calc(50% - 8px)",       iconPosX: 0,   },
                { label: "Convert",     width: "100%", widthTablet: "calc(33% - 11px)", widthMobile: "calc(50% - 8px)",        iconPosX: -48, },
                { label: "xlxsToPdf",   width: "100%", widthTablet: "calc(33% - 11px)", widthMobile: "calc(50% - 8px)",        iconPosX: -864, },
                { label: "xlxsToPng",   width: "100%", widthTablet: "calc(33% - 11px)", widthMobile: "calc(50% - 8px)",        iconPosX: -912 },
                { label: "xlxsToHtml",  width: "100%", widthTablet: "calc(33% - 11px)", widthMobile: "calc(50% - 8px)",        iconPosX: -960 },
                { label: "xlxsToCsv",   width: "100%", widthTablet: "calc(33% - 11px)", widthMobile: "calc(50% - 8px)",        iconPosX: -1008 },
                ],
            },
            {
                row: [
                { label: "Merge",           width: "calc(20% - 12px)", widthTablet: "calc(33% - 11px)", widthMobile: "calc(50% - 8px)", iconPosX: -96, },
                { label: "Split",           width: "calc(20% - 12px)", widthTablet: "calc(33% - 11px)", widthMobile: "calc(50% - 8px)", iconPosX: -144, },
                { label: "Compress",        width: "calc(20% - 12px)", widthTablet: "calc(33% - 11px)", widthMobile: "calc(50% - 8px)", iconPosX: -192, },
                { label: "AssembleContent", width: "calc(20% - 12px)", widthTablet: "calc(33% - 11px)", widthMobile: "calc(50% - 8px)", iconPosX: -1200, },
                { label: "SearchAndReplace",width: "calc(20% - 12px)", widthTablet: "calc(33% - 11px)", widthMobile: "calc(50% - 8px)", iconPosX: -576, },
                ],
            },
            {
                row: [
                { label: "RenderCharts",        minWidth: "calc(23% - 13px)", widthTablet: "calc(33% - 11px)", widthMobile: "calc(50% - 8px)", iconPosX: -1057, },
                { label: "ClearTheContents",    minWidth: "calc(23% - 13px)", widthTablet: "calc(33% - 11px)", widthMobile: "calc(50% - 8px)", iconPosX: -1153, },
                { label: "ReverseAndRotate",    minWidth: "calc(23% - 13px)", widthTablet: "calc(33% - 11px)", widthMobile: "calc(50% - 8px)", iconPosX: -1102, },
                { label: "Parser",              minWidth: "calc(23% - 13px)", widthTablet: "calc(33% - 11px)", widthMobile: "calc(50% - 8px)", iconPosX: -624, },
                ],
            }
        ],
        apiLinks: true
    },
    {
        heading: "SmoothPresentation",
        text: "AddAndManageSlides",
        iconPositionX: -112,
        code: "pptxBuilder",
        href: "https://static-www.teamlab.info/v9.5.0/images/landing/document-builder/documents/samplepresentation.pptx",
        apiIcons: [
            {
                row: [
                { label: "Edit",    width: "100%", widthTablet: "calc(33% - 11px)", widthMobile: "calc(50% - 8px)", iconPosX: 0,   },
                { label: "Convert", width: "100%", widthTablet: "calc(33% - 11px)", widthMobile: "calc(50% - 8px)", iconPosX: -48, },
                { label: "Search",  width: "100%", widthTablet: "calc(33% - 11px)", widthMobile: "calc(50% - 8px)", iconPosX: -1345, },
                { label: "Merge",   width: "100%", widthTablet: "calc(33% - 11px)", widthMobile: "calc(50% - 8px)", iconPosX: -96 },
                { label: "Split",   width: "100%", widthTablet: "calc(33% - 11px)", widthMobile: "calc(50% - 8px)", iconPosX: -144 },
                ],
            },
            {
                row: [
                { label: "SearchAndReplace", minWidth: "calc(25% - 12px)", widthTablet: "calc(33% - 11px)", widthMobile: "calc(50% - 8px)", iconPosX: -576, },
                { label: "CreateCharts",     minWidth: "calc(25% - 12px)", widthTablet: "calc(33% - 11px)", widthMobile: "calc(50% - 8px)", iconPosX: -1249, },
                { label: "CombineImages",    minWidth: "calc(25% - 12px)", widthTablet: "calc(33% - 11px)", widthMobile: "calc(50% - 8px)", iconPosX: -1296, },
                { label: "Parser",           minWidth: "calc(25% - 12px)", widthTablet: "calc(33% - 11px)", widthMobile: "calc(50% - 8px)", iconPosX: -624, },
                ],
            },
        ],
        apiLinks: true
    },
    {
        heading: "FillableForm",
        text: "AddDifferentFields",
        iconPositionX: -280,
        code: "formBuilder",
        href: "https://static-www.teamlab.info/v9.5.0/images/landing/document-builder/documents/sampleform.pdf",
        apiIcons: [],
        apiLinks: false
    },
    {
        heading: "EasyPDF",
        text: "EffortlesslySaveYourDocs",
        iconPositionX: -224,
        code: "pdfBuilder",
        href: "https://static-www.teamlab.info/v9.5.0/images/landing/document-builder/documents/sampleformats.pdf",
        apiIcons: [
            {
                row: [
                { label: "Merge",   width: "100%", widthTablet: "calc(33% - 11px)", widthMobile: "calc(50% - 8px)", iconPosX: -96 },
                { label: "Rotate",    width: "100%", widthTablet: "calc(33% - 11px)", widthMobile: "calc(50% - 8px)", iconPosX: -287,  },
                { label: "Split", width: "100%", widthTablet: "calc(33% - 11px)", widthMobile: "calc(50% - 8px)", iconPosX: -144, },
                { label: "Sign",  width: "100%", widthTablet: "calc(33% - 11px)", widthMobile: "calc(50% - 8px)", iconPosX: -1392, },
                ],
            },
        ],
        apiLinks: false
    },
]