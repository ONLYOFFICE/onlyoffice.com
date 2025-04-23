import { useState } from "react";
import { useTranslation, Trans } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";
import { StyledFeaturesWrapper, StyledColumnsContainer, StyledColumn, StyledDocumentsHeading, StyledTabs, StyledColumnHeader, StyledIcon } from "./Features.styled";
import { items } from "./data/items";


const Features = () => {
  const { t } = useTranslation("office-for-zapier");
  const [selectedTab, setSelectedTab] = useState(items[0].id);

  const handleTabChange = (tabId: string) => {
    setSelectedTab(tabId);
  };

  return (
    <Section>
      <Container>
        <StyledFeaturesWrapper>
          <StyledDocumentsHeading level={2} textAlign="center">
            <Trans
              t={t}
              i18nKey="BuildZaps"
              components={[<Text as="span" color="main" key="0" />]}
            />
          </StyledDocumentsHeading>

          <StyledTabs
            $selected={selectedTab}
            items={items.map((tab) => ({
              id: tab.id,
              label: t(tab.title),
              content: (
                <StyledColumnsContainer>
                  {tab.items.map((column, columnIndex) => (
                    <StyledColumn key={columnIndex}>
                      {column.groups.map((group, groupIndex) => (
                        <div key={groupIndex}>
                          <StyledColumnHeader>
                            <StyledIcon $positionX={group.positionX} />
                            <h4>{t(group.title)}</h4>
                          </StyledColumnHeader>
                          <ul>
                            {group.items.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <Trans
                                  t={t}
                                  i18nKey={String(item.text)}
                                  components={[<Text as="span" color="main" key="0" />]}
                                />
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </StyledColumn>
                  ))}
                </StyledColumnsContainer>
              ),
            }))}
            selected={selectedTab}
            onChange={handleTabChange}
          />
        </StyledFeaturesWrapper>
      </Container>
    </Section>
  );
};

export { Features };
