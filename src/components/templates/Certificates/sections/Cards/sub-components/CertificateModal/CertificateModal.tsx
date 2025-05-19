import { useTranslation } from "next-i18next";
import {
  StyledCertificateModal,
  StyledCertificateModalWrapper,
  StyledCertificateCardDownloadBtn,
  StyledCertificateCardCloseBtn,
} from "./CertificateModal.styled";
import { ICertificateModal } from "./CertificateModal.types";
import { Modal } from "@src/components/ui/Modal";
import { Tooltip } from "@src/components/ui/Tooltip";

const CertificateModal = ({ isOpen, onClose, image }: ICertificateModal) => {
  const { t } = useTranslation("certificates");

  return (
    <Modal maxWidth="628px" isOpen={isOpen} onClose={onClose}>
      <StyledCertificateModal>
        <StyledCertificateModalWrapper>
          {image.url && <img src={image.url} alt={image.alt} />}

          <Tooltip
            id="modal-download-tooltip"
            float
            content={t("Download")}
            place="bottom-start"
          >
            <StyledCertificateCardDownloadBtn
              href={image.url}
              download={image.url}
            />
          </Tooltip>
        </StyledCertificateModalWrapper>

        <Tooltip
          id="modal-close-tooltip"
          content={t("Close")}
          float
          place="bottom-start"
        >
          <StyledCertificateCardCloseBtn onClick={onClose} />
        </Tooltip>
      </StyledCertificateModal>
    </Modal>
  );
};

export { CertificateModal };
