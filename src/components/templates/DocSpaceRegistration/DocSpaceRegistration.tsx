import { IDocSpaceRegistrationTemplate } from "./DocSpaceRegistration.types";
import { Hero } from "./sections/Hero";

const DocSpaceRegistrationTemplate = ({
  tenants,
  queryParams,
}: IDocSpaceRegistrationTemplate) => {
  return <Hero tenants={tenants} queryParams={queryParams} />;
};

export { DocSpaceRegistrationTemplate };
