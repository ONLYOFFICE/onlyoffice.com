interface ICategories {
  id: string;
  label: string;
  items?: ICategories[];
}

export const categories: ICategories[] = [
  { id: "all", label: "AllConnectors" },
  {
    id: "by-products",
    label: "ByProducts",
    items: [
      { id: "docs", label: "Docs" },
      { id: "docspace", label: "DocSpace" },
    ],
  },
  {
    id: "by-developers",
    label: "ByDevelopers",
    items: [
      { id: "oo-developers", label: "OODevelopers" },
      { id: "partners", label: "Partners" },
    ],
  },
];
