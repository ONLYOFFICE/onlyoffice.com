import { Heading } from "@src/components/ui/Heading";
import {
  StyledHeroContent,
  StyledHeroImage,
  StyledHeroWrapper,
} from "./RoomsHero.styled";
import { Text } from "@src/components/ui/Text";
import { List } from "../List";
import { Button } from "@src/components/ui/Button";
import { IRoomsHero } from "./RoomsHero.types";

const RoomsHero = ({
  title,
  text,
  button,
  items,
  imgUrl,
  imgUrl2x,
  imgWidht,
  imgHeight = 730,
}: IRoomsHero) => {
  return (
    <StyledHeroWrapper>
      <StyledHeroContent>
        <Heading level={1}>{title}</Heading>
        <Text size={1} label={text} />
        <List
          items={items.map(({ label }) => ({
            label: label,
          }))}
        />
        <Button id={button.id} as="a" href={button.href} label={button.label} />
      </StyledHeroContent>
      <StyledHeroImage
        $imgWidht={imgWidht}
        $imgHeight={imgHeight}
        $imgUrl={imgUrl}
        $imgUrl2x={imgUrl2x}
      />
    </StyledHeroWrapper>
  );
};

export { RoomsHero };
