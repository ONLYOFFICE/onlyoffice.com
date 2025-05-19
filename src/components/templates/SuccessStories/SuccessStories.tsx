import { Hero } from "./sections/Hero";
import { Others } from "./sections/Others";
import { ISuccessStoriesTemplateProps } from "./SuccessStories.types";

const SuccessStoriesTemplate = ({
  userPreview,
  allOtherUsers,
}: ISuccessStoriesTemplateProps) => {
  return (
    <>
      <Hero userPreview={userPreview} />
      <Others allOtherUsers={allOtherUsers} />
    </>
  );
};

export { SuccessStoriesTemplate };
