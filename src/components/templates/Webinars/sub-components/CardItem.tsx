import { useState } from "react";
import { useTranslation } from "next-i18next";
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
  StyledCardItemModalBy,
  StyledCardItemModalClose,
  StyledCardItemModalContent,
  StyledCardItemModalDesc,
  StyledCardItemModalForm,
  StyledCardItemModalHeading,
  StyledCardItemModalInfo,
  StyledCardItemModalLang,
  StyledCardItemModalPlease,
  StyledCardItemModalProduct,
  StyledCardItemModalText,
  StyledCardItemSubtitle,
  StyledCardItemTop,
} from "./CardItem.styled";

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
              <Input
                label={t("UpcomingModalFullName")}
                type="text"
                placeholder="First name Last name*"
                name="fullName"
                value={formData.fullName}
                onChange={(event) => handleChangeInput(event)}
                required
                maxLength={100}
                onBlur={handleCheckStatusFullName}
                status={checkStatus.fullName}
              />
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
               />
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
               />
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
               <StyledCardItemModalPlease size={4} label={t("UpcomingModalPlease")} />
            </StyledCardItemModalForm>
          </StyledCardItemModalContent>
        </StyledCardItemModal>
      )}
    </>
  );
};

export { CardItem };