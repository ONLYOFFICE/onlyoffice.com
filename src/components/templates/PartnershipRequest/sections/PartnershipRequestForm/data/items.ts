export type SegmentKey =
  | "government"
  | "education"
  | "commerce"
  | "fortune500"
  | "smes"
  | "industry"
  | "otherSegments";

export const targetMarketSegments: Array<{ key: SegmentKey; label: string; id: string; name: string }> = [
  { key: "government", label: "Government", id: "Government", name: "Government" },
  { key: "education", label: "Education", id: "Education", name: "Education" },
  { key: "commerce", label: "Commerce", id: "Commerce", name: "Commerce" },
  { key: "fortune500", label: "Fortune500Companies", id: "Fortune500companies", name: "Fortune 500 companies" },
  { key: "smes", label: "SaMSEnterprises", id: "SaMSEnterprises", name: "Small and medium-sized enterprises" },
  { key: "industry", label: "Industry", id: "Industry", name: "Industry" },
  { key: "otherSegments", label: "Other", id: "OtherSegments", name: "Other" },
];