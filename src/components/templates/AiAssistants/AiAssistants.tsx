import { AiHelpers } from "./sections/AiHelpers";
import { Hero } from "./sections/Hero";
import { HowToStart } from "./sections/HowToStart";
import { IntegrateAi } from "./sections/IntegrateAi";
import { LearnMore } from "./sections/LearnMore";

const AiAssistantsTemplate = () => {
  return (
    <>
      <Hero />
      <AiHelpers />
      <IntegrateAi />
      <HowToStart />
      <LearnMore />
    </>
  );
};

export { AiAssistantsTemplate };
