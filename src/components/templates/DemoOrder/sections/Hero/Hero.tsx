import {
  GlobalStyle,
  StyledHero,
  StyledHeroWrapper,
  StyledHeroItem,
} from "./Hero.styled";
import { Info } from "./sub-components/Info";
import { Form } from "./sub-components/Form";

const Hero = () => {
  return (
    <>
      <GlobalStyle />

      <StyledHero>
        <StyledHeroWrapper>
          <StyledHeroItem $info>
            <Info />
          </StyledHeroItem>
          <StyledHeroItem $auth>
            <Form />
          </StyledHeroItem>
        </StyledHeroWrapper>
      </StyledHero>
    </>
  );
};

export { Hero };
