import { useState } from "react";
import {
  StyledFeatureTabsHeading,
  StyledImageTabs,
  StyledTabButton,
  StyledTabImage,
  StyledFeatureTabsLinkWrapper,
} from "./FeatureTabs.styled";
import { IFeatureTabs } from "./FeatureTabs.types";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Link } from "@src/components/ui/Link";
import { ChevronDownIcon } from "@src/components/icons";

const FeatureTabs = ({
  id,
  className,
  heading,
  headingSize = 2,
  linkId,
  linkName,
  linkUrl,
  items,
  position = "left",
  bgColor,
  desktopSpacing,
  tabletSpacing,
  tabletSmallSpacing,
  mobileSpacing,
}: IFeatureTabs) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Section
      id={id}
      className={className}
      bgColor={bgColor}
      desktopSpacing={desktopSpacing}
      tabletSpacing={tabletSpacing}
      tabletSmallSpacing={tabletSmallSpacing}
      mobileSpacing={mobileSpacing}
    >
      <Container>
        {heading && (
          <StyledFeatureTabsHeading
            level={2}
            size={headingSize}
            textAlign="center"
          >
            {heading}
          </StyledFeatureTabsHeading>
        )}

        <StyledImageTabs $position={position}>
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                <StyledTabButton
                  onClick={() => setActiveTab(index)}
                  className={activeTab === index ? "active" : ""}
                >
                  <span>{item.label}</span>
                  <ChevronDownIcon />
                </StyledTabButton>

                {activeTab === index && (
                  <StyledTabImage
                    $isMobile
                    $image={items[activeTab].images.url}
                    $image2x={items[activeTab].images?.url2x ?? ""}
                  ></StyledTabImage>
                )}
              </li>
            ))}
          </ul>

          {items[activeTab] && (
            <StyledTabImage
              $isDesktop
              $image={items[activeTab].images.url}
              $image2x={items[activeTab].images?.url2x ?? ""}
            ></StyledTabImage>
          )}
        </StyledImageTabs>

        {linkName && (
          <StyledFeatureTabsLinkWrapper>
            <Link
              id={linkId}
              href={linkUrl}
              label={linkName}
              fontSize="16px"
              lineHeight="26px"
              color="main"
              textUnderline
              hover="underline-none"
            />
          </StyledFeatureTabsLinkWrapper>
        )}
      </Container>
    </Section>
  );
};

export { FeatureTabs };
