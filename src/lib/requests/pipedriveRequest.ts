interface IPipedriveRequest {
  _ga: string;
  title: string;
  firstName: string;
  email: string;
  phone: string;
  companyName: string;
  website?: string;
  buttonId?: string;
  type?: string;
  from: string;
  langOfPage: string;
  utmSource?: string;
  utmCampaign?: string;
}

export const pipedriveRequest = async ({
  _ga,
  title,
  firstName,
  email,
  phone,
  companyName,
  website,
  from,
  buttonId,
  type,
  langOfPage,
  utmSource,
  utmCampaign,
}: IPipedriveRequest) => {
  try {
    await fetch(
      `${process.env.PIPEDRIVE_API_URL}${process.env.PIPEDRIVE_API_TOKEN}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.PIPEDRIVE_API_TOKEN}`,
          Accept: "application/json",
        },
        body: JSON.stringify({
          owner_id: 12769244,
          person_id: 131,
          visible_to: "3",
          "08f603bf9e0032d5a9f9e5cd39ca8c7a4374ac82": _ga,
          was_seen: false,
          title,
          "6654a8f8686bdba60bbcdf6e69313c150f40b088": JSON.stringify({
            firstName,
            email,
            phone,
            companyName,
            ...(website && { website }),
            from,
            buttonId,
            type,
            langOfPage,
            ...(utmSource && { utmSource }),
            ...(utmCampaign && { utmCampaign }),
          }),
        }),
      },
    );
  } catch (error: unknown) {
    console.error(
      "Pipedrive api returns errors:",
      error instanceof Error ? error.message : error,
    );

    return {
      status: "error",
      message:
        error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
};
