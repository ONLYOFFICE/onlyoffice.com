import { ISocialButton } from "./SocialButton.type";
import { StyledButtonIcon, StyledButtonLabel } from "./SocialButton.styled";

const SocialButton = ({ type, href }: ISocialButton) => {
  return (
    <StyledButtonIcon href={href} $type={type}>
      {type === "google" && <StyledButtonLabel>Google</StyledButtonLabel>}
    </StyledButtonIcon>
  );
};

export { SocialButton };
