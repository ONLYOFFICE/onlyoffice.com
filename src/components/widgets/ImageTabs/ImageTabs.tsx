import { useState } from "react";
import { useRouter } from "next/router";
import {
  StyledImageTabs,
  StyledTabButton,
  StyledTabImage,
} from "./ImageTabs.styled";
import { IImageTabs } from "./ImageTabs.types";
import { ChevronDownIcon } from "@src/components/icons";

const ImageTabs = ({ id, className, items, position = "left" }: IImageTabs) => {
  const router = useRouter();
  const locale = router.locale;

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
                $image={
                  items[activeTab].images[locale!]?.url ??
                  items[activeTab].images.en.url
                }
                $image2x={
                  items[activeTab].images[locale!]?.url2x ??
                  items[activeTab].images.en.url2x ??
                  ""
                }
              ></StyledTabImage>
            )}
          </li>
        ))}
      </ul>

      {items[activeTab] && (
        <StyledTabImage
          $isDesktop
          $image={
            items[activeTab].images[locale!]?.url ??
            items[activeTab].images.en.url
          }
          $image2x={
            items[activeTab].images[locale!]?.url2x ??
            items[activeTab].images.en.url2x ??
            ""
          }
        ></StyledTabImage>
      )}
    </StyledImageTabs>
  );
};

export { ImageTabs };
