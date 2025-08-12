import styled, { css } from "styled-components";
import { Heading } from "@src/components/ui/Heading";
import { ISubscribeItem } from "./SubscribeItem.types";

const StyledSubscribeItem = styled.div``;

const StyledSubscribeItemIcon = styled.div<{
  $iconUrl: string;
  $positionX?: string;
}>`
  margin-bottom: 16px;
  width: 64px;
  height: 64px;
  background-image: url(${(props) => props.$iconUrl});
  background-repeat: no-repeat;
  background-position-x: ${(props) => props.$positionX};
`;

const StyledSubscribeItemHeading = styled(Heading)<{
  $variant: ISubscribeItem["variant"];
}>`
  ${(props) =>
    props.$variant === "primary"
      ? css`
          margin-bottom: 10px;
        `
      : props.$variant === "secondary"
        ? css`
            margin-bottom: 8px;
            font-size: 16px;
            line-height: 21px;
          `
        : null}
`;

export {
  StyledSubscribeItem,
  StyledSubscribeItemIcon,
  StyledSubscribeItemHeading,
};
