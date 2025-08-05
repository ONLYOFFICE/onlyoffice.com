import { useState } from "react";
import {
  StyledFeatureSwitcher,
  StyledFeatureSwitcherWrapper,
  StyledFeatureSwitcherBtn,
  StyledFeatureSwitcherImage,
  StyledFeatureSwitcherCustomBtn,
  StyledFeatureSwitcherHeading,
} from "./FeatureSwitcher.styled";
import { IFeatureSwitcher } from "./FeatureSwitcher.types";
import { ChevronDownIcon } from "@src/components/icons";

const FeatureSwitcher = ({
  id,
  className,
  items,
  imageWidth = 736,
  imageHeight = 520,
  position = "left",
  customButton,
  heading,
}: IFeatureSwitcher) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <StyledFeatureSwitcher id={id} className={className} $position={position}>
      <StyledFeatureSwitcherWrapper $position={position}>
        {heading && (
          <StyledFeatureSwitcherHeading level={5}>
            {heading}
          </StyledFeatureSwitcherHeading>
        )}
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <StyledFeatureSwitcherBtn
                onClick={() => setActiveTab(index)}
                $active={activeTab === index}
              >
                <span>{item.label}</span>
                <ChevronDownIcon />
              </StyledFeatureSwitcherBtn>

              <StyledFeatureSwitcherImage
                $active={activeTab === index}
                $imageWidth={imageWidth}
                $imageHeight={imageHeight}
                $isMobile
                $imageUrl={item.image.url}
                $imageUrl2x={item.image?.url2x ?? ""}
              />
            </li>
          ))}
        </ul>
        {customButton && (
          <StyledFeatureSwitcherCustomBtn>
            {customButton}
          </StyledFeatureSwitcherCustomBtn>
        )}
      </StyledFeatureSwitcherWrapper>

      {items.map((item, index) => (
        <StyledFeatureSwitcherImage
          key={index}
          $active={activeTab === index}
          $imageWidth={imageWidth}
          $imageHeight={imageHeight}
          $isDesktop
          $imageUrl={item.image.url}
          $imageUrl2x={item.image?.url2x ?? ""}
        />
      ))}
    </StyledFeatureSwitcher>
  );
};

export { FeatureSwitcher };
