import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

const StyledCollabWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 45px;
`;

const StyledCollabLeft = styled.div`
  flex-grow: 1;
  justify-items: flex-end;
  margin-top: 120px;
`;

const StyledCollabHeading = styled(Heading)`
  max-width: 270px;
  margin-bottom: 30px;
`;
const StyledCollabText = styled(Text)`
  max-width: 270px;
`;

const StyledCollabRight = styled.div`
  width: 1150px;
  height: 650px;
  background-image: url("/images/templates/office-for-ios/collab/collab.webp");
  background-size: auto 830px;
  background-repeat: no-repeat;
`;

export {
  StyledCollabWrapper,
  StyledCollabLeft,
  StyledCollabHeading,
  StyledCollabText,
  StyledCollabRight,
};
