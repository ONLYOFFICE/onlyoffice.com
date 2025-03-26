import { useTranslation } from "next-i18next";
import {
  StyledBusinessModal,
  StyledBusinessModalInputWrapper,
  StyledBusinessModalItems,
  StyledBusinessModalItem,
  StyledBusinessModalLabel,
  StyledBusinessModalValue,
  StyledBusinessModalTotal,
  StyledBusinessModalTotalCurrency,
  StyledBusinessModalBtns,
  StyledBusinessModalBtn,
} from "./BusinessModal.styled";
import { IBusinessModal } from "./BusinessModal.types";
import { Heading } from "@src/components/ui/Heading";
import { Modal } from "@src/components/ui/Modal";
import { Text } from "@src/components/ui/Text";

const BusinessModal = ({ isOpen, onClose }: IBusinessModal) => {
  const { t } = useTranslation("docspace-prices");

  return (
    <Modal maxWidth="544px" isOpen={isOpen} onClose={onClose}>
      <StyledBusinessModal>
        <StyledBusinessModalInputWrapper>
          <Text as="div" size={2} label={t("EnterTheNumberOfAdmins")} />
          <input />
        </StyledBusinessModalInputWrapper>

        <Heading level={3} label={t("BussinesCloud")} />

        <StyledBusinessModalItems>
          <StyledBusinessModalItem>
            <StyledBusinessModalLabel>
              {t("PricePerAdmin")}
            </StyledBusinessModalLabel>
            <StyledBusinessModalValue>
              ${t("ValuePerMonth")}
            </StyledBusinessModalValue>
          </StyledBusinessModalItem>

          <StyledBusinessModalItem>
            <StyledBusinessModalLabel>{t("Admins")}</StyledBusinessModalLabel>
            <StyledBusinessModalValue>0</StyledBusinessModalValue>
          </StyledBusinessModalItem>

          <StyledBusinessModalItem>
            <StyledBusinessModalLabel>
              {t("DiskSpace")}
            </StyledBusinessModalLabel>
            <StyledBusinessModalValue>0 GB</StyledBusinessModalValue>
          </StyledBusinessModalItem>
        </StyledBusinessModalItems>

        <StyledBusinessModalTotal>
          <Heading level={4} label={t("Total")} />
          <Heading level={5} size={2} color="#ff6f3d">
            <StyledBusinessModalTotalCurrency
              forwardedAs="span"
              color="main"
              label="$"
            />
            20
          </Heading>
        </StyledBusinessModalTotal>

        <StyledBusinessModalBtns>
          <StyledBusinessModalBtn
            forwardedAs="a"
            href="mailto:sales@onlyoffice.com?subject=Request%20a%20quote%20for%20ONLYOFFICE%20DocSpace%20Business%20Cloud"
            label={t("GetAQuote")}
          />
          <StyledBusinessModalBtn
            onClick={onClose}
            forwardedAs="button"
            variant="tertiary"
            label={t("Cancel")}
          />
        </StyledBusinessModalBtns>
      </StyledBusinessModal>
    </Modal>
  );
};

export { BusinessModal };
