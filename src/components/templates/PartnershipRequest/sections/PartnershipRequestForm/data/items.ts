export type SegmentKey =
  | "government"
  | "education"
  | "commerce"
  | "fortune500"
  | "smes"
  | "industry"
  | "otherSegments";

export type InfoSourceKey =
  | "article"
  | "conference"
  | "partner"
  | "customer"
  | "otherInfoSource";

export type PromoteKey =
  | "websitePromote"
  | "socialNetworks"
  | "conferencesAndEvents"
  | "publications"
  | "personalSelling"
  | "onlineAdvertising"
  | "printAdvertising"
  | "videoAdvertising"
  | "tvAndRadioAdvertising"
  | "packaging"
  | "otherPromote";

export const targetMarketSegments: Array<{ key: SegmentKey; label: string; id: string; name: string }> = [
  { key: "government", label: "Government", id: "Government", name: "Government" },
  { key: "education", label: "Education", id: "Education", name: "Education" },
  { key: "commerce", label: "Commerce", id: "Commerce", name: "Commerce" },
  { key: "fortune500", label: "Fortune500Companies", id: "Fortune500companies", name: "Fortune 500 companies" },
  { key: "smes", label: "SaMSEnterprises", id: "SaMSEnterprises", name: "Small and medium-sized enterprises" },
  { key: "industry", label: "Industry", id: "Industry", name: "Industry" },
  { key: "otherSegments", label: "Other", id: "OtherSegments", name: "Other" },
];

export const partnerInfoSource: Array<{ key: InfoSourceKey; label: string; id: string; name: string }> = [
  { key: "article", label: "Article", id: "Article", name: "Article" },
  { key: "conference", label: "Conference", id: "Conference", name: "Conference" },
  { key: "partner", label: "Partner", id: "Partner", name: "Partner" },
  { key: "customer", label: "Customer", id: "Customer", name: "Customer" },
  { key: "otherInfoSource", label: "Other", id: "OtherInfoSource", name: "Other" },
];

export const partnerPromote: Array<{ key: PromoteKey; label: string; id: string; name: string }> = [
  { key: "websitePromote", label: "Website", id: "Website", name: "Website" },
  { key: "socialNetworks", label: "SocialNetworks", id: "SocialNetworks", name: "Social networks" },
  { key: "conferencesAndEvents", label: "ConferencesAndEvents", id: "ConferencesAndEvents", name: "Conferences and events" },
  { key: "publications", label: "Publications", id: "Publications", name: "Publications" },
  { key: "personalSelling", label: "PersonalSelling", id: "PersonalSelling", name: "Personal selling" },
  { key: "onlineAdvertising", label: "OnlineAdvertising", id: "OnlineAdvertising", name: "Online advertising" },
  { key: "printAdvertising", label: "PrintAdvertising", id: "PrintAdvertising", name: "Print advertising" },
  { key: "videoAdvertising", label: "VideoAdvertising", id: "VideoAdvertising", name: "Video advertising" },
  { key: "tvAndRadioAdvertising", label: "TVAndRadioAdvertising", id: "TVAndRadioAdvertising", name: "TV and Radio advertising" },
  { key: "packaging", label: "Packaging", id: "Packaging", name: "Packaging" },
  { key: "otherPromote", label: "Other", id: "OtherPromote", name: "Other" },
];