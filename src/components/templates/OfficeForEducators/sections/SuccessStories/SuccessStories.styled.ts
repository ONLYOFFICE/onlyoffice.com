import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

const StyledSuccessStoriesHeading = styled(Heading)`
  margin: 0 auto 24px;
  font-size: 32px;
  line-height: 133%;

  @media ${device.mobile} {
    text-align: start;
    margin: 0 0 16px;
    font-size: 24px;
  }
`;

const StyledSuccessStoriesDesc = styled(Text)`
  max-width: 736px;
  margin: 0 auto 56px;
  font-size: 18px;
  line-height: 150%;

  @media ${device.mobile} {
    font-size: 14px;
    margin-bottom: 32px;
  }
`;

const StyledSuccessStoriesItems = styled.div`
  max-width: 928px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;

  .blog-card {
    max-width: 100%;
    min-width: 100%;

    @media ${device.tablet} {
      max-width: 352px;
      min-width: 352px;
    }

    @media ${device.mobile} {
      max-width: 272px;
      min-width: 272px;
    }
  }

  @media ${device.tablet} {
    max-width: none;
    grid-template-columns: repeat(4, 1fr);
    margin: 0 -40px -32px;
    padding: 0 40px 32px;
    overflow-x: auto;
  }

  @media ${device.mobile} {
    column-gap: 16px;
    margin: 0 -16px -32px;
    padding: 0 16px 32px;
  }
`;

export {
  StyledSuccessStoriesHeading,
  StyledSuccessStoriesDesc,
  StyledSuccessStoriesItems,
};
