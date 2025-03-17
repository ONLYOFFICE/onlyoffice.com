import {
  StyledSocialButton,
  StyledSocialButtonLabel,
} from "./SocialButton.styled";
import { ISocialButton } from "./SocialButton.types";

const SocialButton = ({ id, className, platform, href }: ISocialButton) => {
  return (
    <StyledSocialButton
      id={id}
      className={className}
      href={href}
      $platform={platform}
    >
      {platform === "google" && (
        <StyledSocialButtonLabel>Google</StyledSocialButtonLabel>
      )}
    </StyledSocialButton>
  );
};

export { SocialButton };
