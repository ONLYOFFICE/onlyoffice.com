import { Link } from "@src/components/ui/Link";
import styled from "styled-components";

const ButtonRow = styled.div`
  display: flex;
  gap: 16px;
`; 

const CardButton = styled(Link)`
  display: block;
  width: 100%;
`; 

export { ButtonRow, CardButton };
