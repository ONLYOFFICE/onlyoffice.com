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
      ? []
      : [];

export { connectionStrings };
