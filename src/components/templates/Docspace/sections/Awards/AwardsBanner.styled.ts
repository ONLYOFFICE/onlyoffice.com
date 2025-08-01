import styled from "styled-components";
import { Section } from "@src/components/ui/Section";
import { device } from "@src/utils/device";

const StyledSection = styled(Section)`
  border-top: 1px solid #EFEFEF;
  padding: 56px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;

  @media ${device.mobile} {
    flex-wrap: wrap;
  }
`;

const StyledBannerItem = styled.img`
  height: 52px;
`;

export { StyledSection, StyledBannerItem };
