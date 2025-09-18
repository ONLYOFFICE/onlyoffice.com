import { useState } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";
import { ISuccessStoriesAllOtherUsers } from "@src/components/templates/SuccessStories/SuccessStories.types";

import {
  StyledStoriesOthersWrapper,
  StyledStoriesOthersTitle,
  StyledStoriesOthersCardList,
  StyledStoriesOthersCardItem,
  StyledStoriesOthersCardContent,
  StyledStoriesOthersCardItemLeft,
  StyledStoriesOthersCardItemRight,
} from "./Others.styled";

const Others = ({ allOtherUsers }: ISuccessStoriesAllOtherUsers) => {
  const { t } = useTranslation("success-stories");
  const [visibleButton, setVisibleButton] = useState<boolean>(true);

  const handleShowMore = () => {
    setVisibleButton(false);
  };

  const handleLinkClick = () => {
    setVisibleButton(true);
  };

  return (
    <StyledStoriesOthersWrapper>
      <Container maxWidth="1050px" tabletSpacing="16px">
        <StyledStoriesOthersTitle>{t("titleOthers")}</StyledStoriesOthersTitle>
        <StyledStoriesOthersCardList>
          {allOtherUsers.map(
            (story, index) =>
              (
                <StyledStoriesOthersCardItem key={story.id}>
                  <Link
                    href={`/success-stories/${story.slug}`}
                    onClick={() => handleLinkClick()}
                  >
                    <StyledStoriesOthersCardContent
                      $visibleButton={visibleButton}
                      $index={index}
                    >
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
            <Button
              className="show-more-button"
              variant="tertiary"
              borderRadius="3px"
              onClick={() => handleShowMore()}
              label={t("showMoreButton")}
            />
          )}
        </StyledStoriesOthersCardList>
      </Container>
    </StyledStoriesOthersWrapper>
  );
};

export { Others };
