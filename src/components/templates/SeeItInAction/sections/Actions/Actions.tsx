import { useState } from "react";
import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import { ActionsContent } from "./sub-components/ActionsContent";
import { IButtonInfo } from "./sub-components/ActionsContent/ActionsContent.types";
import { tabsInfo } from "./data/tabsInfo";

import {
  StyledActionsTabButton,
  StyledActionsTabHeading,
  StyledActionsTabList,
} from "./Actions.styled";

const Actions = () => {
  const [tabInfo, setTabInfo] = useState<IButtonInfo>(tabsInfo[5]);
  const [tabActive, setTabActive] = useState<number>(6);

  const handleTabClick = (tab: IButtonInfo) => {
    setTabActive(tab.id);
    setTabInfo(tab);
  };

  return (
    <>
      <Section
        background="#f5f5f5"
        desktopSpacing={["0", "0"]}
        tabletSpacing={["0", "0"]}
        tabletSmallSpacing={["0", "0"]}
        mobileSpacing={["0", "0"]}
      >
        <Container>
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
                  label={tab.text}
                  size={5}
                  level={5}
                />
              </StyledActionsTabButton>
            ))}
          </StyledActionsTabList>
        </Container>
      </Section>
      <Section>
        <Container>
          <ActionsContent
            url={tabInfo.url}
            title={tabInfo.title}
            fileType={tabInfo.fileType}
            mode={tabInfo.mode}
            uiTheme={tabInfo.uiTheme}
          />
        </Container>
      </Section>
    </>
  );
};

export { Actions };
