import { useRouter } from "next/router";
import { Hero } from "./sections/Hero";

const WrongPortalNameTemplate = () => {
  const router = useRouter();
  const url = (router.query.url as string) || "";

  return (
    <>
      <Hero url={url} />
    </>
  );
};

export { WrongPortalNameTemplate };