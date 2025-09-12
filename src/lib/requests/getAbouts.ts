export const getAbouts = async (locale: string) => {
  const CMSConfigAPI = process.env.STRAPI_API_URL || "http://localhost:30001";

  const aboutsParams = `
    ?locale=${locale}
    &fields=id
    &fields=date
    &fields=description
    &sort=date:asc
  `.replace(/\s+/g, "");

  try {
    const res = await fetch(`${CMSConfigAPI}/api/abouts${aboutsParams}`);

    if (!res.ok)
      throw new Error(`Failed to fetch abouts: ${res.status}`);

    const abouts = await res.json();
    return abouts;
  } catch (error) {
    console.error("Failed to fetch abouts:", error);
    throw error;
  }
}