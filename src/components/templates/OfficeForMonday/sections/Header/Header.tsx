import { Section } from "@src/components/ui/Section";
import { Link } from "@src/components/ui/Link";
import {
  StyledHeaderContainer,
  StyledHeader,
  StyledHeaderImage
} from "./Header.styled";

const Header = () => {
  return (
    <Section 
      desktopSpacing={["48px", "48px"]} 
      tabletSpacing={["0px", "0px"]} 
      tabletSmallSpacing={["0px", "0px"]}
      mobileSpacing={["0px", "0px"]}
      background="#FFFFFF;"
    >
      <StyledHeaderContainer>
        <StyledHeader>
          <Link
            href="/"
            color="main"
            textUnderline
            hover="underline-none"
          >
            <StyledHeaderImage
              src="/images/templates/office-for-monday/header/onlyoffice.svg"
              alt="Logo"
            />
          </Link>
        </StyledHeader>
      </StyledHeaderContainer>
    </Section>
  );
};

export { Header };
