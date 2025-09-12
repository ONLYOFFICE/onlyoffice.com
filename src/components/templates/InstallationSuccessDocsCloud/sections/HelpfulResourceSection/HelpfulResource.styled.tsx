import styled from "styled-components";
import { device } from "@src/utils/device";
import { Text } from "@src/components/ui/Text";
import { Container } from "@src/components/ui/Container";

import { getAssetUrl } from "@utils/getAssetUrl";
const ResourcesContainer = styled(Container)`
  text-align: center;
`;

const ResourcesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  padding: 48px 0 0;

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.mobile} {
    grid-template-columns: 1fr;
  }
`;

const ResourceCard = styled.div`
  background: #f9f9f9;
  border-radius: 4px;
  border: 1px solid #efefef;
  width: 100%;
  padding: 32px;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media ${device.tabletS} {
    padding: 32px;
  }
`;

const ResourceIcon = styled.div<{ $positionX: string }>`
  background-image: url(${getAssetUrl('/images/templates/installation-success-docs-cloud/resources/help-icons.svg')});
  background-repeat: no-repeat;
  background-size: auto 32px;
  background-position-x: ${(props) => props.$positionX};
  content: "";
  height: 32px;
  width: 32px;
`;

const ResourceText = styled(Text)`
  line-height: 1.5;
  font-size: 16px;
  margin: 0;
`;

export {
  ResourceText,
  ResourceIcon,
  ResourceCard,
  ResourcesContainer,
  ResourcesGrid,
};
