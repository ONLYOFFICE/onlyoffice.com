import { useState } from "react";
import { useTranslation } from "next-i18next";
import {
  StyledCertificateCard,
  StyledCertificateCardImageWrapper,
  StyledCertificateCardIcons,
  StyledCertificateCardViewBtn,
  StyledCertificateCardDownloadBtn,
  StyledCertificateCardContent,
  StyledCertificateCardItem,
} from "./CertificateCard.styled";
import { ICertificateCard } from "./CertificateCard.types";
import { ILocale } from "@src/types/locale";
import { formatDate } from "@src/utils/formatDate";
import { Tooltip } from "@src/components/ui/Tooltip";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";

const CertificateCard = ({
  locale,
  date,
  heading,
  blogUrl,
  product,
  imageUrl,
  index,
  handleClick,
}: ICertificateCard & ILocale) => {
  const { t } = useTranslation("certificates");

  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      <StyledCertificateCard>
        <StyledCertificateCardImageWrapper>
          <img src={imageUrl} alt={heading} />

          <StyledCertificateCardIcons $isFocused={isFocused}>
            <Tooltip
              id={`view-tooltip-${index}`}
              tabIndex={-1}
              float
              content={t("View")}
              place="bottom-start"
            >
              <StyledCertificateCardViewBtn
                onClick={() => handleClick?.(imageUrl, heading)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
            </Tooltip>

            <Tooltip
              id={`download-tooltip-${index}`}
              tabIndex={-1}
              float
              content={t("Download")}
              place="bottom-start"
            >
              <StyledCertificateCardDownloadBtn
                href={imageUrl}
                download={imageUrl}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
            </Tooltip>
          </StyledCertificateCardIcons>
        </StyledCertificateCardImageWrapper>

        <StyledCertificateCardContent>
          <StyledCertificateCardItem>
            <Text
              as="div"
              fontSize="13px"
              lineHeight="20px"
              letterSpacing="-0.01em"
              color="#666666"
              label={formatDate(date, locale)}
            />

            <Heading level={3} size={5}>
              {heading}{" "}
              <Link
                href={blogUrl}
                label={t("LearnDetails")}
                fontSize="14px"
                fontWeight={400}
                lineHeight="18px"
                color="main"
                textUnderline
                hover="underline-none"
              />
            </Heading>
          </StyledCertificateCardItem>

          <StyledCertificateCardItem>
            <Text
              as="div"
              fontSize="13px"
              fontWeight={600}
              lineHeight="18px"
              color="#aaaaaa"
              textTransform="uppercase"
              label={t("ProductSolution")}
            />

            <Link
              href={product.url}
              label={product.label}
              color="main"
              fontSize="14px"
              lineHeight="23px"
              textUnderline
              hover="underline-none"
            />
          </StyledCertificateCardItem>
        </StyledCertificateCardContent>
      </StyledCertificateCard>
    </>
  );
};

export { CertificateCard };
