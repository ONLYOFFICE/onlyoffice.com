import { useState } from "react";
import { Trans, useTranslation } from "next-i18next";
import { Text } from "@src/components/ui/Text";
import { Input } from "@src/components/ui/Input";
import { TextArea } from "@src/components/ui/TextArea";
import { validateFullName, validateEmail } from "@src/utils/validators";
import { ICardItemProps, IFormData, ICheckStatus } from "../Webinars.types";

import {
  StyledCardItem,
  StyledCardItemBottom,
  StyledCardItemContent,
  StyledCardItemHeading,
  StyledCardItemImg,
  StyledCardItemLink,
  StyledCardItemModal,
  StyledCardItemModalAgreement,
  StyledCardItemModalButtons,
  StyledCardItemModalBy,
  StyledCardItemModalClose,
  StyledCardItemModalContent,
  StyledCardItemModalDesc,
  StyledCardItemModalForm,
  StyledCardItemModalHeading,
  StyledCardItemModalInfo,
  StyledCardItemModalInputWrapper,
  StyledCardItemModalLang,
  StyledCardItemModalPlease,
  StyledCardItemModalProduct,
  StyledCardItemModalText,
  StyledCardItemSubtitle,
  StyledCardItemTop,
} from "./CardItem.styled";
import { HCaptcha } from "@src/components/widgets/HCaptcha";
import { Link } from "@src/components/ui/Link";
import { Button } from "@src/components/ui/Button";

