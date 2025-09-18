import { Trans, useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Link } from "@src/components/ui/Link";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { transKeysLink } from "./data/transKeysLink";
import { ISuccessStoriesUserPreview } from "@src/components/templates/SuccessStories/SuccessStories.types";

import {
  StyledStoriesHeroWrapper,
  StyledStoriesHeroContent,
  StyledStoriesHeroLeft,
  StyledStoriesHeroRight,
  StyledStoriesHeroList,
  StyledStoriesHeroItem,
  StyledStoriesHeroUserImg,
  StyledStoriesHeroDescription,
} from "./Hero.styled";

const Hero = ({ userPreview }: ISuccessStoriesUserPreview) => {
  const { t } = useTranslation("success-stories");

  const rawIndustry = t(userPreview?.profile.industry || "", {
    returnObjects: true,
  }) as string | string[];
  const industries = Array.isArray(rawIndustry) ? rawIndustry : [rawIndustry];

  const rawChallenge = t(userPreview?.challenges || "", {
    returnObjects: true,
  }) as string | string[];
  const challenges = Array.isArray(rawChallenge)
    ? rawChallenge
    : [rawChallenge];

  const rawAchievements = t(userPreview?.achievements || "", {
    returnObjects: true,
  }) as string | string[];
  const achievements = Array.isArray(rawAchievements)
    ? rawAchievements
    : [rawAchievements];

  return (
    <StyledStoriesHeroWrapper>
      <Container className="container" maxWidth="1050px" tabletSpacing="16px">
        <StyledStoriesHeroContent>
          <StyledStoriesHeroLeft>
            <Heading level={1}>{t(userPreview?.title || "")}</Heading>
            <StyledStoriesHeroList>
              <StyledStoriesHeroItem>
                <Heading level={3}>{t("subTitleProfile")}</Heading>
                <Text>
                  <Trans
                    t={t}
                    i18nKey={userPreview?.profile.company || ""}
                    components={[
                      <Text as={"span"} fontWeight={700} key={0} />,
                      ...transKeysLink.map((item) => (
                        <Link
                          key={item.key}
                          href={item.href}
                          target={item.target}
                          color={item.color}
                          fontWeight={item.fontWeight}
                        />
                      )),
                      <Text as={"span"} fontStyle="italic" key={11} />,
                    ]}
                  />
                </Text>
                <>
                  {industries.map((text) => (
                    <Text key={text}>
                      <Trans
                        t={t}
                        i18nKey={text}
                        components={[
                          <Text as={"span"} fontWeight={700} key={0} />,
                          ...transKeysLink.map((item) => (
                            <Link
                              key={item.key}
                              href={item.href}
                              target={item.target}
                              color={item.color}
                              fontWeight={item.fontWeight}
                            />
                            )),
                          <Text as={"span"} fontStyle="italic" key={11} />,
                        ]}
                      />
                    </Text>
                  ))}
                </>
              </StyledStoriesHeroItem>
              <StyledStoriesHeroItem>
                <Heading level={3} label={t("subTitleChallenges")} />
                <>
                  {challenges.map((text) => (
                    <Text key={text}>
                      <Trans
                        t={t}
                        i18nKey={text}
                        components={[
                          <Text as={"span"} fontWeight={700} key={0} />,
                          ...transKeysLink.map((item) => (
                            <Link
                              key={item.key}
                              href={item.href}
                              target={item.target}
                              color={item.color}
                              fontWeight={item.fontWeight}
                            />
                          )),
                          <Text as={"span"} fontStyle="italic" key={11} />,
                        ]}
                      />
                    </Text>
                  ))}
                </>
              </StyledStoriesHeroItem>
              <StyledStoriesHeroItem>
                <Heading level={3} label={t("subTitleAchievements")} />
                <>
                  {achievements.map((text) => (
                    <Text key={text}>
                      <Trans
                        t={t}
                        i18nKey={text}
                        components={[
                          <Text as={"span"} fontWeight={700} key={0} />,
                          ...transKeysLink.map((item) => (
                            <Link
                              key={item.key}
                              href={item.href}
                              target={item.target}
                              color={item.color}
                              fontWeight={item.fontWeight}
                            />
                          )),
                          <Text as={"span"} fontStyle="italic" key={11} />,
                        ]}
                      />
                    </Text>
                  ))}
                </>
              </StyledStoriesHeroItem>
            </StyledStoriesHeroList>
          </StyledStoriesHeroLeft>

          <StyledStoriesHeroRight>
            <StyledStoriesHeroUserImg>
              <img src={userPreview?.user.image} alt="image" />
            </StyledStoriesHeroUserImg>
            <StyledStoriesHeroDescription>
              <Heading level={3} label={userPreview?.user.name} />
              <Text label={t(userPreview?.user.role || "")} />
              <Text label={t(userPreview?.user.portal || "")} />
              <Text label={t(userPreview?.user.location || "")} />
            </StyledStoriesHeroDescription>
          </StyledStoriesHeroRight>
        </StyledStoriesHeroContent>
      </Container>
    </StyledStoriesHeroWrapper>
  );
};

export { Hero };
