export const getCustomers = async (locale: string) => {
  const CMSConfigAPI = process.env.STRAPI_API_URL || "http://localhost:30001";

  const getCustomersParams = `
    ?locale=${locale}
    &fields=title
    &fields=url
    &populate[img][fields]=url
    &populate[url_pdf][fields]=url
    &fields=order
  `.replace(/\s+/g, "");

  try {
    const response = await fetch(
      `${CMSConfigAPI}/api/customers${getCustomersParams}`,
    );

    if (!response.ok)
      throw new Error(`Failed to fetch customers: ${response.status}`);

    const customersData = await response.json();

    return {
      customers: customersData,
    };
  } catch (error) {
    console.error("Error fetching customers:", error);
    throw error;
  }
};