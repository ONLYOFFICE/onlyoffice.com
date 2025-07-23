import styled from "styled-components";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { device } from "@src/utils/device";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";

const StyledContainer = styled(Container)`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 0;
  text-align: center;

  @media ${device.desktop} {
    padding: 0 32px;
  }

  @media ${device.mobile} {
    padding: 0 16px;
  }
`;

const StyledSubHeading = styled(Text)`
  font-size: 18px;
  line-height: 1.6em;
  text-align: center;
  padding: 32px 0;

  @media ${device.mobile} {
    font-size: 16px;
  }
`;

const StyledCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
  padding: 56px 0px 0;

  @media ${device.mobile} {
    padding: 32px 0px 0;
  }
`;

const StyledCardImage = styled.div<{ $positionX: string }>`
  aspect-ratio: 1.67;
  background-image: url("/images/templates/desktop/one-pack/desktop-icons.svg");
  background-position: center;
  background-repeat: no-repeat;
  content: "";
  background-position-x: ${(props) => props.$positionX};
  margin: 0 0 16px;
  width: 152px;

  @media ${device.mobile} {
    margin: 0 0 8px;
  }
`;

const StyledCardHeading = styled(Heading)`
  font-size: 18px;
  font-weight: 700;
  transition: color 0.3s ease;
`;

const StyledCardBody = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  padding: 40px 30px;
  background-color: #ffffff;
  box-shadow: 0 7px 15px rgba(85, 85, 85, 0.1);
  text-decoration: none;
  color: inherit;
  text-align: center;
  width: 352px;
  gap: 16px;

  &:hover {
    box-shadow: 0px 20px 50px rgba(85, 85, 85, 0.15);
    transition: 0.5s;

    ${StyledCardHeading} {
      color: #ff6f3d;
    }
  }

  @media ${device.tablet} {
    width: calc(50vw - 48px);
  }

  @media ${device.mobile} {
    padding: 24px 16px;
    width: 100%;
  }
`;

const StyledText = styled(Text)`
  font-size: 13px;
  color: #ff6f3d;
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
`;

export {
  StyledContainer,
  StyledSubHeading,
  StyledCardContainer,
  StyledCardBody,
  StyledCardImage,
  StyledCardHeading,
  StyledText,
};
