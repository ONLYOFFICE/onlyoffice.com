import { useTranslation } from "next-i18next";
import { Link } from "@src/components/ui/Link";
import {
  StyledRoomTab,
  StyledRoomTabs,
  StyledRoomTabsWrapper,
} from "./RoomTabs.styled";
import { Text } from "@src/components/ui/Text";
import { rooms } from "./data/rooms";
import { IRoomTab } from "./RoomTabs.types";
import { useRouter } from "next/router";

const RoomTabs = () => {
  const { t } = useTranslation("RoomTabs");
  const router = useRouter();

  return (
    <StyledRoomTabsWrapper>
      <StyledRoomTabs>
        {rooms.map(({ id, url, label }: IRoomTab, index) => (
          <StyledRoomTab key={index} $active={router.pathname === url}>
            <Link id={id} href={url}>
              <Text label={t(label)} />
            </Link>
          </StyledRoomTab>
        ))}
      </StyledRoomTabs>
    </StyledRoomTabsWrapper>
  );
};

export { RoomTabs };
