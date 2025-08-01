import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";

const StyledLearnSection = styled(Section)<{
  $isDisplay: boolean;
}>`
  display: ${({ $isDisplay }) => ($isDisplay ? "block" : "none")};
`

const StyledLearnHeading = styled(Heading)`
  @media ${device.tabletS} {
    width: 90vw;
    margin: 0 auto;
  }
`;

const StyledLearnList = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  padding: 56px 0;

  @media ${device.desktop} {
    justify-content: flex-start;
    overflow-x: auto;
    padding: 56px 40px;
    gap: 32px;
  }

  @media ${device.mobile} {
    padding: 24px 16px 16px;
  }

  & > a > div:last-child > div h4 {
    padding: 20px 32px 16px;
    font-size: 18px;

    @media ${device.mobile} {
      padding: 24px 16px 12px;
      font-size: 16px;
    }
  }

  & > a > div:last-child > div p {
    padding: 0 32px 16px;
    font-size: 14px;

    @media ${device.mobile} {
      padding: 0 16px 12px;
      font-size: 13px;
    }
  }

  & > a > div:last-child > p {
    margin: 0 auto 32px 32px;
    font-size: 14px;

    @media ${device.mobile} {
      margin: 0 auto 24px 16px;
      font-size: 13px;
    }
  }
`;

export { StyledLearnSection, StyledLearnHeading, StyledLearnList };
