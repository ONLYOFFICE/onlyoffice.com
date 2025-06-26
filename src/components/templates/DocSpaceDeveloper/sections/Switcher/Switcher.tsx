import { useEffect, useRef, useState } from "react";
import { Trans, useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";

import {
  StyledSwitcherHeading,
  StyledSwitcherWrapper,
  StyledSwitcherDescription,
  StyledSwitcherScroll,
  StyledSwitcherProgressBar,
  StyledSwitcherInfo,
  StyledSwitcherTitle,
  StyledSwitcherText,
  StyledSwitcherLink,
  StyledSwitcherImageWrapper,
  StyledSwitcherImage,
  StyledSwitcherInfoWrapper
} from "./Switcher.styled";

const Switcher = () => {
  const { t } = useTranslation("docspace-developer");
  const [progressBarHeight, setProgressBarHeight] = useState(0);
  const headingItemRef = useRef<HTMLHeadingElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headingItemRef.current) {
      setProgressBarHeight(headingItemRef.current.clientHeight);
    }
  }, []);


  return (
    <Section>
      <Container>
        <StyledSwitcherHeading
          label={t("SwitcherHeadingBringYour")}
          level={2}
          size={2}
          textAlign="center"
          color="#fff"
        />
        <StyledSwitcherWrapper>
          <StyledSwitcherDescription>
            <StyledSwitcherScroll>
              <StyledSwitcherProgressBar ref={progressBarRef} $height={progressBarHeight} />
            </StyledSwitcherScroll>
            <StyledSwitcherInfoWrapper>
              <StyledSwitcherInfo>
                <StyledSwitcherTitle
                  ref={headingItemRef}
                  $isActive={true}
                  color="#fff"
                >
                  Integrate the whole ONLYOFFICE DocSpace, a single room, or just a simple document ...
                </StyledSwitcherTitle>
                <StyledSwitcherText
                  color="#fff"
                >
                  <Trans
                    t={t}
                    i18nKey={"ONLYOFFICE provides <0>JavaScript SDK</0> allowing you to use all the DocSpace possibilities with api.js."}
                    components={[<Text as={"span"} key={0} fontWeight={600} />]}
                  />
                </StyledSwitcherText>
                <StyledSwitcherLink
                  color="main"
                  label="Read documentation"
                  href="https://api.onlyoffice.com/docspace/javascript-sdk/get-started/basic-concepts/"
                  textUnderline={true}
                  hover="underline-none"
                />
              </StyledSwitcherInfo>
              <StyledSwitcherInfo>
                <StyledSwitcherTitle
                  ref={headingItemRef}
                  $isActive={true}
                  color="#fff"
                >
                  Integrate the whole ONLYOFFICE DocSpace, a single room, or just a simple document ...
                </StyledSwitcherTitle>
                <StyledSwitcherText
                  color="#fff"
                >
                  <Trans
                    t={t}
                    i18nKey={"ONLYOFFICE provides <0>JavaScript SDK</0> allowing you to use all the DocSpace possibilities with api.js."}
                    components={[<Text as={"span"} key={0} fontWeight={600} />]}
                  />
                </StyledSwitcherText>
                <StyledSwitcherLink
                  color="main"
                  label="Read documentation"
                  href="https://api.onlyoffice.com/docspace/javascript-sdk/get-started/basic-concepts/"
                  textUnderline={true}
                  hover="underline-none"
                />
              </StyledSwitcherInfo>
            </StyledSwitcherInfoWrapper>
          </StyledSwitcherDescription>
          <StyledSwitcherImageWrapper>
            <StyledSwitcherImage
              $imageUrl="/images/templates/docspace-developer/switcher/integrate.png"
              $imageUrl2x="/images/templates/docspace-developer/switcher/integrate@2x.png"
            />
          </StyledSwitcherImageWrapper>
        </StyledSwitcherWrapper>
      </Container>
    </Section>
  );
};

export { Switcher };