import { Trans, useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";

import { StyledJoinButton, StyledJoinHeading, StyledJoinIcon } from "./Join.styled";

const Join = () => {
  const { t } = useTranslation("find-partners");

  return (
    <Section>
      <Container maxWidth="1008px">
        <StyledJoinIcon />
        <StyledJoinHeading level={2} size={3} textAlign="center">
          <Trans t={t} i18nKey={"JoinHeading"} components={[
              <Text as="span" color="#FF6F3D" key={0} />
            ]}
          />
        </StyledJoinHeading>
        <StyledJoinButton>
          <Button
            as="a"
            href="/partnership-request?requestType=2"
            label={t("JoinButton")}
            borderRadius="3px"
          />
        </StyledJoinButton>
      </Container>
    </Section>
  );
};

export { Join };