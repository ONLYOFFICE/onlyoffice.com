import { Heading } from "@src/components/ui/Heading";
import { Link } from "@src/components/ui/Link";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledAwardContent = styled.div`
  background-color: #fff;
  position: relative;
  border: 1px solid #cccccc;
  box-shadow: 0 7px 15px rgba(85, 85, 85, 0.15);
  border-radius: 5px;
`;

const StyledAwardLogo = styled.div`
  background-image: url("/images/templates/office-for-ios/award/award-user-rating.png");
  background-size: contain;
  background-repeat: no-repeat;
  width: 172px;
  height: 172px;
  position: absolute;
  top: -101px;
  left: 50%;
  transform: translateX(-50%);

  @media ${device.mobile} {
    width: 100px;
    height: 100px;
    top: -50px;
  }
`;

const StyledAwardHeading = styled(Heading)`
  font-style: italic;
  font-weight: 400;
  padding: 0 64px;
  margin: 88px 0 16px;

  @media ${device.mobile} {
    font-size: 16px;
    line-height: 24px;
    margin: 56px 0 8px;
    padding: 0 32px;
  }
`;

const StyledAwardText = styled(Text)`
  margin-bottom: 16px;
  line-height: 100%;

  @media ${device.mobile} {
    margin-bottom: 8px;
  }
`;

const StyledAwardLink = styled(Link)`
  display: block;
  width: fit-content;
  margin: 0 auto 64px;

  @media ${device.mobile} {
    margin: 0 auto 40px;
  }
`;

const StyledAwardQuotes = styled.div`
  width: 100px;
  height: 80px;
  background-image: url("/images/templates/office-for-ios/award/quotes.svg");
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  bottom: -32px;
  right: 55px;

  @media ${device.mobile} {
    width: 62px;
    height: 50px;
    right: 35px;
  }

  @media ${device.mobileS} {
    right: 25px;
  }
`;

export {
  StyledAwardContent,
  StyledAwardLogo,
  StyledAwardHeading,
  StyledAwardText,
  StyledAwardLink,
  StyledAwardQuotes,
};
