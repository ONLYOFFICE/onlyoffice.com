import { FC } from "react";
import { SuccessStoriesOthers } from "@src/components/modules/SuccessStories/SuccessStoriesOthers/SuccessStoriesOthers";
import { ISlugProps } from "@src/components/modules/SuccessStories/SuccessStories.types";

const Others: FC<ISlugProps> = ({ slug }) => {
  return <SuccessStoriesOthers slug={slug} />;
};

export { Others };
