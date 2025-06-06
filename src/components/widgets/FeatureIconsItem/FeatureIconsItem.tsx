import {
  StyledFeatureIconsItemContent,
  StyledFeatureIconsText,
  StyledFeatureIconsItemText,
  StyledFeatureIconsItemLink,
  StyledFeatureItemsWrapper,
  StyledFeatureIconsButton,
  StyledFeatureItem
} from "./FeatureIconsItem.styled";
import { IFeatureIconsItem } from "./FeatureIconsItem.types";
import { ContentImage } from "../ContentImage";
import { Heading } from "@src/components/ui/Heading";
import { Trans, useTranslation } from "next-i18next";

const FeatureIconsItem = ({
  id,
  className,
  heading,
  buttons,
  text,
  links,
  contentWidth = 448,
  image,
  position,
  connectorsItems,
  connectorsHeading,
  connectorsSubheading,
}: IFeatureIconsItem) => {
  return (
    <div>
      {connectorsHeading && (
        <Heading level={2} label={connectorsHeading} textAlign="center" />
      )}
      {connectorsSubheading && (
        <StyledFeatureIconsText style={{ textAlign: "center", marginBottom: "16px" }}>
            {connectorsSubheading}
        </StyledFeatureIconsText>
      )}
      {connectorsItems?.length ? (
        <>
          <StyledFeatureItemsWrapper>
            {connectorsItems.map(({ image, label }, index) => (
              <StyledFeatureItem key={index}>
                <img
                  src={image.url}
                  style={{
                    height: "56px",
                    width: "56px",
                    objectFit: "none",
                    objectPosition: `${image.positionX ?? "0px"} center`,
                    display: "block",
                  }}
                  alt={label}
                />
                <span>{label}</span>
              </StyledFeatureItem>
            ))}
          </StyledFeatureItemsWrapper>
        </>
      ) : null}
      
      <ContentImage
        id={id}
        className={className}
        contentWidth={contentWidth}
        position={position}
        image={{
          url: image.url,
          url2x: image.url2x,
          width: image.width,
          height: image.height,
        }}
      >
        <StyledFeatureIconsItemContent>
          <Heading level={3} label={heading} />
          <StyledFeatureIconsItemText color="#666666">
            {text?.length > 0 && (
              <ul style={{ paddingLeft: "20px", marginBottom: "24px" }}>
                {text.map((item, index) => (
                  <li className="featureList" key={index} style={{ marginBottom: "12px" }}>
                    <Trans
                      i18nKey={item.label}
                      components={[
                        <strong key="bold" />,
                        ...((item.links ?? []).map((link, i) => (
                          <StyledFeatureIconsItemLink
                            key={i}
                            href={link.href}
                            target={link.isExternal ? "_blank" : undefined}
                            rel={link.isExternal ? "noopener noreferrer" : undefined}
                          />
                        )))
                      ]}
                    />
                  </li>
                ))}
              </ul>
            )}
          </StyledFeatureIconsItemText>
          {links?.map(({ href, label, isExternal }, index) => (
            <StyledFeatureIconsItemLink
              key={index}
              href={href}
              fontSize="16px"
              lineHeight="26px"
              color="#ff6f3d"
              textUnderline
              hover="underline-none"
              target={isExternal ? "_blank" : undefined}
            >
              {label}
            </StyledFeatureIconsItemLink>
          ))}
        </StyledFeatureIconsItemContent>
      </ContentImage>
      {Array.isArray(buttons) && buttons.length > 0 && (
          <div style={{ display: "flex", gap: "16px", marginTop: "24px", flexWrap: "wrap", justifyContent: "center" }}>
          {buttons.map(({ label, href, isExternal, isPrimary }, index) => (
          <StyledFeatureIconsButton
            key={index}
            href={href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            isPrimary={isPrimary}
          >
            {label}
          </StyledFeatureIconsButton>
        ))}
      </div>
    )}
    </div>
  );
};

export { FeatureIconsItem };
