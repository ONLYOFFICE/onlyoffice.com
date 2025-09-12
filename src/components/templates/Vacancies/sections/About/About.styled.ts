import styled from "styled-components";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";

const StyledAboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin: 56px 0 88px;

  @media ${device.mobile} {
    margin: 24px 0 88px;
    gap: 16px;
  }
`;

const StyledAboutText = styled(Text)``;

const StyledAboutImage = styled.div`
  width: 1240px;
  height: 418px;
  background-image: url("/images/templates/vacancies/about/about-pic.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0 auto;

  @media (max-width: 1240px) {
    width: 90vw;
    height: 30vw;
    background-size: 90vw auto;
  }
`;

export {
  StyledAboutContent,
  StyledAboutText,
  StyledAboutImage,
};