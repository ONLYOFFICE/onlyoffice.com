import {
  StyledMedalAwardImage,
  StyledMedalAwardHeading,
} from "./MedalAward.styled";
import { IMedalAward } from "./MedalAward.types";
import { Link } from "@src/components/ui/Link";

const MedalAward = ({ linkUrl, imgUrl, heading }: IMedalAward) => {
  return (
    <Link href={linkUrl} target="_blank">
      <StyledMedalAwardImage $imgUrl={imgUrl} />
      <StyledMedalAwardHeading>{heading}</StyledMedalAwardHeading>
    </Link>
  );
};

export { MedalAward };
