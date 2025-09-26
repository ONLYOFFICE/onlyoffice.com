import styled from "styled-components";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Section } from "@src/components/ui/Section";
import { device } from "@src/utils/device";
import { getAssetUrl } from "@src/utils/getAssetUrl";

const StyledMCP = styled(Container)`
  border-radius: 9px;
  background: radial-gradient(
    130.56% 442.1% at 1.16% -1.33%,
    rgba(255, 121, 0, 0.3) 0%,
    rgba(255, 135, 135, 0) 100%
  );
  display: grid;
  grid-template-columns: 500px 480px;
  align-items: center;
  justify-content: space-between;
  padding: 0px;
  position: relative;
  z-index: 0;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 1px;
    background: linear-gradient(
      113.88deg,
      #ff7849 1.27%,
      rgba(68, 68, 68, 0) 71.29%
    );
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    z-index: -1;
  }

  @media ${device.desktop} {
    grid-template-columns: 50% 50%;
    margin: 0 48px;
    width: calc(100% - 96px);
  }

  @media ${device.tablet} {
    grid-template-columns: 1fr;
    margin: 0 40px;
    width: calc(100% - 80px);
  }

  @media ${device.mobile} {
    margin: 0 16px;
    width: calc(100% - 32px);
  }
`;

const StyledLeftArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 48px 0 48px 48px;

  > a {
    width: fit-content;

    @media ${device.mobile} {
      width: 100%;
    }
  }

  @media ${device.tablet} {
    padding: 48px 48px 24px;
  }

  @media ${device.mobile} {
    padding: 16px 16px 24px;
  }
`;

const StyledHeading = styled(Heading)`
  margin-bottom: -8px;

  &:before {
    content: "";
    display: block;
    width: 24px;
    height: 24px;
    background-image: url(${getAssetUrl("/images/templates/docspace-developer/mcp/spark.svg")});
    margin-bottom: 24px;
  }
`;

const StyledRightArea = styled.div`
  content: "";
  background-image: url(${getAssetUrl("/images/templates/docspace-developer/mcp/robot.svg")});
  background-size: contain;
  background-position: center;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;

  @media ${device.tablet} {
    height: 430px;
  }

  @media ${device.mobile} {
    height: 286px;
  }
`;

const StyledSection = styled(Section)`
border: 1px solid #333333E5;
  @media ${device.tablet} {
    background:
    radial-gradient(
      139.02% 214.67% at 100.36% -1.92%,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    linear-gradient(0deg, #181c1e, #181c1e);
  }
`;

export {
  StyledMCP,
  StyledHeading,
  StyledLeftArea,
  StyledRightArea,
  StyledSection,
};
