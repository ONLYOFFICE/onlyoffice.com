import {
  StyledFeatureIconsItemContent,
  StyledFeatureIconsItemText,
  StyledFeatureIconsItemLink,
  StyledFeatureItemsWrapper,
  StyledFeatureIconsButton,
  StyledFeatureItem,
  StyledQuote,
  StyledQuoteText
} from "./FeatureIconsItem.styled";
import { IFeatureIconsItem } from "./FeatureIconsItem.types";
import { ContentImage } from "../ContentImage";
import { Heading } from "@src/components/ui/Heading";
import { Trans, useTranslation } from "next-i18next";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";
import { useRouter } from "next/router";

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
  showButtonsOutside,
  quote
}: IFeatureIconsItem) => {
  const { t } = useTranslation();
  const { locale = "en" } = useRouter();

  return (
    <div>
      {connectorsHeading && (
        <Heading level={2} label={connectorsHeading} textAlign="center">
          <Trans
            i18nKey={connectorsHeading}
            components={[<Text as="span" color="#FF6F3D" key="0" />]}
            />
        </Heading>
      )}
      {connectorsSubheading && (
        <Text>{connectorsSubheading}</Text>
      )}
      {connectorsItems?.length ? (
        <>
          <StyledFeatureItemsWrapper>
            {connectorsItems.map(({ image, label }, index) => (
              <StyledFeatureItem $locale={locale} key={index}>
                <img
                  src={image.url}
                  style={{
                    height: image.height, 
                    width: image.width,
                    objectFit: "none",
                    objectPosition: `${image.positionX ?? "0px"} ${image.positionY ?? "0px"}`,
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
              <ul style={{ marginBottom: "24px" }}>
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
          {!showButtonsOutside && Array.isArray(buttons) && buttons.length > 0 && (
            <div className="buttons">
              {buttons.map(({ label, href, isExternal, isPrimary, isLink, isServer, links }, index) =>
                isLink && Array.isArray(links) ? (
                   <Text as="div" key={index}>
                      <Trans
                        i18nKey={label}
                        components={links.map((link, i) => (
                          <Link
                            key={i}
                            href={link.href}
                            target={link.isExternal ? "_blank" : undefined}
                            rel={link.isExternal ? "noopener noreferrer" : undefined}
                            style={{ color: "#ff6f3d", textDecoration: "underline" }}
                          />
                        ))}
                      />
                    </Text>
                  ) : (
                    <StyledFeatureIconsButton
                      key={index}
                      variant="secondary"
                      as={"a"}
                      href={href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      $isPrimary={isPrimary}
                      $isLink={isLink}
                      $isServer={isServer}
                    >
                      {label}
                  </StyledFeatureIconsButton>
                )
              )}
            </div>
          )}
        </StyledFeatureIconsItemContent>
      </ContentImage>
      {quote && (
        <StyledQuote>
          {quote.icon && (
            <img
              src={quote.icon}
              alt="Icon"
              style={{ width: "120px", height: "62px" }}
            />
          )}
          <StyledQuoteText>{t(quote.text)}</StyledQuoteText>
          {quote.link ? (
            <Link
              href={quote.link.href}
              target={quote.link.isExternal ? "_blank" : undefined}
              rel={quote.link.isExternal ? "noopener noreferrer" : undefined}
              fontSize="16px"
              fontWeight={600}
              lineHeight="26px"
              color="#666666"
              style={{ textDecoration: "none" }}
            >
              {t(quote.author)}
            </Link>
          ) : (
            <Text
              fontSize="16px"
              fontWeight={600}
              lineHeight="26px"
              color="#666666"
              textAlign="center"
            >
              {t(quote.author)}
            </Text>
          )}

          <Text
            fontSize="12px"
            lineHeight="19px"
            color="#aaaaaa"
            textAlign="center"
          >
            {t(quote.info)}
          </Text>
        </StyledQuote>
      )}
    </div>
  );
};

export { FeatureIconsItem };
