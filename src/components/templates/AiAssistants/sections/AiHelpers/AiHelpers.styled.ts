import { Heading } from "@src/components/ui/Heading";
import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledAiHelpersWrapper = styled.div`
  display: grid;
  gap: 112px;

  @media ${device.tabletS} {
    gap: 72px;
  }

  @media ${device.mobile} {
    gap: 48px;
  }
`;

const StyledAiHelpersHeading = styled(Heading)<{ $locale?: string }>`
  span {
    display: ${({ $locale }) => ($locale === "ru" ? "inline-block" : "inline")};
  }
`;

const StyledAiHelpersBtnsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;

  @media ${device.mobile} {
    display: grid;
    justify-content: initial;
  }
`;

export {
  StyledAiHelpersWrapper,
  StyledAiHelpersHeading,
  StyledAiHelpersBtnsWrapper,
};
