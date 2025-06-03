export const getPartners = async (locale: string) => {
  const CMSConfigAPI = process.env.STRAPI_API_URL || "http://localhost:30001";

  const getPartnersParams = `
    ?locale=${locale}
    &fields=name
    &fields=country
    &fields=description
    &fields=order
    &fields=link
    &fields=level
    &fields=url_type
    &populate[logo][fields]=url
    &pagination[limit]=300
    &sort=name:asc
  `.replace(/\s+/g, "");

  try {
    const response = await fetch(
      `${CMSConfigAPI}/api/partners${getPartnersParams}`,
    );

    if (!response.ok)
      throw new Error(`Failed to fetch partners: ${response.status}`);

    const partnersData = await response.json();

    return {
      partners: partnersData
    };
  } catch (error) {
    console.error("Error fetching partners:", error);
    throw error;
  }
};
