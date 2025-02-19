import {
  StyledMedalAward,
  StyledMedalAwardImage,
  StyledMedalAwardHeading,
} from "./MedalAward.styled";

interface IMedalAward {
  linkUrl: string;
  imgUrl: string;
  heading: string;
}

const MedalAward = ({ linkUrl, imgUrl, heading }: IMedalAward) => {
  return (
    <StyledMedalAward href={linkUrl} target="_blank">
      <StyledMedalAwardImage $imgUrl={imgUrl} />
      <StyledMedalAwardHeading>{heading}</StyledMedalAwardHeading>
    </StyledMedalAward>
  );
};

export { MedalAward };
