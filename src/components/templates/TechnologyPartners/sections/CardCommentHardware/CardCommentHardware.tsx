import { Trans, useTranslation } from "next-i18next";
import {
  StyledCardCommentContent,
  StyledCardCommentHeading,
  StyledCardCommentWrapper,
  StyledText,
  StyledLink,
} from "./CardCommentHardware.styled";
import { items } from "./data/items";
import { Section } from "@src/components/ui/Section";
import { Text } from "@src/components/ui/Text";
import { Container } from "@src/components/ui/Container";

const CardCommentHardware = () => {
  const { t } = useTranslation("technology-partners");

  return (
    <Section
      background="#f9f9f9"
      desktopSpacing={["0px", "112px"]}
      id="part-hardware"
    >
      <Container>
        <StyledCardCommentWrapper>
          <StyledCardCommentContent>
            <StyledCardCommentHeading>
              <Trans t={t} i18nKey={t(items.title)} />
            </StyledCardCommentHeading>
            <StyledText>
              <Trans
                t={t}
                i18nKey={items.text}
                components={[
                  <Text as="span" fontWeight={700} color="#666666" key="0" />,
                ]}
              />
            </StyledText>
            <StyledLink
              href={items.linkUrl}
              label={t(items.textBtn)}
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

export { CardCommentHardware };
