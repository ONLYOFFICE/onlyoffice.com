import {
  StyledSimpleHowToStart,
  StyledSimpleHowToStartBody,
  StyledSimpleHowToStartNumber,
  StyledSimpleHowToStartHeading,
  StyledSimpleHowToStartWrapper,
  StyledHowToStartInfo,
  StyledHowToStartImg,
  StyledSimpleHowToStartContainer,
} from "./SimpleHowToStart.styled";
import { ISimpleHowToStart } from "./SimpleHowToStart.types";
import { Heading } from "@src/components/ui/Heading";

const SimpleHowToStart = ({
  id,
  className,
  items,
  header,
  text,
  imageUrl,
  imageHeight = 378,
}: ISimpleHowToStart) => {
  return (
    <StyledSimpleHowToStart id={id} className={className}>
      <StyledSimpleHowToStartContainer>
        <Heading level={2} textAlign="left" label={header} />
        <StyledSimpleHowToStartWrapper>
          {items.map((item, index) => (
            <StyledSimpleHowToStartBody key={index}>
              <StyledSimpleHowToStartNumber>
                {index + 1}.
              </StyledSimpleHowToStartNumber>
              <StyledSimpleHowToStartHeading>
                {item.heading}
              </StyledSimpleHowToStartHeading>
            </StyledSimpleHowToStartBody>
          ))}
        </StyledSimpleHowToStartWrapper>

        <StyledHowToStartInfo>{text}</StyledHowToStartInfo>
      </StyledSimpleHowToStartContainer>

      <StyledHowToStartImg $imgUrl={imageUrl ?? ""} $imageHeight={imageHeight} />
    </StyledSimpleHowToStart>
  );
};

export { SimpleHowToStart };
