import styled from "styled-components";

const StyledCollaborationFeatureModal = styled.div`
  width: 100%;
  height: 708px;
  padding-bottom: 39px;
  background-color: rgba(0, 0, 0, 0.7);
  box-shadow: 0px 10px 70px 0px rgba(0, 0, 0, 0.3);
  position: relative;

  &:hover {
    cursor: pointer;

    > button {
      visibility: visible;
    }
  }
`;

const StyledCollaborationFeatureModalArrow = styled.button<{
  $type: "prev" | "next";
}>`
  cursor: pointer;
  visibility: hidden;
  position: absolute;
  width: 44px;
  height: 44px;
  top: 50%;
  left: ${({ $type }) => ($type === "prev" ? "0" : "unset")};
  right: ${({ $type }) => ($type === "next" ? "0" : "unset")};
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #999999;
  border: none;
  transition: visibility 0.2s ease;

  svg {
    path {
      fill: #ffffff;
    }
  }
`;

const StyledCollaborationFeatureModalPages = styled.ul`
  position: relative;
`;

const StyledCollaborationFeatureModalPage = styled.li<{
  $isActive: boolean;
}>`
  color: ${({ $isActive }) => ($isActive ? "#ffffff" : "#cccccc")};
  float: left;
  padding: 5px;
  margin-left: 6px;
`;

const StyledCollaborationFeatureModalClose = styled.button`
  background-color: transparent;
  border: none;
  color: #fff;
  display: block;
  font-size: 12px;
  font-weight: bold;
  margin-right: 10px;
  padding: 5px;
  text-align: center;
  float: right;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
`;

export {
  StyledCollaborationFeatureModal,
  StyledCollaborationFeatureModalArrow,
  StyledCollaborationFeatureModalPages,
  StyledCollaborationFeatureModalPage,
  StyledCollaborationFeatureModalClose,
};
