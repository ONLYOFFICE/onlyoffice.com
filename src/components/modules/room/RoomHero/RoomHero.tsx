import {
  StyledRoomHero,
  StyledRoomHeroWrapper,
  StyledRoomHeroContent,
  StyledRoomHeroImage,
  StyledRoomHeroList,
  StyledRoomHeroListItem,
} from "./RoomHero.styled";
import { IRoomHero } from "./RoomHero.types";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";

const RoomHero = ({
  title,
  text,
  button,
  items,
  image: { url: imgUrl, url2x: imgUrl2x },
}: IRoomHero) => {
  return (
    <StyledRoomHero
      desktopSpacing={["120px", "80px"]}
      tabletSpacing={["120px", "80px"]}
      tabletSmallSpacing={["136px", "32px"]}
      mobileSpacing={["96px", "48px"]}
    >
      <Container>
        <StyledRoomHeroWrapper>
          <StyledRoomHeroContent>
            <Heading level={1}>{title}</Heading>
            <Text size={1} label={text} />
            <StyledRoomHeroList>
              {items.map((item, index) => (
                <StyledRoomHeroListItem key={index}>
                  {item.label}
                </StyledRoomHeroListItem>
              ))}
            </StyledRoomHeroList>
            <Button
              id={button.id}
              as="a"
              href={button.href}
              label={button.label}
            />
          </StyledRoomHeroContent>
          <StyledRoomHeroImage $imgUrl={imgUrl} $imgUrl2x={imgUrl2x} />
        </StyledRoomHeroWrapper>
      </Container>
    </StyledRoomHero>
  );
};

export { RoomHero };
