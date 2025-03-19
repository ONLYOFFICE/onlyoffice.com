import { useTranslation } from "next-i18next";
import { Link } from "@src/components/ui/Link";
import {
  StyledRoomTab,
  StyledRoomTabs,
  StyledRoomTabsWrapper,
} from "./RoomTabs.styled";
import { rooms } from "./data/rooms";
import { useRouter } from "next/router";

const RoomTabs = () => {
  const { t } = useTranslation("RoomTabs");
  const router = useRouter();

  return (
    <StyledRoomTabsWrapper>
      <StyledRoomTabs>
        {rooms.map(({ id, url, label }, index) => (
          <StyledRoomTab key={index} $active={router.pathname === url}>
            <Link id={id} href={url} label={t(label)} />
          </StyledRoomTab>
        ))}
      </StyledRoomTabs>
    </StyledRoomTabsWrapper>
  );
};

export { RoomTabs };
