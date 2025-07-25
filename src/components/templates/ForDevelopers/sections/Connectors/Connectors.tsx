import {
  StyledConnectors,
  StyledConnectorsItems,
  StyledItem,
} from "./Connectors.styled";
import { Section } from "@src/components/ui/Section";
import { connectorsItems } from "./data/connectorsItems";

const Connectors = () => {
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
            <StyledItem
              key={index}
              $width={item.image.width}
              $height={item.image.height}
              $backgroundImage={`url(${item.image.url})`}
              $backgroundPosition={item.image.positionX}
            />
          ))}
        </StyledConnectorsItems>
      </StyledConnectors>
    </Section>
  );
};

export { Connectors };
