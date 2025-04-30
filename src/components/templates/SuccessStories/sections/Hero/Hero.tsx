import { FC } from "react";
import { SuccessStoriesHero } from "@src/components/modules/SuccessStories/SuccessStoriesHero";
import { ISlugProps } from "@src/components/modules/SuccessStories/SuccessStories.types";

const Hero: FC<ISlugProps> = ({ slug }) => {
  return <SuccessStoriesHero slug={slug} />;
};

export { Hero };
