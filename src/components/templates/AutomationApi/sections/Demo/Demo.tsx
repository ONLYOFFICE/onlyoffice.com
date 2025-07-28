import { Trans, useTranslation } from "next-i18next";
import { useState } from "react";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { DemoContentWithPanel } from "./sub-components/DemoContent";
import { IButtonInfo } from "./Demo.types";
import { tabsInfo } from "./data/tabsInfo";
import { Text } from "@src/components/ui/Text";

import {
  StyledActionsContainer,
  StyledActionsTabButton,
  StyledActionsTabHeading,
  StyledActionsTabList,
  StyledHeading
} from "./Demo.styled";

const Demo = () => {
  const { t } = useTranslation("automation-api");

  const [tabInfo, setTabInfo] = useState<IButtonInfo>(tabsInfo[0]);
  const [tabActive, setTabActive] = useState<number>(1);

  const handleTabClick = (tab: IButtonInfo) => {
    setTabActive(tab.id);
    setTabInfo(tab);
  };

  return (
    <>
      <Section
        background="#f9f9f9"
        desktopSpacing={["112px", "112px"]}
        tabletSpacing={["0", "0"]}
        tabletSmallSpacing={["0", "0"]}
        mobileSpacing={["0", "0"]}
        borderTop
      >
        <Container tabletSpacing="0" mobileSpacing="0">
          <Heading level={1} size={2} textAlign="center">
              <Trans
                t={t}
                i18nKey="WhatAutomationAPICan"
                components={[<Text as="span" color="#FF6F3D" key="0" />]}
              />
            </Heading>
            <StyledHeading level={2} size={3} textAlign="center" label={t("MostPopularExamples")} />
          <StyledActionsTabList>
            {tabsInfo.map((tab, index) => (
              <StyledActionsTabButton
                $isActive={index + 1 === tabActive}
                key={tab.id}
                variant="tertiary"
                borderRadius="0"
                onClick={() => handleTabClick(tab)}
              >
                <div
                  style={{
                    width: 50,
                    height: 50,
                    backgroundImage: 'url("/images/templates/automation-api/demo/examples.svg")', // путь до спрайта
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: `${tab.iconPositionX}px 0`,
                    display: "block",
                  }}
                />
                <StyledActionsTabHeading
                  $isActive={index + 1 === tabActive}
                  label={t(tab.text)}
                  size={5}
                  level={5}
                />
              </StyledActionsTabButton>
            ))}
          </StyledActionsTabList>
        <StyledActionsContainer>
         <DemoContentWithPanel
            key={tabInfo.id} 
            id={tabInfo.id}
            url={tabInfo.url}
            title={t(tabInfo.title)}
            fileType={tabInfo.fileType}
            docType={tabInfo.docType}
            mode={tabInfo.mode}
            uiTheme={tabInfo.uiTheme}
            permissions={tabInfo.permissions}
          />
        </StyledActionsContainer>
        </Container>
      </Section>
    </>
  );
};

export { Demo };
