import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import {
  StyledRoomTab,
  StyledRoomTabs,
  StyledRoomTabLink,
} from "./RoomTabs.styled";
import { rooms } from "./data/rooms";

const RoomTabs = () => {
  const { t } = useTranslation("RoomTabs");
  const router = useRouter();

  return (
    <StyledRoomTabs>
      {rooms.map(({ id, url, label }, index) => (
        <StyledRoomTab key={index} $active={router.pathname === url}>
          <StyledRoomTabLink
            id={id}
            href={url}
            label={t(label)}
            $active={router.pathname === url}
          />
        </StyledRoomTab>
      ))}
    </StyledRoomTabs>
  );
};

export { RoomTabs };
