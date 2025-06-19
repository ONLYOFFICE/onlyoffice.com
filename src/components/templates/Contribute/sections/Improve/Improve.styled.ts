import styled, { css } from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Link } from "@src/components/ui/Link";
import { Text } from "@src/components/ui/Text";

const StyledImproveHeading = styled(Heading)`
  margin-bottom: 56px;

  @media ${device.mobile} {
    margin-bottom: 24px;
  }
`;

const StyledImproveItems = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px 32px;
  margin-bottom: 56px;

  @media ${device.tabletS} {
    gap: 56px 32px;
  }

  @media ${device.mobile} {
    grid-template-columns: initial;
    gap: 24px;
    margin-bottom: 48px;
  }
`;

const StyledImproveText = styled(Text)`
  margin-bottom: 16px;

  @media ${device.tabletS} {
    margin-bottom: 24px;
  }

  @media ${device.mobile} {
    margin-bottom: 16px;
  }
`;

const StyledImproveSocialIcons = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  margin: 0 auto;
  max-width: 600px;

  @media ${device.mobile} {
    gap: 16px 24px;
  }
`;

const StyledImproveSocialIcon = styled.li`
  display: inline-flex;
`;

const BaseSocialIcon = css<{ $iconPosition: string }>`
  width: 24px;
  height: 24px;
  background-image: url("/images/templates/contribute/improve/social-icons.svg");
  background-repeat: no-repeat;
  background-position-x: ${(props) => props.$iconPosition};
  filter: grayscale(1);
  transition: filter 0.2s;

  &:hover {
    filter: grayscale(0);
  }
`;

const StyledImproveSocialButton = styled.button<{ $iconPosition: string }>`
  border: none;
  background-color: transparent;
  cursor: pointer;
  ${BaseSocialIcon};
`;

const StyledImproveSocialIconLink = styled(Link)<{ $iconPosition: string }>`
  display: inline-block;
  ${BaseSocialIcon};
`;

export {
  StyledImproveHeading,
  StyledImproveItems,
  StyledImproveText,
  StyledImproveSocialIcons,
  StyledImproveSocialIcon,
  StyledImproveSocialButton,
  StyledImproveSocialIconLink,
};
