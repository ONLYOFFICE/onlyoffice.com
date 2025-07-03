import { useTranslation } from "next-i18next";
import {
  StyledUsers,
  StyledUsersItems,
  StyledUsersHeading
} from "./Users.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { usersItems } from "./data/usersItems";

const Users = () => {
  const { t } = useTranslation("for-government");

  return (
    <Section
      desktopSpacing={["0", "88px"]}
      tabletSpacing={["56px", "56px"]}
      tabletSmallSpacing={["56px", "56px"]}
      background="#F5F5F5"
    >
      <Container>
        <StyledUsers>
          <StyledUsersHeading level={4} label={t("HeadingUsers")}></StyledUsersHeading>
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
      </Container>
    </Section>
  );
};

export { Users };
