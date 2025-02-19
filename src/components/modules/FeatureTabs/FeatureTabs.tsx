import {
  StyledFeatureTabsHeading,
  StyledFeatureTabsLinkWrapper,
} from "./FeatureTabs.styled";
import { IFeatureTabs } from "./FeatureTabs.types";
import { Container } from "@src/components/ui/Container";
import { Link } from "@src/components/ui/Link";
import { ImageTabs } from "@src/components/widgets/ImageTabs";

const FeatureTabs = ({
  id,
  className,
  heading,
  linkId,
  linkName,
  linkUrl,
  items,
  position = "left",
}: IFeatureTabs) => {
  return (
    <div id={id} className={className}>
      <Container>
        {heading && (
          <StyledFeatureTabsHeading level={2} size={2} textAlign="center">
            {heading}
          </StyledFeatureTabsHeading>
        )}

        <ImageTabs items={items} position={position} />

        {linkName && (
          <StyledFeatureTabsLinkWrapper>
            <Link
              id={linkId}
              href={linkUrl}
              label={linkName}
              fontSize="16px"
              lineHeight="26px"
              color="main-color"
              textUnderline
              hover="text-underline-none"
            />
          </StyledFeatureTabsLinkWrapper>
        )}
      </Container>
    </div>
  );
};

export { FeatureTabs };
