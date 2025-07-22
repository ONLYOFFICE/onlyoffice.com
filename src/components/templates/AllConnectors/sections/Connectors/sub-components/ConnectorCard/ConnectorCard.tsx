import { useTranslation } from "next-i18next";
import {
  StyledConnectorCard,
  StyledConnectorCardImgWrapper,
  StyledConnectorCardImg,
  StyledConnectorCardBody,
  StyledConnectorCardHeadingFor,
  StyledConnectorCardText,
  StyledConnectorCardInfo,
  StyledConnectorCardButton,
  StyledConnectorCardHeadingName,
  StyledBadge
} from "./ConnectorCard.styled";
import { IConnectorCard } from "./ConnectorCard.types";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";


const ConnectorCard = ({
  id,
  className,
  idName,
  image: { url: imgUrl, bgColor: imgBgColor },
  name,
  text,
  moreInfoUrl,
  vendor,
  developerWebsiteName,
  developerWebsiteUrl,
  isPaid,
  getItNowUrl,
  isNew,
  isWopi,
}: IConnectorCard) => {
  const { t } = useTranslation("all-connectors");

  return (
    <StyledConnectorCard id={id} className={className}>
      <StyledConnectorCardImgWrapper $imgBgColor={imgBgColor}>
        <StyledConnectorCardImg $imgUrl={imgUrl} />
        <StyledConnectorCardHeadingFor>
          {isWopi ? (
            <StyledConnectorCardHeadingName level={4} color="#444444" >
              {t("WOPIConnectorFor")}
            </StyledConnectorCardHeadingName>
          ) : (
            <StyledConnectorCardHeadingName level={4} color="#444444" >
              {t("ConnectorFor")}
            </StyledConnectorCardHeadingName>
          )}
          <Heading level={4} color="#444444" >
            {name}
          </Heading>
        </StyledConnectorCardHeadingFor>
        {isNew && <StyledBadge label={t("New")} />}
      </StyledConnectorCardImgWrapper>

      <StyledConnectorCardBody>

        <StyledConnectorCardText>
          <Text fontSize="13px" lineHeight="21px" label={text} />

          {moreInfoUrl && (
            <Link
              id={idName ? `${idName}-more-info` : undefined}
              href={moreInfoUrl}
              label={t("MoreInfo")}
              target={moreInfoUrl.includes("https://") ? "_blank" : undefined}
              fontSize="13px"
              lineHeight="21px"
              color="main"
              textUnderline
              hover="underline-none"
            />
          )}
        </StyledConnectorCardText>

        <StyledConnectorCardInfo>
          <div>
            {t("Vendor")} {vendor}
          </div>
          <div>
            {t("DeveloperWebsite")}{" "}
            <Link
              id={idName ? `${idName}-dev-website` : undefined}
              href={developerWebsiteUrl}
              label={developerWebsiteName}
              target={
                developerWebsiteUrl.includes("https://") ? "_blank" : undefined
              }
              color="main"
              textUnderline
              hover="underline-none"
            />
          </div>
          <div>
            {t("Price")}{" "}
            {isPaid ? (
              <Text as="span" label={t("Paid")} textTransform="uppercase" />
            ) : (
              <Text as="span" label={t("Free")} textTransform="uppercase" />
            )}
          </div>
        </StyledConnectorCardInfo>

        <StyledConnectorCardButton
          forwardedAs="a"
          id={idName ? `${idName}-get-it-now` : undefined}
          href={getItNowUrl}
          variant="tertiary"
          label={t("GetItOn")}
          target="_blank"
          $isHidden={getItNowUrl ? false : true}
        />
      </StyledConnectorCardBody>
    </StyledConnectorCard>
  );
};

export { ConnectorCard };
