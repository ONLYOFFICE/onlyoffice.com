import { useTranslation } from "next-i18next";
import { logos } from "../../data/logos";
import {
  MarqueeWrapper,
  MarqueeInner,
  LogoContainer,
  StyledLogoLink,
  StyledLogoText,
} from "./Marquee.styled";

const Marquee = () => {
  const { t } = useTranslation("contribute");
  return (
    <MarqueeWrapper>
      <MarqueeInner className="marquee-inner">
        {[...logos, ...logos].map(
          ({ href, positionY, mobilePositionY }, index) => (
            <LogoContainer key={index}>
              <StyledLogoLink
                href={href}
                $positionY={positionY}
                $mobilePositionY={mobilePositionY}
              >
                <StyledLogoText>{t("More")}</StyledLogoText>
              </StyledLogoLink>
            </LogoContainer>
          ),
        )}
      </MarqueeInner>
    </MarqueeWrapper>
  );
};

export { Marquee };
