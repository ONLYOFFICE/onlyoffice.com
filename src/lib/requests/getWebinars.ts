export const getWebinars = async (locale: string) => {
  const CMSConfigAPI = process.env.STRAPI_API_URL || "http://localhost:30001";

  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);
  const currentDateISO = currentDate.toISOString();

  const upcomingWebinarsParams = `
    ?locale=${locale}
    &fields=title
    &fields=date
    &fields=description
    &fields=language
    &fields=product
    &fields=watch_link
    &fields=speaker
    &populate[speaker_image][fields][0]=url
    &sort=date:desc
    &filters[date][$gte]=${currentDateISO}
  `.replace(/\s+/g, "");

  const pastWebinarsParams = `
    ?locale=${locale}
    &fields=title
    &fields=date
    &fields=description
    &fields=language
    &fields=product
    &fields=watch_link
    &fields=speaker
    &populate[speaker_image][fields][0]=url
    &sort=date:desc
    &filters[date][$lt]=${currentDateISO}
  `.replace(/\s+/g, "");

  try {
    const upcomingRes = await fetch(
      `${CMSConfigAPI}/api/webinars${upcomingWebinarsParams}`,
    );
    if (!upcomingRes.ok)
      throw new Error(`Failed to fetch webinars: ${upcomingRes.status}`);
    const upcomingWebinars = await upcomingRes.json();

    const pastRes = await fetch(
      `${CMSConfigAPI}/api/webinars${pastWebinarsParams}`,
    )
    if (!pastRes.ok)
      throw new Error(`Failed to fetch webinars: ${pastRes.status}`);
    const pastWebinars = await pastRes.json();

    return {
      upcoming: upcomingWebinars,
      past: pastWebinars,
    };
  } catch (error) {
    console.error("Error fetching webinars:", error);
    throw error;
  }
};
