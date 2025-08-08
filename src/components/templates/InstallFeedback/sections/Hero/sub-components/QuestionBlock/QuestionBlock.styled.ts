import styled from "styled-components";
import { Heading } from "@src/components/ui/Heading";

const StyledQuestionBlock = styled.div`

`;

const StyledQuestionHeading = styled(Heading)`
  margin-bottom: 12px;
`;

const StyledQuestionList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 16px;
`;

const StyledQuestionItem = styled.li<{
  $columns: number;
}>`
  flex-basis: ${({ $columns }) => {
    if( $columns === 2) return "50%"
    if( $columns === 3) return "33.33%"
    return "100%"
  }};
`;

export {
  StyledQuestionBlock,
  StyledQuestionHeading,
  StyledQuestionList,
  StyledQuestionItem,
}