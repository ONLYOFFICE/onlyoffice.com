import { useTranslation } from "next-i18next";
import {
  StyledUsers,
  StyledUsersItems,
  StyledUsersHeading
} from "./Users.styled";
import { Section } from "@src/components/ui/Section";
import { usersItems } from "./data/usersItems";

const Users = () => {
  const { t } = useTranslation("for-research");

  return (
    <Section
      desktopSpacing={["88px", "88px"]}
      tabletSpacing={["56px", "56px"]}
      tabletSmallSpacing={["56px", "56px"]}
    >
      <StyledUsersHeading level={4} label={t("HeadingUsers")}></StyledUsersHeading>
        <StyledUsers>
          <StyledUsersItems>
            {usersItems.map((item, index) => (
              <li key={index}>
                <div
                  style={{
                    width: item.image.width, 
                    height: item.image.height, 
                    backgroundImage: `url(${item.image.url})`, 
                    backgroundPosition: item.image.positionX, 
                    backgroundSize: 'auto', 
                    backgroundRepeat: 'no-repeat', 
                  }}
                />
              </li>
            ))}
          </StyledUsersItems>
        </StyledUsers>
    </Section>
  );
};

export { Users };
