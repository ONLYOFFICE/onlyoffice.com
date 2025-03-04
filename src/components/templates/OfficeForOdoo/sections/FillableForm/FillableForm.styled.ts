import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Button } from "@src/components/ui/Button";

const StyledFillableFormHeader = styled.div`
  margin: 0 auto 56px;
  max-width: 700px;
  text-align: center;

  @media ${device.tablet} {
    margin: 0 auto 40px;
  }

  @media ${device.mobile} {
    margin: 0 auto 24px;
  }
`;

const StyledFillableFormHeading = styled(Heading)`
  display: inline;

  &:not(:last-child) {
    margin-right: 10px;

    @media ${device.mobile} {
      margin-right: 0;
      margin-bottom: 8px;
    }
  }

  @media ${device.mobile} {
    display: block;
  }
`;

const StyledFillableFormButton = styled(Button)`
  background-color: #6b4d65;

  &:hover {
    background-color: #6b4d65;
  }
`;

export {
  StyledFillableFormHeader,
  StyledFillableFormHeading,
  StyledFillableFormButton,
};
