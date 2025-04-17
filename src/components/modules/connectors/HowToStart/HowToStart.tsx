import {
  StyledHowToStart,
  StyledHowToStartBody,
  StyledHowToStartNumber,
  StyledHowToStartHeading,
  StyledHowToStartWrapper,
  StyledHowToStartInfo,
  StyledHowToStartImg,
  StyledHowToStartContainer,
} from "./HowToStart.styled";
import { IHowToStart } from "./HowToStart.types";
import { Heading } from "@src/components/ui/Heading";

const ConnectorHowToStart = ({
  id,
  className,
  items,
  header,
  text,
  imageUrl,
  imageHeight = 378,
}: IHowToStart) => {
  return (
    <StyledHowToStart id={id} className={className}>
      <StyledHowToStartContainer>
        <Heading level={2} textAlign="left" label={header} />
        <StyledHowToStartWrapper>
          {items.map((item, index) => (
            <StyledHowToStartBody key={index}>
              <StyledHowToStartNumber>
                {index + 1}.
              </StyledHowToStartNumber>
              <StyledHowToStartHeading>
                {item.heading}
              </StyledHowToStartHeading>
            </StyledHowToStartBody>
          ))}
        </StyledHowToStartWrapper>

        <StyledHowToStartInfo>{text}</StyledHowToStartInfo>
      </StyledHowToStartContainer>

      <StyledHowToStartImg
        $imgUrl={imageUrl ?? ""}
        $imageHeight={imageHeight}
      />
    </StyledHowToStart>
  );
};

export { ConnectorHowToStart };
