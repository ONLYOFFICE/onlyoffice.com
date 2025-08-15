import { PressDownloadsTemplateStyled } from "./PressDownloads.styled";
import { Hero } from "./sections/Hero";
import { Main } from "./sections/Main";

const PressDownloadsTemplate = () => {
  return (
    <PressDownloadsTemplateStyled>
      <Hero />
      <Main />
    </PressDownloadsTemplateStyled>
  );
};

export { PressDownloadsTemplate };
