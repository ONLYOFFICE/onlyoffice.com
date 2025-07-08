import { useTranslation, Trans } from "next-i18next";
import {
  StyledUsageBlock,
  StyledUsageContent,
  StyledUsageImage,
  StyledUsageText,
  StyledUsageContentWhite
} from "./Usage.styled";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Container } from "@src/components/ui/Container";

const Usage = () => {
  const { t } = useTranslation("office-for-monday");

  return (
    <>
      <Section       
        desktopSpacing={["112px", "90px"]}
        mobileSpacing={["48px", "0"]}
        background="#F5F7FB"
        borderTop 
        borderTopColor="#CCCCCC">

      <Container>
        <StyledUsageBlock>
          <StyledUsageContent>
            <StyledUsageText>
              <Heading level={1} size={3} label={t("AppUsage")} />
              <Text>
                <Trans i18nKey={t("AfterInstallingTheApp")} components={[
                  <i key="0" />,
                  <span key="1" />
                ]} />
              </Text>
            </StyledUsageText>
            <StyledUsageImage
              src="/images/templates/office-for-monday/usage/screen_2.png"
              srcSet="/images/templates/office-for-monday/usage/screen_2@2x.png"
              alt="Screenshot"
            />
          </StyledUsageContent>
        </StyledUsageBlock>

      <Heading level={2} size={4} label={t("AccessRights")} />
        <StyledUsageBlock>
            <StyledUsageContentWhite>
              <StyledUsageText>
                <Text>
                  <Trans i18nKey={t("APublicRoomIsCreated")} components={[
                    <b key="0" />,
                    <br key="1" />,
                  ]} />
                </Text>
              </StyledUsageText>
              <StyledUsageImage
                src="/images/templates/office-for-monday/usage/access.svg"
                alt="Screenshot"
              />
            </StyledUsageContentWhite>
          </StyledUsageBlock>
        </Container>
      </Section>
    </>
  );
};

export { Usage };
