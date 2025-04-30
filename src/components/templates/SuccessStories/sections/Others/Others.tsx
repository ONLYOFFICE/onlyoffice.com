import { FC, useState } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { data } from "@src/components/templates/SuccessStories/data/success-stories";

import {
  ISlugProps,
  ISuccessStoriesData,
} from "@src/components/templates/SuccessStories/SuccessStories.types";

import {
  StyledStoriesOthersWrapper,
  StyledStoriesOthersTitle,
  StyledStoriesOthersCardList,
  StyledStoriesOthersCardItem,
  StyledStoriesOthersCardContent,
  StyledStoriesOthersCardItemLeft,
  StyledStoriesOthersCardItemRight,
  StyledStoriesOthersShowMoreButton,
} from "./Others.styled";

const Others = ({ slug }: ISlugProps) => {
  const { t } = useTranslation("success-stories");
  const allOtherUsers: ISuccessStoriesData[] = data.filter(
    (story) => story.slug !== slug,
  );

  const [visibleUserCount, setVisibleUserCount] = useState<number>(2);
  const [visibleButton, setVisibleButton] = useState<boolean>(true);

  const handleShowMore = () => {
    setVisibleUserCount(allOtherUsers.length);
    setVisibleButton(false);
  };

  const handleLinkClick = () => {
    setVisibleUserCount(2);
    setVisibleButton(true);
  };

  return (
    <StyledStoriesOthersWrapper>
      <Container maxWidth="1050px" tabletSpacing="16px">
        <StyledStoriesOthersTitle>{t("titleOthers")}</StyledStoriesOthersTitle>
        <StyledStoriesOthersCardList>
          {allOtherUsers.map(
            (story, index) =>
              index < visibleUserCount && (
                <StyledStoriesOthersCardItem key={story.id}>
                  <Link
                    href={`/success-stories/${story.slug}`}
                    onClick={() => handleLinkClick()}
                  >
                    <StyledStoriesOthersCardContent>
                      <StyledStoriesOthersCardItemLeft>
                        <img src={story.user.image} alt="image" />
                      </StyledStoriesOthersCardItemLeft>
                      <StyledStoriesOthersCardItemRight>
                        <Heading level={3} label={t(story.title || "")} />
                        <Text label={t(story.intro || "")} />
                        <Heading level={4} label={t(story.user.name || "")} />
                        <Heading level={5} label={t(story.user.role || "")} />
                        <Heading level={5} label={t(story.user.portal || "")} />
                        <Heading
                          level={5}
                          label={t(story.user.location || "")}
                        />
                      </StyledStoriesOthersCardItemRight>
                    </StyledStoriesOthersCardContent>
                  </Link>
                </StyledStoriesOthersCardItem>
              ),
          )}
          {visibleButton && (
            <StyledStoriesOthersShowMoreButton
              onClick={() => handleShowMore()}
              type="button"
            >
              {t("showMoreButton")}
            </StyledStoriesOthersShowMoreButton>
          )}
        </StyledStoriesOthersCardList>
      </Container>
    </StyledStoriesOthersWrapper>
  );
};

export { Others };
