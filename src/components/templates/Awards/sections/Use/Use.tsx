import {
  StyledUse,
  StyledUseHeading,
} from "./Use.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Button } from "@src/components/ui/Button";
import { Trans, useTranslation } from "next-i18next";
import { Text } from "@src/components/ui/Text";

const Use = () => {
  const { t } = useTranslation("awards");

  return (
    <Section
      desktopSpacing={["80px", "80px"]}
      tabletSpacing={["56px", "56px"]}
      tabletSmallSpacing={["56px", "56px"]}
      background="#f5f5f5"
    >
      <Container>
      <StyledUse>
          <StyledUseHeading level={1} size={5} textAlign="right">
              <Trans
                t={t}
                i18nKey={"UseTitle"}
                components={[
                  <Text as="span" color="main" key={0} />
                ]}
              />
            </StyledUseHeading>
            <Button
              as="a"
              label={t("UseButton")}
              href="/docspace-registration?from=awards"
            />
      </StyledUse>
      </Container>
    </Section>
  );
};

export { Use };
