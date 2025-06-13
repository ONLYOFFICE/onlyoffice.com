import styled from "styled-components";

const StyledLearnMoreButton = styled.button`
  display: block;
  margin: 0 auto;
  border: none;
  background-color: transparent;
  text-decoration: underline;
  font-size: 14px;
  line-height: 22px;
  color: #444444;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
`;

const StyledLearnMoreWrapper = styled.div`
  max-width: 736px;
  margin: 0 auto;
  border: 1px solid #e2e2e2;
  padding: 24px;
  background-color: #ffffff;
`;

const StyledLearnMoreTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const StyledLearnMoreType = styled.span`
  display: inline-flex;
  padding: 8px 16px;
  font-size: 16px;
  line-height: 24px;
  background-color: #f9f9f9;
`;

const StyledLearnMoreCloseButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;


export {
  StyledLearnMoreButton,
  StyledLearnMoreWrapper,
  StyledLearnMoreTop,
  StyledLearnMoreType,
  StyledLearnMoreCloseButton,
};
