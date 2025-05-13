import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Section } from "@src/components/ui/Section";
import { StyledResourcesContent, StyledResourcesListItem, StyledResourcesListItemLink } from "./Resources.styled";
import { Trans, useTranslation } from "next-i18next";

const Resources = () => {
  const { t } = useTranslation("installation-success-workspace");

  return (
    <Section>
      <StyledResourcesContent>
        <Heading level={3}>
            <Trans
                t={t}
                i18nKey="HelpfulResources"
                components={[<Text as="span" color="#FF6F3D" key={0} />]}
              />
            </Heading>
            <div>
              <StyledResourcesListItem>
                  <Trans
                    t={t}
                    i18nKey="HelpfulResourcesItem1"
                    components={[
                      <StyledResourcesListItemLink
                          key={0}
                          href="https://helpcenter.onlyoffice.com/workspace/userguides"
                          target="_blank"
                          rel="noreferrer noopener"
                          textUnderline
                          color="main"
                          hover="underline-none"
                      />                
                      ]}
                  />
              </StyledResourcesListItem>
              <StyledResourcesListItem>
                  <Trans
                    t={t}
                    i18nKey="HelpfulResourcesItem2"
                    components={[
                      <StyledResourcesListItemLink
                          key={0}
                          href="https://helpcenter.onlyoffice.com/workspace/installation/community"
                          target="_blank"
                          rel="noreferrer noopener"
                          textUnderline
                          color="main"
                          hover="underline-none"
                      />]}
                  />
              </StyledResourcesListItem>
              <StyledResourcesListItem>
                  <Trans
                    t={t}
                    i18nKey="HelpfulResourcesItem3"
                    components={[
                      <StyledResourcesListItemLink
                          key={0}
                          href="https://helpcenter.onlyoffice.com/workspace/administration"
                          target="_blank"
                          rel="noreferrer noopener"
                          textUnderline
                          color="main"
                          hover="underline-none"
                      />]}
                  />
              </StyledResourcesListItem>
              <StyledResourcesListItem>
                  <Trans
                    t={t}
                    i18nKey="HelpfulResourcesItem4"
                    components={[
                      <StyledResourcesListItemLink
                          key={0}
                          href="https://forum.onlyoffice.com/"
                          target="_blank"
                          rel="noreferrer noopener"
                          textUnderline
                          color="main"
                          hover="underline-none"
                      />]}
                  />
              </StyledResourcesListItem>
            </div>
      </StyledResourcesContent>

    </Section>
  );
};

export { Resources };