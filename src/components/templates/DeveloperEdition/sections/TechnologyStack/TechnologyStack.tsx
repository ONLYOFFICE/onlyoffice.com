import { useTranslation } from "next-i18next";
import {
  InfoSection,
  GridWrapper,
  GridItem,
  Wrapper,
  Row,
  StyledContainer,
  LangImg,
  InfoImg,
  StyledText,
} from "./TechnologyStack.styled";
import { Button } from "@src/components/ui/Button";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { items } from "./data/items";

const TechnologyStack = () => {
  const chunked = [];
  for (let i = 0; i < items.length; i += 2) {
    chunked.push(items.slice(i, i + 2));
  }
  const { t } = useTranslation("developer-edition");

  return (
    <Section background="#333333">
      <StyledContainer>
        <Heading color="white" level={2}>
          {t("DevelopingTitle")}
        </Heading>
        <Text color="white">{t("DevelopingSubtitle")}</Text>
        <Wrapper>
          {chunked.map((rowItems, rowIndex) => (
            <Row key={rowIndex}>
              {rowItems.map((item, index) =>
                item.type === "info" ? (
                  <InfoSection key={index}>
                    <InfoImg $positionX={item.positionX} />
                    <Heading color="white" level={3}>
                      {item.title && t(item.title)}
                    </Heading>
                    <StyledText color="white">
                      {item.text && t(item.text)}
                    </StyledText>
                    <Button
                      variant="quinary"
                      as="a"
                      href={item.buttonLink}
                      target={item.isExternal ? "_blank" : undefined}
                      rel={item.isExternal ? "noopener noreferrer" : undefined}
                    >
                      {item.buttonLabel && t(item.buttonLabel)}
                    </Button>
                  </InfoSection>
                ) : (
                  <GridWrapper key={index}>
                    {item.gridItems?.map((gridItem, index) => (
                      <GridItem
                        key={index}
                        href={gridItem.link}
                        as={gridItem.link ? "a" : "div"}
                        target={gridItem.link ? "_blank" : undefined}
                        rel={gridItem.link ? "noopener noreferrer" : undefined}
                        style={{ textDecoration: gridItem.link ? "underline" : "none" }}
                      >
                        <LangImg
                          $positionX={gridItem.positionX}
                          $width={gridItem.width}
                        />
                        {gridItem.name}
                      </GridItem>
                    ))}
                  </GridWrapper>
                ),
              )}
            </Row>
          ))}
        </Wrapper>
      </StyledContainer>
    </Section>
  );
};

export { TechnologyStack };
