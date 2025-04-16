import { useTranslation } from "next-i18next";
import {
  StyledCertificateCard,
  StyledCertificateCardImage,
  StyledCertificateCardContent,
  StyledCertificateCardDate,
  StyledCertificateCardHeading,
  StyledCertificateCardLearnMore,
  StyledCertificateCardProduct,
  StyledCertificateCardProductLink,
  StyledCertificateCardImageWrapper,
  StyledCertificateCardImageIconWrapper,
  StyledCertificateCardImageIcon,
} from "./CertificateCard.styled";
import { ICertificate } from "@src/components/templates/Certificates/sections/Certificate/Certificate.types";
import { Tooltip } from "@src/components/ui/Tooltip";
import { CertificateModal } from "../CertificateModal";
import { useState } from "react";

const CertificateCard = ({ image, date, heading, product }: ICertificate) => {
  const { t } = useTranslation("certificates");
  const [isOpen, setIsOpen] = useState(false);
  const [certificateImage, setCertificateImage] = useState({
    url: "",
    height: 0,
  });

  const handleCertificateView = () => {
    setCertificateImage(image);
    setIsOpen(true);
  };

  return (
    <>
      <StyledCertificateCard>
        <StyledCertificateCardImageWrapper>
          <StyledCertificateCardImage
            $imgUrl={image.url}
            $imgHeight={image.height}
          />
          <StyledCertificateCardImageIconWrapper className="image-icons">
            <Tooltip id="view-tooltip" content={t("View")} place="bottom-end">
              <StyledCertificateCardImageIcon
                className="view"
                onClick={handleCertificateView}
              />
            </Tooltip>
            <Tooltip
              id="download-tooltip"
              content={t("Download")}
              place="bottom-start"
            >
              <StyledCertificateCardImageIcon
                className="download"
                href={image.url}
                download={image.url}
              />
            </Tooltip>
          </StyledCertificateCardImageIconWrapper>
        </StyledCertificateCardImageWrapper>
        <StyledCertificateCardContent>
          <StyledCertificateCardDate label={date} size={4} />
          <StyledCertificateCardHeading level={3} size={5}>
            {heading.label}{" "}
            <StyledCertificateCardLearnMore
              href={heading.link}
              label={t("LearnDetails")}
              color="main"
              textUnderline
              hover="underline-none"
            />
          </StyledCertificateCardHeading>
          <StyledCertificateCardProduct label={t("ProductSolution")} />
          <StyledCertificateCardProductLink
            href={product.link}
            label={product.label}
            color="main"
            textUnderline
            hover="underline-none"
          />
        </StyledCertificateCardContent>
      </StyledCertificateCard>
      <CertificateModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        image={certificateImage}
      />
    </>
  );
};

export { CertificateCard };
