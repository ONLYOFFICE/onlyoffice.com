import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";

const StyledSection = styled(Section)`
  position: relative;
  top: -290px;
  margin-bottom: -178px;

  @media ${device.mobile} {
    top: -305px;
    margin-bottom: -241px;
  }
`;

const StyledContainer = styled(Container)`
  max-width: 970px;
  padding: 0;

  @media ${device.tablet} {
    padding: 0 16px;
  }
`;

const StyledContactList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 60px 16px;

  @media ${device.tablet} {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledOfficeTitle = styled(Heading)`
  padding: 0 0 30px;
  font-size: 18px;
  line-height: 1.3em;
`;

const StyledEmailList = styled.div`
  position: relative;
  padding-bottom: 64px;

  @media ${device.tablet} {
    grid-column: span 1;
  }
  @media ${device.mobile} {
    padding-bottom: 0;
  }
`;

const StyledEmailItem = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  gap: 5px;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }

  @media ${device.mobile} {
    align-items: flex-start;
    gap: 4px;
  }
`;

const StyledMap = styled.iframe`
  border: none;
  width: 380px;
  height: 360px;
  margin-top: 30px;

  @media ${device.tablet} {
    width: 82vw;
  }
`;

const StyledItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 13px;
  line-height: 1.3em;

  > p > span {
    display: block;
    padding: 4px;
  }

  @media ${device.tablet} {
    font-size: 15px;
  }
`;

export {
  StyledOfficeTitle,
  StyledSection,
  StyledContainer,
  StyledContactList,
  StyledItem,
  StyledMap,
  StyledEmailItem,
  StyledEmailList,
  StyledItemDescription,
};
