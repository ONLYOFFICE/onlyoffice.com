import { useTranslation } from "next-i18next";
import {
  StyledUsers,
  StyledUsersItems,
  StyledUsersHeading,
  UserItem
} from "./Users.styled";
import { Section } from "@src/components/ui/Section";
import { usersItems } from "./data/usersItems";

const Users = () => {
  const { t } = useTranslation("workspace-enterprise");

  return (
    <Section
      desktopSpacing={["0px", "112px"]}
      tabletSpacing={["0px", "88px"]}
      tabletSmallSpacing={["0px", "64px"]}
      mobileSpacing={["0px", "40px"]}
      background="#f6f6f6"
    >
      <StyledUsersHeading level={4} label={t("Trusted")}></StyledUsersHeading>
        <StyledUsers>
          <StyledUsersItems>
            {usersItems.map((item, index) => (
              <UserItem $width={item.image.width} $positionX={item.image.positionX} $height={item.image.height} key={index}/>
            ))}
          </StyledUsersItems>
        </StyledUsers>
    </Section>
  );
};

export { Users };
