import { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import {
  StyledRating,
  StyledRatingStars,
  StyledRatingStar,
  StyledRatingVotes,
} from "./Rating.styled";
import { IRating } from "./Rating.types";
import { Heading } from "@src/components/ui/Heading";

const Rating = ({ ratingData }: IRating) => {
  const { t } = useTranslation("converter");

  const [rating, setRating] = useState(ratingData.averageRating);
  const [ratingCount, setRatingCount] = useState(ratingData.averageRating);
  const [numberOfVotes, setNumberOfVotes] = useState(ratingData.numberOfVotes);
  const [hoverRating, setHoverRating] = useState(0);
  const [hasVoted, setHasVoted] = useState(false);

  useEffect(() => {
    const voted = localStorage.getItem(ratingData.pageName);

    if (voted === "true") {
      setHasVoted(true);
    }
  }, [ratingData.pageName]);

  const handleClick = async (index: number) => {
    if (hasVoted) return;

    setRating((index + 1) * 20);

    try {
      const res = await fetch("/api/converter-rating", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ratingValue: hoverRating,
          converterPageName: ratingData.pageName,
        }),
      });

      if (res.status === 409) {
        setHoverRating(ratingData.averageRating);
      }

      const data = await res.json();

      if (data.message === "rateAppRequestSuccessful") {
        setRatingCount(data.averageRating);
        setNumberOfVotes(data.numberOfVotes);
      }
    } catch (error) {
      console.error("Error submitting rating:", error);
    }

    localStorage.setItem(ratingData.pageName, "true");
    setHasVoted(true);
  };

  return (
    <StyledRating>
      <Heading level={4} label={t("RateYourExperience")} />

      <StyledRatingStars
        $value={rating}
        $hover={hoverRating}
        $hasVoted={hasVoted}
      >
        {[...Array(5)].map((_, index) => (
          <li
            key={index}
            onClick={() => handleClick(index)}
            onMouseEnter={
              hasVoted ? undefined : () => setHoverRating((index + 1) * 20)
            }
            onMouseLeave={hasVoted ? undefined : () => setHoverRating(0)}
          >
            <StyledRatingStar />
          </li>
        ))}
      </StyledRatingStars>

      <StyledRatingVotes>
        <b>{Math.round((Number(ratingCount) / 20) * 10) / 10} / 5 -</b>{" "}
        {numberOfVotes} {t("votes")}
      </StyledRatingVotes>
    </StyledRating>
  );
};

export { Rating };
