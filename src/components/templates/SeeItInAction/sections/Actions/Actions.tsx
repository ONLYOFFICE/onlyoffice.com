import { useTranslation } from "next-i18next";
import { useState } from "react";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { ActionsContent } from "./sub-components/ActionsContent";
import { ActionsDemoModal } from "./sub-components/ActionsDemoModal";
import { IButtonInfo } from "./Actions.types";
import { tabsInfo } from "./data/tabsInfo";

import {
  StyledActionsButton,
  StyledActionsButtonWrapper,
  StyledActionsContainer,
  StyledActionsSection,
  StyledActionsTabButton,
  StyledActionsTabHeading,
  StyledActionsTabList,
} from "./Actions.styled";

const Actions = () => {
  const { t } = useTranslation("see-it-in-action");

  const [tabInfo, setTabInfo] = useState<IButtonInfo>(tabsInfo[0]);
  const [tabActive, setTabActive] = useState<number>(1);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState<boolean>(false);

  const handleTabClick = (tab: IButtonInfo) => {
    setTabActive(tab.id);
    setTabInfo(tab);
  };

  return (
    <>
      <StyledActionsSection
        background="#f5f5f5"
        desktopSpacing={["0", "0"]}
        tabletSpacing={["0", "0"]}
        tabletSmallSpacing={["0", "0"]}
        mobileSpacing={["0", "0"]}
      >
        <Container tabletSpacing="0" mobileSpacing="0">
          <StyledActionsTabList>
            {tabsInfo.map((tab, index) => (
              <StyledActionsTabButton
                $isActive={index + 1 === tabActive}
                key={tab.id}
                variant="tertiary"
                borderRadius="0"
                onClick={() => handleTabClick(tab)}
              >
                <StyledActionsTabHeading
                  $isActive={index + 1 === tabActive}
                  label={t(tab.text)}
                  size={5}
                  level={5}
                />
              </StyledActionsTabButton>
            ))}
          </StyledActionsTabList>
        </Container>
      </StyledActionsSection>
      <Section
        desktopSpacing={["72px", "112px"]}
        tabletSpacing={["72px", "112px"]}
        tabletSmallSpacing={["68px", "64px"]}
        mobileSpacing={["68px", "78px"]}
      >
        <StyledActionsContainer>
          <StyledActionsButtonWrapper>
            <Heading level={4} size={4} label={t("ActionsDemoPreview")} />
            <StyledActionsButton onClick={() => setIsDemoModalOpen(true)} />
          </StyledActionsButtonWrapper>
          <ActionsContent
            url={tabInfo.url}
            title={t(tabInfo.title)}
            fileType={tabInfo.fileType}
            docType={tabInfo.docType}
            mode={tabInfo.mode}
            uiTheme={tabInfo.uiTheme}
            isCollaborate={tabInfo.isCollaborate}
          />
        </StyledActionsContainer>
      </Section>

      {isDemoModalOpen && (
        <ActionsDemoModal
          heading={tabInfo.heading}
          demoCodeFirst={tabInfo.demoCodeFirst}
          demoCodeSecond={tabInfo.demoCodeSecond}
          onClose={() => setIsDemoModalOpen(false)}
        />
      )}
    </>
  );
};

export { Actions };
