import { Heading } from "@src/components/ui/Heading";
import { Link } from "@src/components/ui/Link";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledReasonsContent = styled.div`
  margin: 32px 0;
  display: grid;
  text-align: center;

  @media ${device.tablet} {
    margin: 48px 0;
  }

  @media ${device.mobile} {
    margin: 32px 0;
    text-align: start;
  }
`;

const StyledReasonsSubtitle = styled(Heading)`
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 16px;

  @media ${device.tablet} {
    font-size: 22px;
    line-height: 29px;
  }

  @media ${device.mobile} {
    font-size: 16px;
    line-height: 21px;
    margin-bottom: 8px;
  }
`;

const StyledReasonsText = styled(Text)`
  max-width: 720px;
  margin: 0 auto 16px;
  font-size: 18px;
  line-height: 27px;

  @media ${device.tablet} {
    max-width: 100%;
    font-size: 16px;
    line-height: 24px;
  }

  @media ${device.mobile} {
    margin-bottom: 8px;
  }
`;

const StyledReasonsLink = styled(Link)`
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 8px;

  &.second-link {
    margin-bottom: 32px;

    @media ${device.mobile} {
      margin-bottom: 0;
    }
  }

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
  padding-bottom: 65.8%;

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
    margin-bottom: 24px;
  }
`;

const StyledReasonsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;

  @media ${device.mobile} {
    grid-template-columns: 1fr;
  }
`;

export {
  StyledReasonsWrapper,
  StyledReasonsContent,
  StyledReasonsSubtitle,
  StyledReasonsText,
  StyledReasonsLink,
  StyledReasonsImage,
};
