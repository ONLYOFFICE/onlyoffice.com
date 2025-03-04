import { useTranslation } from "next-i18next";
import {
  StyledLetUsKnowBanner,
  StyledLetUsKnowBannerWrapper,
} from "./LetUsKnowBanner.styled";
import { ILetUsKnowBanner } from "./LetUsKnowBanner.types";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Link } from "@src/components/ui/Link";

const LetUsKnowBanner = ({ id, className, heading }: ILetUsKnowBanner) => {
  const { t } = useTranslation("Connectors");

  return (
    <StyledLetUsKnowBanner
      id={id}
      className={className}
      tabletSpacing={["112px", "112px"]}
      tabletSmallSpacing={["112px", "112px"]}
    >
      <Container>
        <StyledLetUsKnowBannerWrapper>
          <Heading level={3} label={heading} />
          <Link
            id="let-us-know-banner-link"
            href="mailto:sales@onlyoffice.com"
            label={t("LetUsKnow")}
            color="main"
            textUnderline
            hover="underline-none"
          />
        </StyledLetUsKnowBannerWrapper>
      </Container>
    </StyledLetUsKnowBanner>
  );
};

export { LetUsKnowBanner };
