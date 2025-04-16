import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import styled from "styled-components";

const UsersWorldwideWrapper = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 39px;
  position: relative;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 24px;
  align-items: center;

  &::before {
    content: "";
    width: 143px;
    height: 25px;
    position: absolute;
    right: 30px;
    bottom: -12.5px;
    background-image: url("/images/templates/certificates/users/line.svg");
    background-repeat: no-repeat;
    background-size: 143px 25px;
  }

  @media ${device.tabletS} {
    grid-template-columns: 1fr;
    padding-bottom: 56px;
    justify-items: center;

    &::before {
      left: 50%;
      transform: translateX(-50%);
    }
  }

  @media ${device.mobile} {
    padding: 32px 24px 40px;
  }
`;

const UsersWorldwideContent = styled.div`
  display: grid;
  grid-template-columns: 74px auto;
  gap: 32px;

  @media ${device.tabletS} {
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
  }

  @media ${device.mobile} {
    gap: 24px;
  }
`;

const UsersWorldwideImage = styled.div`
  width: 74px;
  height: 74px;
  background-image: url("/images/templates/certificates/users/world.svg");
  background-repeat: no-repeat;
  background-size: contain;
`;

const UsersWorldwideText = styled(Text)`
  max-width: 533px;
  font-size: 28px;
  font-weight: 700;
  line-height: 31px;
  letter-spacing: -0.02em;

  @media ${device.mobile} {
    font-size: 20px;
    line-height: 27px;
  }
`;

export { UsersWorldwideWrapper, UsersWorldwideContent, UsersWorldwideImage, UsersWorldwideText };
