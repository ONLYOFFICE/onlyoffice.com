import { useTranslation, Trans } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";
import {
  StyledSettingsGroup,
  StyledStepNumber,
  StyledStepBlock,
  StyledStepBlockText,
  StyledStepText,
  StyledStepImage,
  StyledNotice,
  StyledNoticeImg
} from "./Settings.styled";

const settingsItems = [
  {
    number: "1",
    textKey: "MondayStep1",
    image: "/images/templates/office-for-monday/settings/img-mp.svg",
  },
  {
    number: "2",
    textKey: "MondayStep2",
    image: "/images/templates/office-for-monday/settings/img-ds.svg",
  },
  {
    number: "3",
    textKey: "MondayStep3",
    image: "/images/templates/office-for-monday/settings/img-js.svg",
  },
  {
    number: "4",
    textKey: "MondayStep4",
    image: "/images/templates/office-for-monday/settings/img-new.svg",
  },
];

const Settings = () => {
  const { t } = useTranslation("office-for-monday");

  return (
    <Section>
      <Container>
      <Heading level={2} size={4}>
        {t("MondayConnectionSettingsTitle")}
      </Heading>

      <StyledSettingsGroup>
        {settingsItems.map((item, index) => (
          <StyledStepBlock key={index}>
            <StyledStepBlockText>
              <StyledStepNumber>{item.number}</StyledStepNumber>
              <StyledStepText>
                <Trans i18nKey={t(item.textKey)} components={[
                  <b key="0" />,
                  <i key="1" />,
                  <span key="2" />,
                  <a key="3" href="/docspace-registration.aspx" target="_blank" rel="noopener noreferrer" />
                ]} />
              </StyledStepText>
            </StyledStepBlockText>
            <StyledStepImage src={item.image} alt={`Step ${item.number}`} />
          </StyledStepBlock>
        ))}
      </StyledSettingsGroup>

      <StyledNotice>
        <StyledNoticeImg />
        <Text>{t("MondayConnectionSettingsNote")}</Text>
      </StyledNotice>
      </Container>
    </Section>
  );
};

export { Settings };