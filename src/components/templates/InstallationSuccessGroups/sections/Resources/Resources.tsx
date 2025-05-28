import { useTranslation } from "next-i18next";
import { Trans } from "next-i18next";
import {
  StyledResourceList,
  StyledResourceItem,
  StyledResourceListItemLink,
} from "./Resources.styled";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";

const Resources = () => {
  const { t } = useTranslation("installation-success-groups");

  return (
    <Section>
      <Container>
        <Heading level={3}>
          <Trans
            t={t}
            i18nKey="HelpfulResources"
            components={[<Text as="span" color="#FF6F3D" key={0} />]}
          />
        </Heading>
        <StyledResourceList>
          <StyledResourceItem>
            <Trans
              t={t}
              i18nKey="HelpfulResourcesItem1"
              components={[
                <StyledResourceListItemLink
                  key={0}
                  href="https://helpcenter.onlyoffice.com/workspace/userguides"
                  target="_blank"
                  rel="noreferrer noopener"
                  textUnderline
                  color="main"
                  hover="underline-none"
                />,
              ]}
            />
          </StyledResourceItem>
          <StyledResourceItem>
            <Trans
              t={t}
              i18nKey="HelpfulResourcesItem2"
              components={[
                <StyledResourceListItemLink
                  key={0}
                  href="https://helpcenter.onlyoffice.com/workspace/userguides"
                  target="_blank"
                  rel="noreferrer noopener"
                  textUnderline
                  color="main"
                  hover="underline-none"
                />,
              ]}
            />
          </StyledResourceItem>
          <StyledResourceItem>
            <Trans
              t={t}
              i18nKey="HelpfulResourcesItem3"
              components={[
                <StyledResourceListItemLink
                  key={0}
                  href="https://www.apache.org/licenses/LICENSE-2.0"
                  target="_blank"
                  rel="noopener noreferrer"
                  textUnderline
                  color="main"
                  hover="underline-none"
                />,
              ]}
            />
          </StyledResourceItem>
          <StyledResourceItem>
            <Trans
              t={t}
              i18nKey="HelpfulResourcesItem4"
              components={[
                <StyledResourceListItemLink
                  key={0}
                  href="https://github.com/ONLYOFFICE/CommunityServer/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  textUnderline
                  color="main"
                  hover="underline-none"
                />,
              ]}
            />
          </StyledResourceItem>
        </StyledResourceList>
      </Container>
    </Section>
  );
};

export { Resources };
