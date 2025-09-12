import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Container } from "@src/components/ui/Container";
import { FeatureSwitcher } from "@src/components/widgets/FeatureSwitcher";

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

const StyledFeatureSwitcher = styled(FeatureSwitcher)`
  grid-template-columns: 432px auto;
`;

const StyledContainer = styled(Container)`
  padding: 0;

  @media ${device.desktop} {
    padding: 0 40px;
  }
`;

export { StyledDocumentsHeading, StyledDocumentBtn, StyledFeatureSwitcher, StyledContainer };
