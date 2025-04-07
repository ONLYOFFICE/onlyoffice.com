import {
  StyledRoomsHero,
  StyledRoomsHeroWrapper,
  StyledRoomsHeroContent,
  StyledRoomsHeroImage,
  StyledRoomsHeroList,
  StyledRoomsHeroListItem,
} from "./RoomsHero.styled";
import { IRoomsHero } from "./RoomsHero.types";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";

const RoomsHero = ({
  heading,
  text,
  button,
  items,
  image: { url: imgUrl, url2x: imgUrl2x },
}: IRoomsHero) => {
  return (
    <StyledRoomsHero
      desktopSpacing={["120px", "80px"]}
      tabletSpacing={["120px", "80px"]}
      tabletSmallSpacing={["136px", "32px"]}
      mobileSpacing={["96px", "48px"]}
    >
      <Container>
        <StyledRoomsHeroWrapper>
          <StyledRoomsHeroContent>
            <Heading level={1}>{heading}</Heading>
            <Text size={1} label={text} />
            <StyledRoomsHeroList>
              {items.map((item, index) => (
                <StyledRoomsHeroListItem key={index}>
                  {item.label}
                </StyledRoomsHeroListItem>
              ))}
            </StyledRoomsHeroList>
            <Button
              id={button.id}
              as="a"
              href={button.href}
              label={button.label}
            />
          </StyledRoomsHeroContent>
          <StyledRoomsHeroImage $imgUrl={imgUrl} $imgUrl2x={imgUrl2x} />
        </StyledRoomsHeroWrapper>
      </Container>
    </StyledRoomsHero>
  );
};

export { RoomsHero };
