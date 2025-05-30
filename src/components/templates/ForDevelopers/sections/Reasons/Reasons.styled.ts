import styled from "styled-components";
import { Heading } from "@src/components/ui/Heading";
import { Link } from "@src/components/ui/Link";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";

const StyledDocumentWrapper = styled.div`
`;

const StyledDocumentContent = styled.div`
    display: grid;
  grid-template-columns: 545px auto;
  gap: 32px;
  align-items: center;

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${device.tabletS} {
    grid-template-columns: 1fr;
  }
`;

const StyledDocumentBox = styled.div`
  display: grid;
  row-gap: 16px;
  margin: 0 auto 32px;
  max-width: 720px;
  text-align: center;

  @media ${device.tablet} {
    row-gap: 8px;
    max-width: 100%;
  }

  @media ${device.mobile} {
    margin: 0 auto;
  }
`;

const StyledDocumentText = styled(Text)`
  margin-bottom: 32px;
  color: #fff;
  font-size: 16px;
  line-height: 24px;

  @media ${device.mobile} {
    margin-bottom: 24px;
    font-size: 14px;
    line-height: 21px;
  }
`;

const StyledDocumentImage = styled.div`
  background-image: url("/images/templates/conversion-api/conversion/conversion.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  padding-bottom: 70.6%;

  @media ${device.tabletS} {
    max-width: 544px;
    width: 100%;
    margin: 0 auto;
    padding-bottom: 55.815%;
  }

  @media ${device.mobile} {
    padding-bottom: 70.6%;
  }
`;

const StyledDocumentHeading  = styled(Heading)`
margin-bottom: 16px;
color: #fff;
`;

export {
  StyledDocumentWrapper,
  StyledDocumentContent,
  StyledDocumentBox,
  StyledDocumentText,
  StyledDocumentImage,
  StyledDocumentHeading
};
