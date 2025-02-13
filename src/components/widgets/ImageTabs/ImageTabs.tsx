import { useState } from "react";
import { useRouter } from "next/router";
import {
  StyledImageTabs,
  StyledTabButton,
  StyledTabImage,
} from "./ImageTabs.styled";
import { IImageTabs } from "./ImageTabs.types";

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
              {/* chevron-down.svg */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.0026 13.5436L7.74277 9.29363C7.3518 8.90355 6.71629 8.90192 6.32332 9.28998L6.29591 9.31705C5.90294 9.70511 5.90132 10.3359 6.2923 10.726L11.2836 15.7058C11.5041 15.9258 11.8024 16.0223 12.0911 15.9949C12.3217 15.9768 12.5471 15.8799 12.723 15.7044L17.7078 10.731C18.0988 10.3409 18.0972 9.71014 17.7042 9.32208L17.6768 9.29502C17.2838 8.90696 16.6483 8.90859 16.2573 9.29866L12.0026 13.5436Z"
                  fill="#444444"
                />
              </svg>
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
