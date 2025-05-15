import styled from "styled-components";
import { device } from "@src/utils/device";
import { Link } from "@src/components/ui/Link";
import { Container } from "@src/components/ui/Container";

const StyledResourcesContent = styled(Container)`
  > div {
    padding: 12px 0 0;
  }
`;

const StyledResourcesListItem = styled.div`
  border-bottom: 1px solid rgba(204, 204, 204, 0.6);
  color: #333333;
  font-size: 14px;
  line-height: 1.6em;
  padding: 20px 0 22px;

  @media ${device.mobile} {
    padding: 18px 0 20px;
  }
`;

const StyledResourcesListItemLink = styled(Link)`
  white-space: nowrap;
  &:after {
    background-image: url(/images/templates/installation-success-workspace/resources/arrow-red.svg);
    background-repeat: no-repeat;
    background-size: contain;
    content: " ";
    display: inline-block;
    height: 12px;
    margin: 0px 0 -1px 9px;
    width: 7px;
  }
`;

export {
  StyledResourcesContent,
  StyledResourcesListItem,
  StyledResourcesListItemLink,
};
