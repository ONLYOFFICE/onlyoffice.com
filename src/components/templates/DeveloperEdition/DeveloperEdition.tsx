import { Hero } from "./sections/Hero";
import { Clients } from "./sections/Clients";
import { Features } from "./sections/Features";
import { TechnologyStack } from "./sections/TechnologyStack";
import { UserBenefits } from "./sections/UserBenefits";
import { GettingStarted } from "./sections/GettingStarted";
import { Testimonials } from "./sections/Testimonials";
import { LearnMore } from "./sections/LearnMore";
import { Support } from "./sections/Support";

const DeveloperEditionTemplate = () => {
  return (
    <>
      <Hero />
      <Clients />
      <Features />
      <TechnologyStack />
      <UserBenefits />
      <GettingStarted />
      <Testimonials />
      <LearnMore />
      <Support />
    </>
  );
}
export { DeveloperEditionTemplate };