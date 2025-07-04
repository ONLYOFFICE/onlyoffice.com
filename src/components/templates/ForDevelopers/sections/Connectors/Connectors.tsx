import { useTranslation } from "next-i18next";
import {
  StyledConnectors,
  StyledConnectorsItems,
} from "./Connectors.styled";
import { Section } from "@src/components/ui/Section";
import { connectorsItems } from "./data/connectorsItems";

const Connectors = () => {
  const { t } = useTranslation("for-developers");

  return (
    <Section
      background="#f9f9f9"
      desktopSpacing={["88px", "88px"]}
      tabletSpacing={["56px", "56px"]}
      tabletSmallSpacing={["56px", "56px"]}
    >
      <StyledConnectors>
        <StyledConnectorsItems>
          {connectorsItems.map((item, index) => (
            <li key={index}>
              <div
                style={{
                  width: item.image.width, 
                  height: item.image.height, 
                  backgroundImage: `url(${item.image.url})`, 
                  backgroundPosition: item.image.positionX, 
                  backgroundSize: '840px auto', 
                  backgroundRepeat: 'no-repeat', 
                }}
              />
            </li>
          ))}
        </StyledConnectorsItems>
      </StyledConnectors>
    </Section>
  );
};

export { Connectors };
