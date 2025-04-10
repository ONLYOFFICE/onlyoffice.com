import { useTranslation } from "next-i18next";
import {
  StyledEventHeading,
  StyledEventDate,
  StyledEventPlace,
  StyledEventImg,
  StyledEventLink,
} from "./Event.styled";
import { IEvent } from "@src/components/templates/Events";
import { formatEventDate } from "@src/components/templates/Events/utils/formatEventDate";

const Event = ({
  name,
  start_date,
  end_date,
  place,
  link,
  image,
}: Omit<IEvent, "id" | "description" | "image_2X">) => {
  const { t } = useTranslation("events");

  return (
    <div>
      <StyledEventHeading level={4} label={name} />
      <StyledEventDate>
        {formatEventDate(t, start_date, end_date)}
      </StyledEventDate>
      <StyledEventPlace>{place}</StyledEventPlace>
      <StyledEventImg
        style={{ backgroundImage: `url(${image[0].url})` }}
        href={link}
        target="_blank"
        tabIndex={-1}
      />
      <StyledEventLink
        href={link}
        target="_blank"
        color="main"
        textUnderline
        hover="underline-none"
      >
        {t("MoreInfo")}
      </StyledEventLink>
    </div>
  );
};

export { Event };
