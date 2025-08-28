import { Trans, useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";

import {
  StyledFreeCloudWrapper,
  StyledFreeCloudHeading,
  StyledFreeCloudImage,
  StyledFreeCloudLink,
  StyledFreeCloudLogo,
  StyledFreeCloudText
} from "./FreeCloud.styled";

const FreeCloud = () => {
  const { t } = useTranslation("nonprofit-organizations");

  return (
    <Section
      desktopSpacing={["0", "0"]}
      tabletSpacing={["0", "0"]}
      tabletSmallSpacing={["72px", "0"]}
      mobileSpacing={["72px", "0"]}
    >
      <Container>
        <StyledFreeCloudWrapper>
          <StyledFreeCloudLogo />
          <StyledFreeCloudHeading
            level={2}
            size={3}
            textAlign="center"
            label={t("FreeCloudForNonProfitsAndSchools")}
          >
            <Trans
              t={t}
              i18nKey="FreeCloudForNonProfitsAndSchools"
              components={[
                <Text
                  key="0"
                  color="main"
                  as="span"
                />
              ]}
            />
          </StyledFreeCloudHeading>
          <StyledFreeCloudText
            size={1}
            textAlign="center"
            color="#666666"
            label={t("CreateAFreeDocSpaceCloud")}
          />
          <StyledFreeCloudLink
            href="/free-cloud"
            label={t("SubmitRequest")}
            color="main"
            textUnderline={true}
            hover="underline-none"
          />
          <StyledFreeCloudImage
            $url={t("FreeCloudImageUrl")}
            $url2x={t("FreeCloudImageUrl2x")}
          />
        </StyledFreeCloudWrapper>
      </Container>
    </Section>
  );
};

export { FreeCloud };