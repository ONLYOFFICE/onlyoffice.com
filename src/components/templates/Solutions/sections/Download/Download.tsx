import { useTranslation } from "next-i18next";
import {
  ButtonRow,
  StyledSection,
  StyledDownloadButton,
  IconsRow,
  Icon,
  StyledText,
} from "./Download.styled";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { items } from "./data/items";
import { Link } from "@src/components/ui/Link";
import { Container } from "@src/components/ui/Container";

const Download = () => {
  const { t } = useTranslation("solutions");

  return (
    <StyledSection>
      <Container>
        <Heading level={2} color="white">
          {t("EachPlatform")}
        </Heading>
        <StyledText color="white">{t("WorkAnyTime")}</StyledText>
        <ButtonRow>
          {items.map((item, index) => (
            <StyledDownloadButton
              key={index}
              as={item.href ? Link : "div"}
              href={item.href}
              label=""
            >
              <IconsRow>
                {item.icons?.map((icon, index) => (
                  <Icon
                    as={icon.href ? Link : "div"}
                    key={index}
                    href={icon.href}
                    label=""
                    $positionX={icon.positionX}
                  />
                ))}
              </IconsRow>
              <Text as="span">{t(item.title)}</Text>
            </StyledDownloadButton>
          ))}
        </ButtonRow>
      </Container>
    </StyledSection>
  );
};

export { Download };
