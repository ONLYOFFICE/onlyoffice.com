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

const CardComment = () => {
  const { t } = useTranslation("technology-partners");

  return (
    <Section background="#f5f5f5">
      <Container>
        <StyledCardCommentWrapper>
          <StyledCardCommentContent>
            <StyledCardCommentHeading>
              <Trans t={t} i18nKey={t("ONLYOFFICEWasInLineWith")} />
            </StyledCardCommentHeading>
            <StyledText>
              <Trans
                t={t}
                i18nKey="AndreaBuratti"
                components={[
                  <Text as="span" fontWeight={700} color="#666666" key="0" />,
                ]}
              />
            </StyledText>
            <StyledLink
              href={t("ONLYOFFICEWasInLineWithLink")}
              label={t("ReadTheFullCaseOfInnovazionedigitale")}
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

export { CardComment };
