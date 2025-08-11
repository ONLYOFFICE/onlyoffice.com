import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledTabs = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-bottom: 17px;

  @media ${device.tabletS} {
    flex-wrap: nowrap;
    overflow-x: scroll;
    max-width: 100%;
  }
`;

const StyledTab = styled.button<{ active: boolean }>`
  border: none;
  background: none;
  font-size: 14px;
  line-height: 20px;
  font-weight: ${({ active }) => (active ? 700 : 400)};
  color: ${({ active }) => (active ? "#3D4A6B" : "#666666")};
  padding: 10px 33px;
  cursor: pointer;
  text-align: center;
  border-bottom: 1px solid #D1D1D1;

  &:hover {
    color: #3D4A6B;
  }

  @media ${device.tabletS} {
    white-space: nowrap;
  }
`;

const StyledBannerBlock = styled.div`
  margin-bottom: 0;
`;

const StyledBannerTitle = styled.h3`
  font-size: 14px;
  margin-bottom: 10px;
  color: #666;
  font-weight: 500;
`;

const StyledBannerImage = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  margin-bottom: 16px;
`;

const StyledBannerNote = styled.p`
  color: #666;
  font-weight: 700;
  margin-bottom: 7px;
  font-size: 13px;
  padding: 10px 0;
  line-height: 1.5em;
`;

const StyledTextarea = styled.textarea`
  border: 1px solid #666;
  color: #666;
  font-size: 11px;
  height: 70px;
  resize: none;
  width: 100%;
  margin-bottom: 14px;
`;

export { 
  StyledTabs,
  StyledTab,
  StyledBannerBlock,
  StyledBannerTitle,
  StyledBannerImage,
  StyledBannerNote,
  StyledTextarea
};
