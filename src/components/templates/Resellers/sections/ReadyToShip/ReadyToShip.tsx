import { Trans, useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import {
  StyledReadyToShipIcon,
  StyledReadyToShipContent,
  StyledReadyToShipHeading,
  StyledReadyToShipButtonWrapper,
} from "./ReadyToShip.styled";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";
import { Button } from "@src/components/ui/Button";

const ReadyToShip = () => {
  const { t } = useTranslation("resellers");

  return (
    <Section tabletSmallSpacing={["88px", "88px"]}>
      <Container>
        <StyledReadyToShipIcon />
        <StyledReadyToShipContent>
          <StyledReadyToShipHeading level={3} size={4}>
            <Trans
              t={t}
              i18nKey={"ReadyToShip"}
              components={[<Text as="span" color="#FF6F3D" key="0" />]}
            />
          </StyledReadyToShipHeading>
          <Text label={t("SubmitYourPartnership")} size={2} />
        </StyledReadyToShipContent>
        <StyledReadyToShipButtonWrapper>
          <Button
            label={t("SubmitRequest")}
            as="a"
            href="/partnership-request?requestType=0&from=resellers"
            variant="tertiary"
          />
        </StyledReadyToShipButtonWrapper>
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
      </Container>
    </Section>
  );
};

export { ReadyToShip };
