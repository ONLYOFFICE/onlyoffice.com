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
  image_2X,
}: Omit<IEvent, "id" | "description">) => {
  const { t } = useTranslation("events");

  return (
    <div>
      <StyledEventHeading level={4} label={name} />
      <StyledEventDate>
        {formatEventDate(t, start_date, end_date)}
      </StyledEventDate>
      <StyledEventPlace>{place}</StyledEventPlace>
      <StyledEventImg
        href={link}
        target="_blank"
        tabIndex={-1}
        $imgUrl={image[0].url}
        $img2xUrl={image_2X[0].url}
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
