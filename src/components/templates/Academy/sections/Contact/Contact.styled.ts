import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";

const ContactSection = styled(Section)`
  background-image: url(/images/templates/academy/contacts/bg.svg);
  background-position: calc(50% + 270px) bottom;
  background-repeat: no-repeat;
  margin: 0 auto;
  text-align: left;
  color: #ffffff;

  @media ${device.desktop} {
    background-position: 90% bottom;
  }

  @media ${device.tabletS} {
    background-position: 50% bottom;
    background-size: 579px auto;
  }
  @media ${device.mobile} {
    background-position: 50% bottom;
    background-size: calc(100% - 32px);
  }
`;

const StyledContainer = styled(Container)`
  display: grid;
  grid-template-columns: 64px auto;
  gap: 32px;

  @media ${device.mobile} {
    grid-template-columns: 1fr;
  }
`;

const ContactIcon = styled.div`
  background-image: url(/images/templates/academy/contacts/icon-choose.svg);
  background-repeat: no-repeat;
  background-size: 64px auto;
  width: 64px;
  height: 64px;
`;

const ContactTextBlock = styled.div`
  align-items: start;
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 737px;
  > p {
    margin-top: -16px;

    span {
      display: block;
    }
  }
  @media ${device.tabletS} {
     max-width: 456px;
  }
  @media ${device.mobile} {
    max-width: 100%;
  }
`;

export { ContactSection, ContactIcon, ContactTextBlock, StyledContainer };
