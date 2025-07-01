import styled, { css } from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";
import { Input } from "@src/components/ui/Input";

const StyledWhitepapersSection = styled(Section)`
  padding: 16px 0 0 0;
  position: sticky;
  top: 54px;

  @media ${device.tablet} {
    top: 32px;
  }

  @media ${device.mobile} {
    padding: 32px 0 0 0;
    top: 16px;
  }
`;

const StyledWhitepapersInputWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #666;

  @media ${device.mobile} {
    flex-direction: column;
    height: auto;
  }
`;

const StyledWhitepapersInputLeft = styled.div``;

const StyledWhitepapersInputSubtitle = styled(Heading)`
  padding-right: 8px;
  border-right: 1px solid #aaa;

  @media ${device.mobile} {
    margin: 16px 0 12px;
    padding-right: 0;
    border-right: none;
  }
`;

const StyledWhitepapersInputRight = styled.div`
  position: relative;
  flex-grow: 1;

  @media ${device.mobile} {
    width: 100%;
  }
`;

const StyledWhitepapersLabel = styled.label<{
  $isActive: boolean
}>`
  color: #666;
  position: absolute;
  top: 50%;
  left: 15px;
  transition-duration: 300ms;

  transform: ${({ $isActive }) =>
    $isActive
      ? css`translate(-10%, -125%) scale(0.8)`
      : css`translate(0, -50%)`
  };
`;

const StyledWhitepapersInput = styled(Input)`
  background-color: transparent;
  border: none;

  input {
    color: #fff;
  }

  path {
    fill: #aaa;
  }
`;

export {
  StyledWhitepapersSection,
  StyledWhitepapersInputWrapper,
  StyledWhitepapersInputLeft,
  StyledWhitepapersInputSubtitle,
  StyledWhitepapersInputRight,
  StyledWhitepapersLabel,
  StyledWhitepapersInput,
};