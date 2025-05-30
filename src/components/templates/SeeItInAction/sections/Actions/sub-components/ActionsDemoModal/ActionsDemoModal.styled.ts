import styled from "styled-components";

const StyledActionsDemoModal = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  overflow-y: scroll;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.5);
`;

const StyledActionsDemoContent = styled.div`
  width: 90vw;
  max-width: 790px;
  margin: 16px auto;
  padding: 20px;
  background-color: #fff;
  position: relative;
`;

const StyledActionsDemoPre = styled.pre`
  white-space: pre-wrap;
  border: 1px solid #e5e5e5;
  padding: 20px;
  margin: 1em 0px;
  color: #000;
  line-height: 1em;
`;

const StyledActionsDemoCloseBtn = styled.div`
  font-size: 24px;
  font-weight: 600;
  position: absolute;
  top: 0;
  right: 10px;
  z-index: 2;
  padding: 10px;
  cursor: pointer;
`

export {
  StyledActionsDemoModal,
  StyledActionsDemoContent,
  StyledActionsDemoPre,
  StyledActionsDemoCloseBtn
};