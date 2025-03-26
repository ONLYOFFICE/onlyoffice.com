import { useTranslation } from "next-i18next";
import {
  StyledTeamworkText,
  StyledTeamworkItems,
  StyledTeamworkItem,
} from "./Teamwork.styled";
import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";
import { TeamworkCard, ITeamworkCard } from "./sub-components/TeamworkCard";
import { teamworkItems } from "./data/items";

const Teamwork = () => {
  const { t } = useTranslation("collaboration-rooms");

  return (
    <Section
      desktopSpacing={["124px", "0"]}
      tabletSpacing={["88px", "0"]}
      tabletSmallSpacing={["72px", "0"]}
      mobileSpacing={["48px", "0"]}
    >
      <Container>
        <Heading level={2} label={t("IdealForTeamwork")} textAlign="center" />
        <StyledTeamworkText
          textAlign="center"
          label={t("EasilyGetAnyGroupWorkOrProject")}
        />
        <StyledTeamworkItems>
          {teamworkItems
            .reduce<ITeamworkCard[][]>((acc, item, index) => {
              if (index % 2 === 0) {
                acc.push([item]);
              } else {
                acc[acc.length - 1].push(item);
              }
              return acc;
            }, [])
            .map((group, i) => (
              <StyledTeamworkItem key={i}>
                {group.map((item, j) => (
                  <TeamworkCard
                    key={j}
                    title={t(item.title)}
                    text={t(item.text)}
                    img={item.img}
                    color={item.color}
                    bgColor={item.bgColor}
                    borderColor={item.borderColor}
                  />
                ))}
              </StyledTeamworkItem>
            ))}
        </StyledTeamworkItems>
      </Container>
    </Section>
  );
};

export { Teamwork };
