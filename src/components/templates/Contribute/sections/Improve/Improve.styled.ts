import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import styled from "styled-components";

const ImproveItems = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px 32px;
  padding: 56px 0;

  @media ${device.tabletS} {
    row-gap: 56px;
  }

  @media ${device.mobile} {
    padding: 24px 0 48px;
    grid-template-columns: 1fr;
    row-gap: 24px;
  }
`;

const StyledSocialMeadiaText = styled(Text)`
  text-align: center;
  margin-bottom: 16px;

  @media ${device.tabletS} {
    margin-bottom: 24px;
  }

  @media ${device.mobile} {
    margin-bottom: 16px;
  }
`;

const StyledSocialMediaIcons = styled.ul`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;

  @media ${device.mobile} {
    row-gap: 10px;
  }
`;

const StyledSocialMediaIcon = styled.li<{ $iconPosition: string }>`
  background-image: url("/images/templates/contribute/improve/social-icons.svg");
  background-repeat: no-repeat;
  width: 24px;
  height: 24px;
  cursor: pointer;
  background-position-x: ${({ $iconPosition }) => $iconPosition};
  filter: grayscale(1);
  transition: filter 0.2s;

  &:hover {
    filter: grayscale(0);
  }

  a {
    display: inline-block;
    width: 24px;
    height: 24px;
  }
`;

export {
  ImproveItems,
  StyledSocialMeadiaText,
  StyledSocialMediaIcons,
  StyledSocialMediaIcon,
};
