import styled from "styled-components";
import { device } from "@src/utils/device";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Link } from "@src/components/ui/Link";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledContainer = styled(Container)`
  width: 100%;
  max-width: 1050px;
`;

const StyledDocumentsList = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledDocumentItem = styled.div`
  padding: 40px 0;
  border-top: 1px solid #E0E0E0;
  display: flex;
  align-items: center;
  gap: 20px;
  
  @media ${device.mobile} {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  &:last-child {
    border-bottom: 1px solid #E0E0E0;
  }
`;

const StyledDocumentTitle = styled(Heading)`
  font-size: 18px;
  font-weight: 600;
  
  @media ${device.tablet} {
    font-size: 18px;
  }
`;

const StyledLink = styled(Link)<{ isOpenSource?: boolean }>`
  font-size: 14px;
  transition: color 0.2s;
  white-space: nowrap;
  font-weight: ${props => props.isOpenSource ? 600 : 400};
  
  @media ${device.mobile} {
    font-size: 15px;
  }
`; 

const StyledOpenSourceLink = styled(Link)`
  font-size: 14px;
  font-weight: 600;
  display: inline-flex;
  white-space: nowrap;
  gap: 5px;

  &:before {
    background-image: url(${getAssetUrl('/images/icons/open-source.png')});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    display: block;
    content: "";
    width: 17px;
    height: 17px; 
  }
  
  @media ${device.mobile} {
    font-size: 15px;
  }
`;

export { StyledOpenSourceLink, StyledContainer, StyledDocumentsList, StyledDocumentItem, StyledDocumentTitle, StyledLink }