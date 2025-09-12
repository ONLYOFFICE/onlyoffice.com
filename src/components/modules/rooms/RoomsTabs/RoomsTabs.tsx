import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import {
  StyledRoomsTab,
  StyledRoomsTabs,
  StyledRoomsTabLink,
} from "./RoomsTabs.styled";
import { rooms } from "./data/rooms";

const RoomsTabs = () => {
  const { t } = useTranslation("RoomsTabs");
  const router = useRouter();

  return (
    <StyledRoomsTabs>
      {rooms.map(({ id, url, label }, index) => (
        <StyledRoomsTab key={index} $active={router.pathname === url}>
          <StyledRoomsTabLink
            id={id}
            href={url}
            label={t(label)}
            $active={router.pathname === url}
            textUnderline={false}
          />
        </StyledRoomsTab>
      ))}
    </StyledRoomsTabs>
  );
};

export { RoomsTabs };
