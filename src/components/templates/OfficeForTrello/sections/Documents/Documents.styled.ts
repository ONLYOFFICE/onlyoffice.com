import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";

const StyledDocumentsHeading = styled(Heading)`
  margin: 0 auto 56px;
  max-width: 720px;

  @media ${device.tablet} {
    margin: 0 auto 40px;
  }

  @media ${device.mobile} {
    margin: 0 auto 24px;
  }
`;

const StyledDocumentBtn = styled.div`
  display: flex;
  margin-top: 48px;
  justify-content: center;

  @media ${device.mobile} {
    margin-top: 32px;
  }
`;

export { StyledDocumentsHeading, StyledDocumentBtn };
