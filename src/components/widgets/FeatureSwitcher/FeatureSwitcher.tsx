import { useState } from "react";
import {
  StyledFeatureSwitcher,
  StyledFeatureSwitcherBtn,
  StyledFeatureSwitcherImage,
} from "./FeatureSwitcher.styled";
import { IFeatureSwitcher } from "./FeatureSwitcher.types";
import { ChevronDownIcon } from "@src/components/icons";

const FeatureSwitcher = ({
  id,
  className,
  items,
  position = "left",
}: IFeatureSwitcher) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <StyledFeatureSwitcher id={id} className={className} $position={position}>
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

            {activeTab === index && (
              <StyledFeatureSwitcherImage
                $isMobile
                $image={items[activeTab].images.url}
                $image2x={items[activeTab].images?.url2x ?? ""}
              ></StyledFeatureSwitcherImage>
            )}
          </li>
        ))}
      </ul>

      {items[activeTab] && (
        <StyledFeatureSwitcherImage
          $isDesktop
          $image={items[activeTab].images.url}
          $image2x={items[activeTab].images?.url2x ?? ""}
        ></StyledFeatureSwitcherImage>
      )}
    </StyledFeatureSwitcher>
  );
};

export { FeatureSwitcher };
