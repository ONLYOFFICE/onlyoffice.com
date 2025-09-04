import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Container } from "@src/components/ui/Container";

const StyledContainer = styled(Container)`
  font-family: Arial, Helvetica, sans-serif;
  margin: 0 auto;
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 2px solid gray;
  background-color: #fff;
  border-radius: 2px;
  text-align: center;

  ul {
    list-style-type: disc;
    text-align: left;
    padding-left: 30px;

    li {
      margin: 0px;
      padding: 0px;
      font-size: 13px;
      line-height: 1.33em;
      text-align: left;
    }
  }
  @media ${device.mobile} {
    padding: 25px;
  }
`;

const StyledHeading = styled(Heading)`
  border-bottom: 1px solid #adb9ca;
  font-size: 32px;
  line-height: 1.10em;
  text-transform: uppercase;
`;

const StyledSubHeading = styled(Heading)`
  font-size: 20px;
  line-height: 1.33em;
  background-color: #eaeaea;
`;

const StyledText = styled(Text)`
  font-size: 13px;
  line-height: 1.33em;
  text-align: left;

  &.indent {
    text-indent: 20px;
  }
`;

export { StyledContainer, StyledHeading, StyledText, StyledSubHeading };
