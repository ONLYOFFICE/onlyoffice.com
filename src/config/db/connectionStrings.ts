const connectionStrings =
  process.env.NEXT_PUBLIC_TESTING_ON === "true"
    ? [
        { name: "core", connectionString: process.env.CORE_MYSQL_URL },
        { name: "core.us", connectionString: process.env.CORE_US_MYSQL_URL },
        { name: "core.io", connectionString: process.env.CORE_IO_MYSQL_URL },
        { name: "core.io2", connectionString: process.env.CORE_IO2_MYSQL_URL },
        {
          name: "teamlabsite",
          connectionString: process.env.TEAMLABSITE_MYSQL_URL,
        },
        { name: "personal", connectionString: process.env.PERSONAL_MYSQL_URL },
      ]
    : process.env.NEXT_PUBLIC_TESTING_ON === "false"
      ? [
          { name: "core", connectionString: process.env.CORE_MYSQL_URL },
          {
            name: "core.eu",
            connectionString: process.env.CORE_EU_MYSQL_URL,
          },
          {
            name: "core.sg",
            connectionString: process.env.CORE_SG_MYSQL_URL,
          },
          {
            name: "core.com",
            connectionString: process.env.CORE_COM_MYSQL_URL,
          },
          {
            name: "core.com2",
            connectionString: process.env.CORE_COM2_MYSQL_URL,
          },
          {
            name: "teamlabsite",
            connectionString: process.env.TEAMLABSITE_MYSQL_URL,
          },
          {
            name: "personal",
            connectionString: process.env.PERSONAL_MYSQL_URL,
          },
        ]
      : [];

export { connectionStrings };
