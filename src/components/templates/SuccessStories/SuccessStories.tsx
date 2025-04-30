import { useRouter } from "next/router";

import { Hero } from "./sections/Hero";
import { Others } from "./sections/Others";

const SuccessStoriesTemplate = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <Hero slug={slug} />
      <Others slug={slug} />
    </>
  );
};

export { SuccessStoriesTemplate };
