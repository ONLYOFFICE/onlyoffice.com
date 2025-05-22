import { useState } from "react";
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
import { IDocSpacePricesTemplate } from "@src/components/templates/DocSpacePrices";
import { getCurrencyByLocale } from "@src/utils/getCurrencyByLocale";
import { Heading } from "@src/components/ui/Heading";
import { Modal } from "@src/components/ui/Modal";
import { Input } from "@src/components/ui/Input";
import { LabeledWrapper } from "@src/components/widgets/LabeledWrapper";

const BusinessModal = ({
  isOpen,
  onClose,
  locale,
  productsData,
}: IBusinessModal & IDocSpacePricesTemplate) => {
  const { t } = useTranslation("docspace-prices");
  const [value, setValue] = useState("");

  const currency = getCurrencyByLocale(locale);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    if (/^\d*$/.test(newValue)) {
      setValue(newValue);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (value.length >= 3 && /^[0-9]$/.test(e.key)) {
      setValue("999+");
    }
  };

  const getDiskSpace = () => {
    const numOfAdmins = value === "999+" ? 999 : parseInt(value) || 0;
    let baseDiskSpace = 250;

    if (numOfAdmins > 1) {
      baseDiskSpace += (numOfAdmins - 1) * 250;
    }

    if (baseDiskSpace >= 1024) {
      return `${parseFloat((baseDiskSpace / 1024).toFixed(2)).toString()} TB`;
    }

    return `${baseDiskSpace} GB${value === "999+" ? "+" : ""}`;
  };

  const getTotalPrice = () => {
    const numOfAdmins = parseInt(value) || 1;
    const pricePerAdmin = productsData.business.price;
    return numOfAdmins * pricePerAdmin;
  };

  return (
    <Modal maxWidth="544px" isOpen={isOpen} onClose={onClose}>
      <StyledBusinessModal>
        <StyledBusinessModalInputWrapper>
          <LabeledWrapper label={t("EnterTheNumberOfAdmins")}>
            <Input
              value={value}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              maxLength={4}
            />
          </LabeledWrapper>
        </StyledBusinessModalInputWrapper>

        <Heading level={3} label={t("BussinesCloud")} />

        <StyledBusinessModalItems>
          <StyledBusinessModalItem>
            <StyledBusinessModalLabel>
              {t("PricePerAdmin")}
            </StyledBusinessModalLabel>
            <StyledBusinessModalValue>
              {currency.symbol}
              {productsData.business.price} {t("ValuePerMonth")}
            </StyledBusinessModalValue>
          </StyledBusinessModalItem>

          <StyledBusinessModalItem>
            <StyledBusinessModalLabel>{t("Admins")}</StyledBusinessModalLabel>
            <StyledBusinessModalValue>{value || "1"}</StyledBusinessModalValue>
          </StyledBusinessModalItem>

          <StyledBusinessModalItem>
            <StyledBusinessModalLabel>
              {t("DiskSpace")}
            </StyledBusinessModalLabel>
            <StyledBusinessModalValue>
              {getDiskSpace()}
            </StyledBusinessModalValue>
          </StyledBusinessModalItem>
        </StyledBusinessModalItems>

        {value !== "999+" && (
          <StyledBusinessModalTotal>
            <Heading level={4} label={t("Total")} />
            <Heading level={5} size={2} color="main">
              <StyledBusinessModalTotalCurrency
                forwardedAs="span"
                color="main"
                label="$"
              />
              {getTotalPrice()}
            </Heading>
          </StyledBusinessModalTotal>
        )}

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
