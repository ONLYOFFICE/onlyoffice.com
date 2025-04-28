import styled from "styled-components";
import { Heading } from "@src/components/ui/Heading";
import { Link } from "@src/components/ui/Link";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";

const StyledReasonsWrapper = styled.div`
  display: grid;
  row-gap: 32px;

  @media ${device.tablet} {
    row-gap: 48px;
  }

  @media ${device.mobile} {
    row-gap: 32px;
  }
`;

const StyledReasonsContent = styled.div`
  @media ${device.mobile} {
    display: grid;
    row-gap: 24px;
  }
`;

const StyledReasonsBox = styled.div`
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

const StyledReasonsSubtitle = styled(Heading)`
<<<<<<< Updated upstream
=======
  margin-bottom: 16px;

>>>>>>> Stashed changes
  @media ${device.tablet} {
    font-size: 22px;
    line-height: 29px;
  }

  @media ${device.mobile} {
    font-size: 16px;
    line-height: 21px;
  }
`;

const StyledReasonsText = styled(Text)`
  font-size: 18px;
  line-height: 27px;

  @media ${device.tablet} {
    font-size: 16px;
    line-height: 24px;
  }
`;

const StyledReasonsLinks = styled.div`
  display: grid;
  row-gap: 8px;
`;

const StyledReasonsLink = styled(Link)`
  font-size: 16px;
  line-height: 24px;

  @media ${device.mobile} {
    font-size: 14px;
    line-height: 21px;
  }
`;

const StyledReasonsImage = styled.div`
  width: 100%;
  background-image: url("/images/templates/affiliates/reasons/reasons_image.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding-bottom: 65.804%;

  @media ${device.retina} {
    background-image: url("/images/templates/affiliates/reasons/reasons_image@2x.png");
  }

  @media ${device.tablet} {
    padding-bottom: 0;
    width: 688px;
    height: 453px;
    margin: 0 auto;
  }

  @media ${device.tabletS} {
    width: 100%;
    height: initial;
    padding-bottom: 65.8%;
  }

  @media ${device.mobile} {
    grid-row-start: 1;
  }
`;

const StyledReasonsItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;

  @media ${device.mobile} {
    grid-template-columns: 1fr;
  }
`;

export {
  StyledReasonsItems,
  StyledReasonsWrapper,
  StyledReasonsContent,
  StyledReasonsBox,
  StyledReasonsSubtitle,
  StyledReasonsText,
  StyledReasonsLinks,
  StyledReasonsLink,
  StyledReasonsImage,
};
