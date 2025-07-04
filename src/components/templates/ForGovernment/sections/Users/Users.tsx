import { useTranslation } from "next-i18next";
import {
  StyledUsers,
  StyledUsersItems,
  StyledUsersHeading,
  StyledItem,
} from "./Users.styled";
import { Section } from "@src/components/ui/Section";
import { usersItems } from "./data/usersItems";

const Users = () => {
  const { t } = useTranslation("for-government");

  return (
    <Section
      desktopSpacing={["0", "88px"]}
      tabletSpacing={["0", "56px"]}
      tabletSmallSpacing={["0", "56px"]}
      background="#F5F5F5"
    >
      <StyledUsersHeading
        level={4}
        label={t("HeadingUsers")}
      ></StyledUsersHeading>
      <StyledUsers>
        <StyledUsersItems>
          {usersItems.map((item, index) => (
            <StyledItem
              key={index}
              $width={item.image.width}
              $height={item.image.height}
              $backgroundImage={`url(${item.image.url})`}
              $backgroundPosition={item.image.positionX}
            />
          ))}
        </StyledUsersItems>
      </StyledUsers>
    </Section>
  );
};

export { Users };
