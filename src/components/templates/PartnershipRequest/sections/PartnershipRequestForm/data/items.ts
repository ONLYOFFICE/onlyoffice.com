export type SegmentKey =
  | "government"
  | "education"
  | "commerce"
  | "fortune500"
  | "smes"
  | "industry"
  | "otherSegments";

export const targetMarketSegments: Array<{ key: SegmentKey; label: string; id: string }> = [
  { key: "government", label: "Government", id: "Government" },
  { key: "education", label: "Education", id: "Education" },
  { key: "commerce", label: "Commerce", id: "Commerce" },
  { key: "fortune500", label: "Fortune500Companies", id: "Fortune500companies" },
  { key: "smes", label: "SaMSEnterprises", id: "SaMSEnterprises" },
  { key: "industry", label: "Industry", id: "Industry" },
  { key: "otherSegments", label: "Other", id: "OtherSegments" },
];