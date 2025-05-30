import { IDocsEnterprisePricesFormData } from "@src/components/templates/DocsEnterprisePrices/sections/Hero";
import { IDocsEnterprisePricesTemplate } from "@src/components/templates/DocsEnterprisePrices";

export const getProduct = (
  formData: IDocsEnterprisePricesFormData,
  productsData: IDocsEnterprisePricesTemplate["productsData"],
) => {
  if (formData.connectionsNumber === "more") return null;

  const supportAndUpdates = formData.supportAndUpdates;
  const supportLevel = formData.supportLevel;
  const connections = formData.connectionsNumber;

  const dataMap =
    supportAndUpdates === "3-year" && formData.disasterRecovery
      ? {
          Basic: {
            "50": productsData.basic3YearsSupport1,
            "100": productsData.basic3YearsSupport2,
            "200": productsData.basic3YearsSupport3,
          },
          Plus: {
            "50": productsData.plus3YearsSupport1,
            "100": productsData.plus3YearsSupport2,
            "200": productsData.plus3YearsSupport3,
          },
          Premium: {
            "50": productsData.premium3YearsSupport1,
            "100": productsData.premium3YearsSupport2,
            "200": productsData.premium3YearsSupport3,
          },
        }
      : supportAndUpdates === "3-year"
        ? {
            Basic: {
              "50": productsData.basic3Years1,
              "100": productsData.basic3Years2,
              "200": productsData.basic3Years3,
            },
            Plus: {
              "50": productsData.plus3Years1,
              "100": productsData.plus3Years2,
              "200": productsData.plus3Years3,
            },
            Premium: {
              "50": productsData.premium3Years1,
              "100": productsData.premium3Years2,
              "200": productsData.premium3Years3,
            },
          }
        : formData.disasterRecovery
          ? {
              Basic: {
                "50": productsData.basicSupport1,
                "100": productsData.basicSupport2,
                "200": productsData.basicSupport3,
              },
              Plus: {
                "50": productsData.plusSupport1,
                "100": productsData.plusSupport2,
                "200": productsData.plusSupport3,
              },
              Premium: {
                "50": productsData.premiumSupport1,
                "100": productsData.premiumSupport2,
                "200": productsData.premiumSupport3,
              },
            }
          : {
              Basic: {
                "50": productsData.basic1,
                "100": productsData.basic2,
                "200": productsData.basic3,
              },
              Plus: {
                "50": productsData.plus1,
                "100": productsData.plus2,
                "200": productsData.plus3,
              },
              Premium: {
                "50": productsData.premium1,
                "100": productsData.premium2,
                "200": productsData.premium3,
              },
            };

  return dataMap[supportLevel]?.[connections] ?? null;
};
