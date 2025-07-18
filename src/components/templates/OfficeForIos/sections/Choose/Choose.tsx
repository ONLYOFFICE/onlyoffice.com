import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";
import { FeatureItem } from "@src/components/widgets/FeatureItem";
import { items } from "./data/items";

import {
  StyledChooseSection,
  StyledChooseButton,
  StyledChooseHeading,
  StyledChooseList,
  StyledChooseSubtitle,
} from "./Choose.styled";
import { Trans, useTranslation } from "next-i18next";

const Choose = () => {
  const { t } = useTranslation("office-for-ios");

  return (
    <StyledChooseSection>
      <Container>
        <StyledChooseHeading
          level={2}
          size={3}
          color="#fff"
          textAlign="center"
          label={t("GetStartedAndChoose")}
        />
        <StyledChooseList>
          {items.map((item) => (
            <FeatureItem
              key={item.heading}
              icon={{
                url: item.iconUrl,
                height: "48px",
              }}
              heading={t(item.heading)}
              text={t(item.text)}
            />
          ))}
        </StyledChooseList>
        <StyledChooseButton
          $backgroundUrl={t("HeroButtonBackgroundUrl")}
          as={"a"}
          target="_blank"
          href="https://itunes.apple.com/us/app/onlyoffice-documents/id944896972"
        />
        <StyledChooseSubtitle textAlign="center" size={3} color="#fff">
          <Trans
            t={t}
            i18nKey="AbsolutelyFree"
            components={[<Text key="0" as="span" color="main" />]}
          />
        </StyledChooseSubtitle>
      </Container>
    </StyledChooseSection>
  );
};

export { Choose };
