import { device } from "@src/utils/device";
import styled from "styled-components";
import { Link } from "@src/components/ui/Link";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledLogoBlockWrapper = styled.div`
  display: grid;
  gap: 112px;

  @media ${device.mobile} {
    gap: 40px;
  }
`;

const StyledLogoBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-top: 40px;

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.mobile} {
    grid-template-columns: 1fr;
  }
`;

const StyledLogoBlockItem = styled(Link)`
  display: block;
  box-shadow: 0 7px 25px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s;
  position: relative;
  border: 1px solid #f5f5f5;
  background-color: #fff;

  &:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);

    @media ${device.mobile} {
      box-shadow: none;
    }
  }

  @media ${device.mobile} {
    border-radius: none;
    box-shadow: none;
    border: none;
    background-color: transparent;
  }
`;

const StyledLogoBlockItemTop = styled.div`
  width: 100%;
  height: 130px;
  background-image: url(${getAssetUrl('/images/templates/press-downloads/logo/mask.png')});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;

  @media ${device.mobile} {
    height: 56vw;
    background-size: 100% auto;
  }
`;

const StyledLogoBlockItemLogo = styled.div<{
  $logo: string;
  $isLightLogo?: boolean;
}>`
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: url(${({ $logo }) => $logo});
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${({ $isLightLogo }) =>
    $isLightLogo ? "rgba(0,0,0,0.3)" : "none"};

  @media ${device.mobile} {
    border: solid 1px #e5e5e5;
    background-size: 100% auto;
  }
`;

const StyledLogoBlockItemBottom = styled.div`
  display: grid;
  gap: 11px;
  padding: 32px 32px 37px;
  justify-items: center;

  @media ${device.mobile} {
    padding: 32px 0 0;
    justify-items: start;
  }
`;

const StyledLogoBlockItemLogoTitle = styled.span`
  font-weight: bold;
  font-size: 14px;
  line-height: 133%;

  @media ${device.mobile} {
    font-size: 16px;
  }
`;

const StyledLogoBlockItemDownloadFormats = styled.span`
  font-size: 13px;
  line-height: 150%;
  color: #aaaaaa;
`;

const StyledBrandbookBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin: 40px 0;

  @media ${device.mobile} {
    grid-template-columns: 1fr;
  }
`;

const StyledBrandbookBlockItem = styled.div<{ $src: string }>`
  padding-bottom: 70.75%;
  background-image: url(${({ $src }) => $src});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  box-shadow: 0px 7px 15px rgba(85, 85, 85, 0.1);
`;

const StyledBrandbookBlockBtns = styled.div`
  display: flex;
  gap: 16px;
`;

export {
  StyledLogoBlockWrapper,
  StyledLogoBlock,
  StyledLogoBlockItem,
  StyledLogoBlockItemTop,
  StyledLogoBlockItemLogo,
  StyledLogoBlockItemBottom,
  StyledLogoBlockItemLogoTitle,
  StyledLogoBlockItemDownloadFormats,
  StyledBrandbookBlock,
  StyledBrandbookBlockItem,
  StyledBrandbookBlockBtns,
};
