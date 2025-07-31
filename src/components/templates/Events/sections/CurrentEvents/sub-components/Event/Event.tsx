import { useTranslation } from "next-i18next";
import {
  StyledEventHeading,
  StyledEventDate,
  StyledEventPlace,
  StyledEventDescription,
  StyledEventImg,
  StyledEventLinks,
  StyledEventLink,
} from "./Event.styled";
import { IEvent } from "@src/components/templates/Events";
import parse from "html-react-parser";
import { formatEventDate } from "@src/components/templates/Events/utils/formatEventDate";

const Event = ({
  name,
  start_date,
  end_date,
  place,
  description,
  link,
  image,
  image_2X,
}: IEvent) => {
  const { t } = useTranslation("events");

  return (
    <div>
      <StyledEventHeading level={3} label={name} />
      <StyledEventDate>
        {formatEventDate(t, start_date, end_date)}
      </StyledEventDate>
      <StyledEventPlace>{place}</StyledEventPlace>
      <StyledEventDescription>{parse(description)}</StyledEventDescription>
      <StyledEventImg $imgUrl={image[0].url} $img2xUrl={image_2X[0].url} />
      <StyledEventLinks>
        <StyledEventLink
          color="main"
          href={link}
          target="_blank"
          textUnderline
          hover="underline-none"
        >
          {t("MoreInfo")}
        </StyledEventLink>
        <StyledEventLink
          color="main"
          href={`mailto:webinars@onlyoffice.com?subject=${t(
            "Schedule%20meeting%20at%20",
          )}${encodeURIComponent(name)}`}
          textUnderline
          hover="underline-none"
        >
          {t("ScheduleMeeting")}
        </StyledEventLink>
      </StyledEventLinks>
    </div>
  );
};

export { Event };
