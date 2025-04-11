export const getEvents = async (locale: string) => {
  const CMSConfigAPI = process.env.STRAPI_API_URL || "http://localhost:30001";

  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);
  const currentDateISO = currentDate.toISOString();

  const upcomingEventsParams = `
    ?locale=${locale}
    &fields=name
    &fields=start_date
    &fields=end_date
    &fields=place
    &fields=description
    &fields=link
    &populate[image][fields]=url
    &populate[image_2X][fields]=url
    &filters[$or][0][end_date][$gte]=${currentDateISO}
    &sort=start_date:asc
  `.replace(/\s+/g, "");

  const pastEventsParams = `
    ?locale=${locale}
    &fields=name
    &fields=start_date
    &fields=end_date
    &fields=place
    &fields=link
    &populate[image][fields]=url
    &populate[image_2X][fields]=url
    &filters[end_date][$lt]=${currentDateISO}
    &pagination[pageSize]=1000
  `.replace(/\s+/g, "");

  try {
    const upcomingRes = await fetch(
      `${CMSConfigAPI}/api/events${upcomingEventsParams}`,
    );
    if (!upcomingRes.ok)
      throw new Error(`Failed to fetch upcoming events: ${upcomingRes.status}`);
    const upcomingEvents = await upcomingRes.json();

    const pastRes = await fetch(
      `${CMSConfigAPI}/api/events${pastEventsParams}`,
    );
    if (!pastRes.ok)
      throw new Error(`Failed to fetch past events: ${pastRes.status}`);
    const pastEvents = await pastRes.json();

    return {
      upcoming: upcomingEvents,
      past: pastEvents,
    };
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error;
  }
};
