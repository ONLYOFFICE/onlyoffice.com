import { useTranslation } from "next-i18next";
import {
  StyledConnectorCard,
  StyledConnectorCardImgWrapper,
  StyledConnectorCardImg,
  StyledConnectorCardBody,
  StyledConnectorCardHeading,
  StyledConnectorCardText,
  StyledConnectorCardInfo,
} from "./ConnectorCard.styled";
import { IConnectorCard } from "./ConnectorCard.types";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";
import { Button } from "@src/components/ui/Button";
import { Badge } from "@src/components/ui/Badge";

const ConnectorCard = ({
  id,
  className,
  idName,
  imgBgColor,
  imgUrl,
  name,
  text,
  moreInfoUrl,
  vendor,
  developerWebsiteName,
  developerWebsiteUrl,
  isPaid,
  getItNowUrl,
  isNew,
}: IConnectorCard) => {
  const { t } = useTranslation("all-connectors");

  return (
    <StyledConnectorCard id={id} className={className}>
      <StyledConnectorCardImgWrapper $imgBgColor={imgBgColor}>
        <StyledConnectorCardImg $imgUrl={imgUrl} />
      </StyledConnectorCardImgWrapper>

      <StyledConnectorCardBody>
        <StyledConnectorCardHeading>
          <Heading level={4} label={name} color="#444444" />
          {isNew && <Badge label={t("New")} />}
        </StyledConnectorCardHeading>

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

        <Button
          as="a"
          id={idName ? `${idName}-get-it-now` : undefined}
          className={`connector-card-btn ${getItNowUrl ? "" : "hidden"}`}
          href={getItNowUrl}
          variant="tertiary"
          label={t("GetItOn")}
          target="_blank"
        />
      </StyledConnectorCardBody>
    </StyledConnectorCard>
  );
};

export { ConnectorCard };