const CardItem = ({
  date,
  language,
  title,
  description,
  playText,
  speaker,
  image,
  product,
  isUpcomingWebinar
 }: ICardItemProps) => {
  const { t } = useTranslation("webinars");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [formData, setFormData] = useState<IFormData>({
    fullName: "",
    companyName: "",
    email: "",
    textArea: "",
  });

  const [checkStatus, setCheckStatus] = useState<ICheckStatus>({
    fullName: "default",
    companyName: "default",
    email: "default",
    textArea: "default",
  });

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const handleCheckStatusFullName = () => {
    if (validateFullName(formData.fullName)) {
      setCheckStatus((prev) => ({
        ...prev,
        fullName: "success",
      }));
    } else {
      setCheckStatus((prev) => ({
        ...prev,
        fullName: "error",
      }));
    }
  }

  const handleCheckStatusCompanyName = () => {
    if (formData.companyName.length > 0) {
      setCheckStatus((prev) => ({
        ...prev,
        companyName: "success",
      }));
    } else {
      setCheckStatus((prev) => ({
        ...prev,
        companyName: "error",
      }));
    }
  }

  const handleCheckStatusEmail = () => {
    if (validateEmail(formData.email)) {
      setCheckStatus((prev) => ({
        ...prev,
        email: "success",
      }));
    } else {
      setCheckStatus((prev) => ({
        ...prev,
        email: "error",
      }));
    }
  }

  const handleCheckStatusTextArea = () => {
    if (formData.textArea.length > 0) {
      setCheckStatus((prev) => ({
        ...prev,
        textArea: "success",
      }));
    } else {
      setCheckStatus((prev) => ({
        ...prev,
        textArea: "default",
      }));
    }
  }

  return (
    <>
      <StyledCardItem
        $isUpcomingWebinar={isUpcomingWebinar}
        onClick={() => setIsModalOpen((prev) => !prev)}
      >
        <StyledCardItemTop>
          <Text
            size={1}
            label={date}
          />
          <Text
            size={1}
            label={language}
          />
        </StyledCardItemTop>
        <StyledCardItemContent>
          <StyledCardItemHeading
            level={4}
            size={4}
            label={title}
          />
          <Text
            size={2}
            label={description}
          />
        </StyledCardItemContent>
        <StyledCardItemBottom>
          {!isUpcomingWebinar && (
            <StyledCardItemLink
              fontSize="14px"
              label={playText}
              color="main"
            />
          )}
          <StyledCardItemImg $image={image} />
          <StyledCardItemSubtitle
            label={speaker}
            level={5}
            size={5}
          />
        </StyledCardItemBottom>
      </StyledCardItem>

      {isModalOpen && isUpcomingWebinar && (
        <StyledCardItemModal onClick={(event) => event.target === event.currentTarget && setIsModalOpen(false)}>
          <StyledCardItemModalContent>
            <StyledCardItemModalDesc>
              <StyledCardItemModalClose onClick={() => setIsModalOpen(false)} />
              <Text label={date} size={3} />
              <StyledCardItemModalHeading level={4} size={4} label={title} />
              <StyledCardItemModalText size={3} label={description} />
              <StyledCardItemModalProduct size={3} label={`${t("UpcomingModalProduct")}: ${product}`} />
              <StyledCardItemModalInfo>
                <StyledCardItemModalBy>
                  <Text size={3} label={t("UpcomingModalBy")} />
                  <Text size={3} label={speaker} />
                </StyledCardItemModalBy>
                <StyledCardItemModalLang>
                  <Text size={3} label={t("UpcomingModalLanguage")} />
                  <Text size={3} label={language} />
                </StyledCardItemModalLang>
              </StyledCardItemModalInfo>
            </StyledCardItemModalDesc>
            <StyledCardItemModalForm>
              <StyledCardItemModalInputWrapper>
                <Input
                  label={t("UpcomingModalFullName")}
                  type="text"
                  placeholder="First name Last name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={(event) => handleChangeInput(event)}
                  required
                  maxLength={100}
                  onBlur={handleCheckStatusFullName}
                  status={checkStatus.fullName}
                  onFocus={() => setCheckStatus((prev) => ({ ...prev, fullName: "default" }))}
                />
                {checkStatus.fullName === "error" && formData.fullName.length === 0 && (
                  <Text size={4} label={t("FullNameIsEmpty")} color="#CB0000" />
                )}
                {checkStatus.fullName === "error" && formData.fullName.length > 0 && (
                  <Text size={4} label={t("FullNameIsIncorrect")} color="#CB0000" />
                )}
              </StyledCardItemModalInputWrapper>
              <StyledCardItemModalInputWrapper>
                <Input
                  label={t("UpcomingModalCompanyName")}
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={(event) => handleChangeInput(event)}
                  required
                  maxLength={100}
                  onBlur={handleCheckStatusCompanyName}
                  status={checkStatus.companyName}
                  onFocus={() => setCheckStatus((prev) => ({ ...prev, companyName: "default" }))}
                />
                {checkStatus.companyName === "error" && formData.companyName.length === 0 && (
                  <Text size={4} label={t("CompanyNameIsEmpty")} color="#CB0000" />
                )}
              </StyledCardItemModalInputWrapper>
              <StyledCardItemModalInputWrapper>
                <Input
                  label={t("UpcomingModalEmail")}
                  type="email"
                  placeholder="name@domain.com"
                  name="email"
                  value={formData.email}
                  onChange={(event) => handleChangeInput(event)}
                  required
                  maxLength={50}
                  onBlur={handleCheckStatusEmail}
                  status={checkStatus.email}
                  onFocus={() => setCheckStatus((prev) => ({ ...prev, email: "default" }))}
                />
                {checkStatus.email === "error" && formData.email.length === 0 && (
                  <Text size={4} label={t("EmailIsEmpty")} color="#CB0000" />
                )}
                {checkStatus.email === "error" && formData.email.length > 0 && (
                  <Text size={4} label={t("EmailIsIncorrect")} color="#CB0000" />
                )}
              </StyledCardItemModalInputWrapper>
              <StyledCardItemModalInputWrapper>
                <TextArea
                  label={t("UpcomingModalSendQuestions")}
                  placeholder="&nbsp;"
                  name="textArea"
                  value={formData.textArea}
                  onChange={(event) => handleChangeInput(event)}
                  fullWidth={true}
                  maxLength={600}
                  onBlur={handleCheckStatusTextArea}
                  status={checkStatus.textArea}
                />
              </StyledCardItemModalInputWrapper>
              <StyledCardItemModalPlease size={4} label={t("UpcomingModalPlease")} />
              <HCaptcha />
              <StyledCardItemModalAgreement size={4}>
                <Trans
                  t={t}
                  i18nKey={"AgreementByClicking"}
                  components={[
                    <Link
                      key={0}
                      target="_blank"
                      color="main"
                      textUnderline={true}
                      hover="underline-none"
                      href="https://help.onlyoffice.co/Products/Files/doceditor.aspx?fileid=6615734&doc=cy9XcGc5TXNONjVTMkNrR2NZUEVTT2E1Y1FDZGVRQ1YvOTJYTnpkZ3JEWT0_IjY2MTU3MzQi0"
                    />,
                    <Link
                      key={1}
                      target="_blank"
                      color="main"
                      textUnderline={true}
                      hover="underline-none"
                      href="https://help.onlyoffice.co/products/files/doceditor.aspx?fileid=5048502&doc=SXhWMEVzSEYxNlVVaXJJeUVtS0kyYk14YWdXTEFUQmRWL250NllHNUFGbz0_IjUwNDg1MDIi0&_ga=2.101739969.1105072466.1587625676-1002786878.1584771261"
                    />
                  ]}
                />
              </StyledCardItemModalAgreement>
              <StyledCardItemModalButtons>
                <Button
                  label={t("ModalSendButton")}
                  type="submit"
                  borderRadius="3px"
                  disabled={
                    checkStatus.fullName === "error" ||
                    checkStatus.companyName === "error" ||
                    checkStatus.email === "error" ||
                    checkStatus.fullName === "default" ||
                    checkStatus.companyName === "default" ||
                    checkStatus.email === "default"
                  }
                />
                <Button
                  label={t("ModalCloseButton")}
                  type="button"
                  borderRadius="3px"
                  variant="secondary"
                  onClick={() => setIsModalOpen(false)}
                />
              </StyledCardItemModalButtons>
            </StyledCardItemModalForm>
          </StyledCardItemModalContent>
        </StyledCardItemModal>
      )}
    </>
  );
};

export { CardItem };