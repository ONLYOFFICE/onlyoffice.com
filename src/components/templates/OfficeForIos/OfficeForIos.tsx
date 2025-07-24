import { Hero } from "./sections/Hero";
import { Features } from "./sections/Features";
import { Award } from "./sections/Award";
import { Collab } from "./sections/Collab";
import { VideoCard } from "./sections/VideoCard";
import { Choose } from "./sections/Choose";
import { GetMore } from "./sections/GetMore";
import { Learn } from "./sections/Learn";

const OfficeForIosTemplate = () => {
  return (
    <>
      <Hero />
      <Features />
      <Award />
      <Collab />
      <VideoCard />
      <Choose />
      <GetMore />
      <Learn />
    </>
  );
};

export { OfficeForIosTemplate };
