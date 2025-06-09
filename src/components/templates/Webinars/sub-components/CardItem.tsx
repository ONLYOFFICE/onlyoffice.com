import { useState } from "react";
import { useTranslation } from "next-i18next";
import { Text } from "@src/components/ui/Text";
import { ICardItemProps } from "../Webinars.types";

import {
  StyledCardItem,
  StyledCardItemBottom,
  StyledCardItemContent,
  StyledCardItemHeading,
  StyledCardItemImg,
  StyledCardItemLink,
  StyledCardItemModal,
  StyledCardItemModalClose,
  StyledCardItemModalContent,
  StyledCardItemModalHeading,
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
            <StyledCardItemModalClose onClick={() => setIsModalOpen(false)} />
            <Text label={date} size={3} />
            <StyledCardItemModalHeading level={4} size={4} label={title} />
            <StyledCardItemModalText size={3} label={description} />
            <StyledCardItemModalProduct size={3} label={`${t("UpcomingModalProduct")}: ${product}`} />
          </StyledCardItemModalContent>
        </StyledCardItemModal>
      )}
    </>
  );
};

export { CardItem };