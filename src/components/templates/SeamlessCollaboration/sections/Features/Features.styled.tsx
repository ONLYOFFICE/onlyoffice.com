import styled from "styled-components";
import { device } from "@src/utils/device";
import { EditorsTabs } from "@src/components/modules/editors/EditorsTabs";
import { EditorsFeatures } from "@src/components/modules/editors/EditorsFeatures";

const StyledEditorsTabs = styled(EditorsTabs)`
  & > div {
    background-color: #FFFFFF;
  }

  li a {
    padding: 25px 16px;
  }

  @media screen and (max-width: 1120px) {
    & ul {
      justify-content: space-around;
      width: 1120px;
    }
  }

  @media ${device.tablet} {
    & ul {
      margin: 0 40px;
      width: auto;
    }
  }

  @media ${device.mobile} {
    & ul {
      margin: 0 16px;
    }
  }
`;

const StyledEditorsFeatures = styled(EditorsFeatures)`
background-color: yellow;
`;

export {
  StyledEditorsTabs,
  StyledEditorsFeatures
}