import { Trans, useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import {
  UsersWorldwideContent,
  UsersWorldwideImage,
  UsersWorldwideText,
  UsersWorldwideWrapper,
} from "./UsersWorldwide.styled";
import { Button } from "@src/components/ui/Button";
import { Text } from "@src/components/ui/Text";

const UsersWorldwide = () => {
  const { t } = useTranslation("certificates");

  return (
    <Section
      desktopSpacing={["0", "110px"]}
      tabletSpacing={["0", "110px"]}
      tabletSmallSpacing={["0", "100px"]}
      mobileSpacing={["0", "71px"]}
    >
      <Container>
        <UsersWorldwideWrapper>
          <UsersWorldwideContent>
            <UsersWorldwideImage />
            <UsersWorldwideText>
              <Trans
                t={t}
                i18nKey="OOUsers"
                components={[<Text as="span" color="#FF6F3D" key="0" />]}
              />
            </UsersWorldwideText>
          </UsersWorldwideContent>
          <Button id="certificates-users-button" label={t("StartInTheCloud")} />
        </UsersWorldwideWrapper>
      </Container>
    </Section>
  );
};

export { UsersWorldwide };
