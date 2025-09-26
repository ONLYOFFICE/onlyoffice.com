
import { StyledWrapper } from "./MCPServer.styled";
import { Hero } from "./sections/Hero";
import { HowItWorks } from "./sections/HowItWorks";
import { Switcher } from "./sections/Switcher";
import { UseCases } from "./sections/UseCases";
import { Licensing } from "./sections/Licensing";
import { FAQ } from "./sections/FAQ";
import { GetStarted } from "./sections/GetStarted";

const MCPServerTemplate = () => {
  return (
    <>
      <StyledWrapper>
        <Hero />
        <Switcher />
        <HowItWorks />
        <UseCases />
        <Licensing />
        <FAQ />
        <GetStarted />
      </StyledWrapper>
    </>
  );
};

export { MCPServerTemplate };
