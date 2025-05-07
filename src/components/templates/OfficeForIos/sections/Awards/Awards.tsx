import { Trans, useTranslation } from "next-i18next";
import { Text } from "@src/components/ui/Text";
import {
  StyledAwardsSection,
  StyledAwardsContainer,
  StyledAwardsImgLink,
  StyledAwardsHeading,
  StyledAwardsText,
} from "./Awards.styled";

const Awards = () => {
  const { t } = useTranslation("office-for-ios");

  return (
    <StyledAwardsSection
      background="#fafafa"
      desktopSpacing={["0", "112px"]}
      tabletSpacing={["0", "88px"]}
      tabletSmallSpacing={["0", "80px"]}
      mobileSpacing={["0", "48px"]}
    >
      <StyledAwardsContainer>
        <StyledAwardsImgLink
          href="https://www.educationalappstore.com/app/onlyoffice-documents"
          target="_blank"
        />
        <StyledAwardsHeading size={3} textAlign="center">
          <Trans
            t={t}
            i18nKey="OneAppThreeEditors"
            components={[<Text key="0" as="span" color="main" label="0" />]}
          />
        </StyledAwardsHeading>
        <StyledAwardsText
          size={1}
          label={t("CompatibleWithMSOffice")}
          textAlign="center"
        />
      </StyledAwardsContainer>
    </StyledAwardsSection>
  );
};

export { Awards };
