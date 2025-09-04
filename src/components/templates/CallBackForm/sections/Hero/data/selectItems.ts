import { ISelectOption } from "@src/components/ui/Select";

const selectLangItems: ISelectOption[] = [
  { value: "en", label: "English" },
  { value: "de", label: "Deutsch" },
  { value: "fr", label: "Français" },
  { value: "es", label: "Español" },
  { value: "ru", label: "Русский" },
  { value: "zh", label: "中文" },
];

const selectProductItems: ISelectOption[] = [
  { value: "Docs Enterprise", label: "DocsEE" },
  { value: "Docs Developer", label: "DocsDE" },
  { value: "Docs Cloud", label: "DocsCloud" },
  { value: "DocSpace Enterprise", label: "DocSpaceEE" },
  { value: "DocSpace Developer", label: "DocSpaceDE" },
  { value: "DocSpace Cloud", label: "DocSpaceCloud" },
];

const selectCallTopicItems: ISelectOption[] = [
  { value: "Sales", label: "Sales" },
  { value: "FeaturesOverview", label: "FeaturesOverview" },
  { value: "SoftwareDevelopment", label: "SoftwareDevelopment" },
  { value: "Complaint", label: "Complaint" },
  { value: "DemoRequest", label: "DemoRequest" },
];

export { selectLangItems, selectProductItems, selectCallTopicItems };
