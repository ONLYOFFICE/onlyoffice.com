import {
  StyledMedalAwardImage,
  StyledMedalAwardHeading,
} from "./MedalAward.styled";
import { Link } from "@src/components/ui/Link";

interface IMedalAward {
  linkUrl: string;
  imgUrl: string;
  heading: string;
}

const MedalAward = ({ linkUrl, imgUrl, heading }: IMedalAward) => {
  return (
    <Link href={linkUrl} target="_blank">
      <StyledMedalAwardImage $imgUrl={imgUrl} />
      <StyledMedalAwardHeading>{heading}</StyledMedalAwardHeading>
    </Link>
  );
};

export { MedalAward };
