import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Input } from "@src/components/ui/Input";
import { LoaderButton } from "@src/components/ui/LoaderButton";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledHeroHeading = styled(Heading)`
  font-weight: normal;
  text-transform: uppercase;
`;

const StyledPortalName = styled(Text)`
  color: #FF6F3D;
  padding: 12px 0;
`;

const StyledCreatePortal = styled(Text)`
  margin: 12px 0;

  span {
    font-weight: bold;
  }

  .numeral {
    color: #3D4A6B;
    font-size: 15px;
    padding-right: 5px;
  }

  &.supportLink {
    margin-top: 32px;
  }
`;

const StyledHeroForm = styled.form`
  /* display: flex; */
  display: none;
  flex-direction: column;
  gap: 25px;
`;

const StyledHeroInputTextBlock = styled.div`
`;

const StyledHeroInputText = styled(Input)`
  width: 100%;
  max-width: 432px;
  height: 36px;

  @media ${device.tablet} {
    max-width: 100%;
  }

  & input {
    padding: 0 16px;
  }
`;

const StyledHeroLoaderButton = styled(LoaderButton)`
  width: fit-content;
`;

const StyledHeroLoaderButtonWrapper = styled.div`
  position: relative;
`;

const StyledHeroLoaderStatusLoadText = styled(Text)`
  position: absolute;
  top: -20px;
  left: 0;
`;

const StyledHeroPopupStatus = styled.div`
  position: relative;
  padding: 32px;
  box-shadow: 0px 3px 9px rgba(85, 85, 85, 0.1);
  border-radius: 5px;
`;

const StyledHeroPopupWrapper = styled.div`
  max-width: 544px;
  margin: 0 auto;
`;

const StyledHeroCrossButton = styled.div`
  width: 20px;
  height: 20px;
  background-image: url(${getAssetUrl('/images/icons/close.svg')});
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
`;

const StyledHeroStatusHeading = styled(Heading)`
  margin-bottom: 17px;
`;

const StyledHeroStatusText = styled(Text)`
  margin-bottom: 17px;
`;

const StyledHeroPopupCloseButton = styled(Button)``;

export {
  StyledHeroHeading,
  StyledPortalName,
  StyledCreatePortal,
  StyledHeroForm,
  StyledHeroInputTextBlock,
  StyledHeroInputText,
  StyledHeroLoaderButtonWrapper,
  StyledHeroLoaderStatusLoadText,
  StyledHeroLoaderButton,
  StyledHeroPopupStatus,
  StyledHeroPopupWrapper,
  StyledHeroCrossButton,
  StyledHeroStatusHeading,
  StyledHeroStatusText,
  StyledHeroPopupCloseButton,
}