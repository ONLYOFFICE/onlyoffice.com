import { Heading } from "@src/components/ui/Heading";
import { Section } from "@src/components/ui/Section";
import styled from "styled-components";

const StyledEditorsSection = styled(Section)`
  @media screen and (max-width: 1023px) {
    display: none;
  }
`;

const StyledEditorsHeading = styled(Heading)`
  max-width: 930px;
  margin: 0 auto 80px;
  text-align: center;
  font-size: 40px;
  line-height: 48px;
`;

const StyledEditorsTabsWrapper = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #c4c4c4;
`;

const StyledEditorsTab = styled.button<{ $active?: boolean }>`
  border: none;
  padding: 21px 72px;
  cursor: pointer;
  font-size: 18px;
  line-height: 29px;
  font-weight: 600;
  color: ${({ $active }) => ($active ? "#FF6F3D" : "#333")};
  box-shadow: ${({ $active }) =>
    $active ? "0 7px 25px rgba(0,0,0,0.1)" : "none"};
  background-color: ${({ $active }) => ($active ? "#fff" : "#f3f3f3")};
  border-bottom: ${({ $active }) =>
    $active ? "1px solid #fff" : "1px solid #c4c4c4"};
  margin-bottom: -1px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ $active }) => !$active && "#ebebeb"};
  }
`;

const StyledEditorsWrapper = styled.div`
  background-color: #fff;
  text-align: center;
  padding: 72px 0 96px;
  position: relative;
`;

const StyledDemoPreview = styled(Heading)`
  display: inline-block;
  margin-right: 16px;
  font-size: 24px;
  line-height: 32px;
`;

const StyledDemoPreviewButton = styled.button`
  font-size: 23px;
  line-height: 18px;
  font-weight: 700;
  background-color: #444;
  color: #fff;
  padding: 8px 10px;
  border-radius: 3px;
  border: none;
  cursor: pointer;
`;

const StyledEditorsItem = styled.div`
  width: 100%;
  height: 704px;
  margin-top: 42px;
  padding: 12px;
  border: 1px solid #ccc;
`;

export {
  StyledEditorsSection,
  StyledEditorsHeading,
  StyledEditorsTabsWrapper,
  StyledEditorsTab,
  StyledEditorsWrapper,
  StyledDemoPreview,
  StyledDemoPreviewButton,
  StyledEditorsItem,
};
