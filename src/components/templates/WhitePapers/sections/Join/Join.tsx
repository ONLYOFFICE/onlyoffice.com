import { memo } from "react";
import { Trans, useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";

import {
  StyledJoinButton,
  StyledJoinHeading,
  StyledJoinIcon,
  StyledJoinSection,
  StyledTextNoWrap
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
            i18nKey={"JoinOver"}
            components={[
              <StyledTextNoWrap key={0} as={"span"} fontWeight={600} />
            ]}
          />
        </StyledJoinHeading>
        <StyledJoinButton
          as={"a"}
          href="/docspace-registration?from=whitepapers"
        >
          {t("UseInTheCloud")}
        </StyledJoinButton>
      </Container>
    </StyledJoinSection>
  );
};

const Join = memo(JoinComponent);

export { Join };