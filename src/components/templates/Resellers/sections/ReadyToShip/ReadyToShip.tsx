import { Trans, useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import {
  StyledReadyToShipContent,
  StyledReadyToShipIcon,
  StyledReadyToShipWrapper,
} from "./ReadyToShip.styled";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";
import { Link } from "@src/components/ui/Link";

const ReadyToShip = () => {
  const { t } = useTranslation("resellers");

  return (
    <Section tabletSmallSpacing={["88px", "88px"]}>
      <Container>
        <StyledReadyToShipWrapper>
          <StyledReadyToShipIcon />
          <StyledReadyToShipContent>
            <Heading level={3} size={4}>
              <Trans
                t={t}
                i18nKey={"ReadyToShip"}
                components={[<Text as="span" color="#FF6F3D" key="0" />]}
              />
            </Heading>
            <Text label={t("SubmitYourPartnership")} size={2} />
          </StyledReadyToShipContent>
          <Button label={t("SubmitRequest")} variant="tertiary" />
          <Text size={3} textAlign="center">
            <Trans
              t={t}
              i18nKey={"StillHaveQuestions"}
              components={[
                <Link
                  href="mailto:sales@onlyoffice.com"
                  color="#FF6F3D"
                  textUnderline
                  hover="underline-none"
                  key="0"
                />,
              ]}
            />
          </Text>
        </StyledReadyToShipWrapper>
      </Container>
    </Section>
  );
};

export { ReadyToShip };
