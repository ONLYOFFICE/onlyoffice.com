const getEvents = async (locale, queryForm) => {
  const CMSConfigAPI = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:30001";
  
 
  
  const params = `
    ?${queryForm ? `filters[url][$eq]=${queryForm}&` : ''}
    locale=${locale}
    &fields=name
    &fields=start_date
    &fields=end_date
    &fields=start_time
    &fields=end_time    
    &fields=place
    &fields=description
    &fields=link
    &fields=pastlink
    &populate[image][fields]=url
    &populate[image_2X][fields]=url    
  `.replace(/\s+/g, "");
  
  try {
    
    
    const res = await fetch(`${CMSConfigAPI}/api/events${params}`);
    
    if (!res.ok) {
      throw new Error(`Failed to fetch events: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error;
  }
};

module.exports = getEvents;