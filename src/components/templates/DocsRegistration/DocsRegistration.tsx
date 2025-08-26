import { IDocsRegistrationTemplate } from "./DocsRegistration.types";
import { Hero } from "./sections/Hero";

const DocsRegistrationTemplate = ({
  tenants,
  queryParams,
}: IDocsRegistrationTemplate) => {
  return <Hero tenants={tenants} queryParams={queryParams} />;
};

export { DocsRegistrationTemplate };
