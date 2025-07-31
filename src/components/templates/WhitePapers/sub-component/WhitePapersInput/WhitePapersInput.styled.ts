import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";
import { Input } from "@src/components/ui/Input";

const StyledWhitePapersSection = styled(Section)`
  padding: 16px 0 0 0;
  position: sticky;
  top: 54px;
  z-index: 1;

  @media ${device.tablet} {
    top: 32px;
  }

  @media ${device.mobile} {
    padding: 32px 0 0 0;
    top: 16px;
  }
`;

const StyledWhitePapersInputWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #666;

  @media ${device.mobile} {
    flex-direction: column;
    height: auto;
  }
`;

const StyledWhitePapersInputLeft = styled.div``;

const StyledWhitePapersInputSubtitle = styled(Heading)`
  padding-right: 8px;
  border-right: 1px solid #aaa;

  @media ${device.mobile} {
    margin: 16px 0 12px;
    padding-right: 0;
    border-right: none;
  }
`;

const StyledWhitePapersInputRight = styled.div`
  position: relative;
  flex-grow: 1;

  @media ${device.mobile} {
    width: 100%;
  }
`;

const StyledWhitePapersInput = styled(Input)`
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
  StyledWhitePapersSection,
  StyledWhitePapersInputWrapper,
  StyledWhitePapersInputLeft,
  StyledWhitePapersInputSubtitle,
  StyledWhitePapersInputRight,
  StyledWhitePapersInput
};