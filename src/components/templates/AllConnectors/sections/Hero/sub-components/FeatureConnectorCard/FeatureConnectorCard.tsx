import { useTranslation } from "next-i18next";
import {
  StyledFeatureConnectorCard,
  StyledFeatureConnectorCardImgWrapper,
  StyledFeatureConnectorCardImg,
  StyledFeatureConnectorCardBody,
  StyledFeatureConnectorCardHeader,
  StyledFeatureConnectorCardHeading,
} from "./FeatureConnectorCard.styled";
import { IFeatureConnectorCard } from "./FeatureConnectorCard.types";
import { Text } from "@src/components/ui/Text";
import { Heading } from "@src/components/ui/Heading";
import { Badge } from "@src/components/ui/Badge";

const FeatureConnectorCard = ({
  id,
  className,
  url,
  image: { bgColor: imgBgColor, url: imgUrl },
  heading,
  text,
  isNew,
}: IFeatureConnectorCard) => {
  const { t } = useTranslation("all-connectors");

  return (
    <StyledFeatureConnectorCard id={id} className={className} href={url}>
      <StyledFeatureConnectorCardImgWrapper $imgBgColor={imgBgColor}>
        <StyledFeatureConnectorCardImg $imgUrl={imgUrl} />
      </StyledFeatureConnectorCardImgWrapper>

      <StyledFeatureConnectorCardBody>
        <StyledFeatureConnectorCardHeader>
          <Text
            as="span"
            fontSize="12px"
            fontWeight={600}
            lineHeight="16px"
            letterSpacing="-0.04em"
            color="#444444"
            textTransform="uppercase"
          >
            {t("ConnectorFor")}
          </Text>
          <StyledFeatureConnectorCardHeading>
            <Heading level={4} label={heading} />
            {isNew && <Badge label={t("New")} />}
          </StyledFeatureConnectorCardHeading>
        </StyledFeatureConnectorCardHeader>

        <Text fontSize="13px" lineHeight="20px">
          {text}
        </Text>

        <Text
          as={"span"}
          className="feature-connector-card-more-info"
          fontSize="13px"
          lineHeight="20px"
          color="main"
          label={t("MoreInfo")}
          textDecoration="underline"
        />
      </StyledFeatureConnectorCardBody>
    </StyledFeatureConnectorCard>
  );
};

export { FeatureConnectorCard };
