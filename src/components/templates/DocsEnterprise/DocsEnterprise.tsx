import { Connectors } from "./sections/Connectors";
import { Cost } from "./sections/Cost";
import { Features } from "./sections/Features";
import { Hero } from "./sections/Hero";
import { Support } from "./sections/Support/Support";
import { Tools } from "./sections/Tools";
import { GettingStarted } from "./sections/GettingStarted";
import { Testimonials } from "./sections/Testimonials";

const DocsEnterpriseTemplate = () => {
  return (
    <>
      <Hero />
      <Tools />
      <Features/>
      <Connectors />
      <Support />
      <Cost />
      <Testimonials />
      <GettingStarted />
    </>
  );
};

export { DocsEnterpriseTemplate };