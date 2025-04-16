import { useTranslation } from "next-i18next";
import { Modal } from "@src/components/ui/Modal";
import { ICertificate } from "./CertificateModal.types";
import {
  StyledCertificateCardImageIcon,
  StyledCertificateModal,
  StyledCertificateModalIconWrapper,
  StyledCertificateModalImage,
  StyledCertificateModalImageWrapper,
} from "./CertificateModal.styled";
import { Tooltip } from "@src/components/ui/Tooltip";

const CertificateModal = ({ isOpen, onClose, image }: ICertificate) => {
  const { t } = useTranslation("certificates");

  return (
    <Modal maxWidth="628px" isOpen={isOpen} onClose={onClose}>
      <StyledCertificateModal>
        <StyledCertificateModalImageWrapper>
          <StyledCertificateModalImage
            $imgUrl={image.url}
            $imgHeight={image.height}
          />
          <StyledCertificateModalIconWrapper className="image-icon">
            <Tooltip
              id="modal-download-tooltip"
              content={t("Download")}
              place="bottom"
            >
              <StyledCertificateCardImageIcon
                className="download"
                href={image.url}
                download={image.url}
              />
            </Tooltip>
          </StyledCertificateModalIconWrapper>
        </StyledCertificateModalImageWrapper>
        <Tooltip id="modal-close-tooltip" content={t("Close")} place="bottom">
          <StyledCertificateCardImageIcon className="close" onClick={onClose} />
        </Tooltip>
      </StyledCertificateModal>
    </Modal>
  );
};

export { CertificateModal };
