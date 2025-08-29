import { Section } from "@src/components/ui/Section";
import { items } from "./data/items";

import {
  StyledLogosBlockContainer,
  StyledLogosBlockItem,
  StyledLogosBlockList
} from "./LogosBlock.styled";

const LogosBlock = () => {
  return (
    <Section
      desktopSpacing={["112px", "0"]}
      tabletSpacing={["112px", "0"]}
      tabletSmallSpacing={["80px", "0"]}
      mobileSpacing={["30px", "0"]}
    >
      <StyledLogosBlockContainer>
        <StyledLogosBlockList>
          {items.map((item) => (
            <StyledLogosBlockItem
              key={item.id}
              $width={item.width}
              $bgPositionX={item.bgPositionX}
            />
          ))}
        </StyledLogosBlockList>
      </StyledLogosBlockContainer>
    </Section>
  );
};

export { LogosBlock };