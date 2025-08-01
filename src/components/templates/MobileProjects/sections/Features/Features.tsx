import { useTranslation, Trans } from "next-i18next";
import { Text } from "@src/components/ui/Text";
import { Section } from "@src/components/ui/Section";

import {
  StyledList,
  StyledItem,
  StyledIcon,
  StyledButton,
  StyledImageContent,
  StyledContainer,
  StyledText,
  StyledHeading,
} from "./Features.styled";

import { items } from "./data/items";

const Features = () => {
  const { t } = useTranslation("mobile-projects");

  return (
    <Section
      desktopSpacing={["112px", "72px"]}
      tabletSmallSpacing={["80px", "80px"]}
      mobileSpacing={["48px", "48px"]}
    >
      <StyledContainer>
        <div>
          <StyledHeading level={2}>
            <Trans
              t={t}
              i18nKey="FeaturesTitle"
              components={[<Text as="span" color="main" key="0" />]}
            />
          </StyledHeading>

          <StyledList>
            {items.map((item, index) => (
              <StyledItem key={index}>
                <StyledIcon $positionX={item.positionX} />
                <StyledText>{t(item.title)}</StyledText>
              </StyledItem>
            ))}
          </StyledList>
          <StyledButton
            $backgroundUrl={t("iTunesButtonImg")}
            as="a"
            href={t("iTunesLink")}
            target="_blank"
            rel="noopener"
          />
        </div>
        <StyledImageContent
          $imgUrl={t("imageUrl")}
          $imgUrl2x={t("imageUrl2x")}
        />
      </StyledContainer>
    </Section>
  );
};

export { Features };
