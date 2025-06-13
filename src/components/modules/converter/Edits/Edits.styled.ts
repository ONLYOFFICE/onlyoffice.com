import { Section } from "@src/components/ui/Section";
import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledEditsSection = styled(Section)`
  padding-bottom: 0;
`;

const StyledEditsWrapper = styled.div`
  display: grid;
  justify-items: center;
  text-align: center;
  gap: 32px;
  margin-bottom: 32px;

  @media ${device.mobile} {
    gap: 24px;
    margin-bottom: 24px;
  }
`;

const StyledEditsImage = styled.div<{ $image: string; $image2x: string }>`
  width: 100%;
  padding-bottom: 35.45%;
  background-image: url(${({ $image }) => $image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  @media ${device.retina} {
    background-image: url(${({ $image2x }) => $image2x});
  }
`;

export { StyledEditsSection, StyledEditsWrapper, StyledEditsImage };
