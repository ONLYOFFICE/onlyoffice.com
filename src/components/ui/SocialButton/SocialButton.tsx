import { ISocialButton } from "./SocialButton.types";
import { StyledButtonIcon, StyledButtonLabel } from "./SocialButton.styled";

const SocialButton = ({ id, type, href }: ISocialButton) => {
  return (
    <StyledButtonIcon id={id} href={href} $type={type}>
      {type === "google" && <StyledButtonLabel>Google</StyledButtonLabel>}
    </StyledButtonIcon>
  );
};

export { SocialButton };
