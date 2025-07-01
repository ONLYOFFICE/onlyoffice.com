import { memo } from "react";
import { Trans, useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";

import {
  StyledJoinButton,
  StyledJoinHeading,
  StyledJoinIcon,
  StyledJoinSection
} from "./Join.styled";

const JoinComponent = () => {
  const { t } = useTranslation("whitepapers");

  return (
    <StyledJoinSection>
      <Container>
        <StyledJoinIcon />
        <StyledJoinHeading
          level={2}
          size={4}
          color="white"
          textAlign="center"
        >
          <Trans
            t={t}
            i18nKey={"JoinHeading"}
            components={[
              <Text key={0} as={"span"} fontWeight={600} label="" />
            ]}
          />
        </StyledJoinHeading>
        <StyledJoinButton
          as={"a"}
          href="/registration?from=whitepapers"
        >
          {t("JoinButton")}
        </StyledJoinButton>
      </Container>
    </StyledJoinSection>
  );
};

const Join = memo(JoinComponent);

export { Join };