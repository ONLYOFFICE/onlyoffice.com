import { Trans, useTranslation } from "next-i18next";
import {
  StyledCardCommentContent,
  StyledCardCommentHeading,
  StyledCardCommentWrapper,
  StyledText,
  StyledLink,
} from "./CardComment.styled";
import { Section } from "@src/components/ui/Section";
import { Text } from "@src/components/ui/Text";
import { Container } from "@src/components/ui/Container";

const CardCommentDistributions = () => {
  const { t } = useTranslation("technology-partners");

  return (
    <Section desktopSpacing={["0px", "112px"]} background="#f5f5f5">
      <Container>
        <StyledCardCommentWrapper>
          <StyledCardCommentContent>
            <StyledCardCommentHeading>
              <Trans t={t} i18nKey={t("WeAreNowPartnering")} />
            </StyledCardCommentHeading>
            <StyledText>
              <Trans
                t={t}
                i18nKey="CameronKnauff"
                components={[
                  <Text as="span" fontWeight={700} color="#666666" key="0" />,
                ]}
              />
            </StyledText>
            <StyledLink
              href={t("WeAreNowPartneringLink")}
              label={t("ReadTheFullCaseOfRisiOS")}
              color="main"
              textUnderline
              fontWeight={400}
              display="block"
            />
          </StyledCardCommentContent>
        </StyledCardCommentWrapper>
      </Container>
    </Section>
  );
};

export { CardCommentDistributions };
