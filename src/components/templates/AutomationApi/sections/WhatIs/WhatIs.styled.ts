import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";

const StyledWhatContent = styled.div`
  display: grid;
  justify-items: center;
  row-gap: 32px;
  max-width: 736px;
  margin: auto;

  @media ${device.desktop} {
    justify-items: center;
    max-width: 100%;
  }

  @media ${device.mobile} {
    row-gap: 24px;

    a {
      font-size: 14px;
    }
  }
`;

const StyledWhatHeading = styled(Heading)`
  text-align: center;

  @media ${device.desktop} {
    max-width: 795px;
  }

  @media ${device.tablet} {
    font-size: 36px;
    line-height: 59px;
  }

  @media ${device.mobile} {
    font-size: 24px;
    line-height: 32px;
  }
`;

const StyledWhatSubheading = styled(Heading)`
  text-align: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0;

  @media ${device.mobile} {
    font-size: 14px;
    line-height: 21px;
  }
`;

const StyledCheckExamplesBtn = styled.button`
  border: none;
  padding: 0;
  font-size: 16px;
  line-height: 24px;
  color: #ff6f3d;
  text-decoration: underline;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }

  @media ${device.mobile} {
    font-size: 14px;
    line-height: 21px;
  }
`;

export {
  StyledWhatContent,
  StyledWhatHeading,
  StyledWhatSubheading,
  StyledCheckExamplesBtn,
};
