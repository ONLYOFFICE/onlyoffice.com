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
  
  @media ${device.tabletS} {
    li a {
      padding: 22px 16px;
    }
  }

  @media ${device.mobile} {
    & ul {
      margin: 0 16px;
    }

    li a {
      padding: 16px;
    }
  }
`;

const StyledEditorsFeatures = styled(EditorsFeatures)`
  h3 + div span {
    margin: 8px 0;
  }

  @media screen and (max-width: 1023px) {
    div {
      & > div div:nth-of-type(2n) .sc-f-sfc {
        flex-direction: column-reverse;
      }

      .sc-f-sfc {
        flex-direction: column;

        & > div:first-of-type {
          flex-basis: auto;
          margin-left: 0;
        }

        & > div:last-of-type {
          flex-basis: 524px;
          width: 100%;

          & > div {
            background-size: auto 500px;
            padding-bottom: 500px;
          }
        }
      }
    }
  }

  @media ${device.tabletS} {
    div {
      & > div div:nth-of-type(2n+1) .sc-f-sfc {
        flex-direction: column-reverse;
      }

      .sc-f-sfc > div:last-of-type > div {
        background-size: contain;
      }
    }
  }

  @media ${device.mobile} {
    div .sc-f-sfc > div:last-of-type {
      flex-basis: 72.5vw;

      & > div {
        padding-bottom: 67.5vw;
      }
    }

    h3 + div span {
      margin: 4px 0;
    }
  }
`;

export {
  StyledEditorsTabs,
  StyledEditorsFeatures
}