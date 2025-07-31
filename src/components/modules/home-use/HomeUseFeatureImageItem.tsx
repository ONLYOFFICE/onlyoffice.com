import {
  StyledFeatureImageItemContent,
  StyledFeatureImageItemText,
  StyledFeatureImageItemLink,
  StyledFeatureList,
  StyledFeatureListItem,
  StyledClientLogos,
  StyledClientLogosItem,
  StyledFeatureImageItemBtns,
} from "./HomeUseFeatureImageItem.styled";
import { IHomeUseFeatureImageItem } from "./HomeUseFeatureImageItem.types";
import { ContentImage } from "../../widgets/ContentImage";
import { Heading } from "@src/components/ui/Heading";
import { Button } from "@src/components/ui/Button";
import { DownloadButton } from "@src/components/ui/DownloadButton";

const HomeUseFeatureImageItem = ({
  id,
  className,
  heading,
  text,
  links,
  contentWidth,
  image,
  position,
  items,
  logos,
  buttons,
  justifyContent,
  downloadButtons,
  alignItems,
  marginTop,
  displaytabletS,
}: IHomeUseFeatureImageItem) => {
  return (
    <ContentImage
      id={id}
      className={className}
      contentWidth={contentWidth}
      position={position}
      justifyContent={justifyContent}
      alignItems={alignItems}
      marginTop={marginTop}
      displaytabletS={displaytabletS}
      image={{
        url: image.url,
        url2x: image.url2x,
        height: image.height,
        width: image.width,
      }}
    >
      <StyledFeatureImageItemContent>
        <Heading level={2}>{heading}</Heading>
        <StyledFeatureImageItemText>{text}</StyledFeatureImageItemText>
        {logos && (
          <StyledClientLogos>
            {logos.map((logo, index) => (
              <StyledClientLogosItem key={index} $logo={logo} />
            ))}
          </StyledClientLogos>
        )}
        <StyledFeatureList>
          {items.map((item, index) => (
            <StyledFeatureListItem key={index}>
              {item.label}
            </StyledFeatureListItem>
          ))}
        </StyledFeatureList>
        <StyledFeatureImageItemBtns>
          {buttons?.map(({ href, label }, index) => (
            <Button
              as="a"
              key={index}
              href={href}
              variant="secondary"
              className={className}
            >
              {label}
            </Button>
          ))}
          {downloadButtons?.map(({ href, platform, variant }, index) => (
            <DownloadButton
              key={index}
              href={href}
              platform={platform}
              variant={variant}
            />
          ))}
          {links?.map(({ href, label, isExternal }, index) => (
            <StyledFeatureImageItemLink
              key={index}
              href={href}
              fontSize="16px"
              lineHeight="26px"
              color="#444444"
              textUnderline
              target={isExternal ? "_blank" : undefined}
            >
              {label}
            </StyledFeatureImageItemLink>
          ))}
        </StyledFeatureImageItemBtns>
      </StyledFeatureImageItemContent>
    </ContentImage>
  );
};

export { HomeUseFeatureImageItem };
