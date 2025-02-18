import { useState } from "react";
import {
  StyledImageTabs,
  StyledTabButton,
  StyledTabImage,
} from "./ImageTabs.styled";
import { IImageTabs } from "./ImageTabs.types";
import { ChevronDownIcon } from "@src/components/icons";

const ImageTabs = ({ id, className, items, position = "left" }: IImageTabs) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <StyledImageTabs id={id} className={className} $position={position}>
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
  );
};

export { ImageTabs };
