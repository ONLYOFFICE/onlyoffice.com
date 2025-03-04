import React from "react";
import { ISocialButton } from "./SocialButton.type";
import { StyledButtonIcon, StyledButtonLabel } from "./SocialButton.styled";

const SocialButton = ({ icon, href }: ISocialButton) => {
  return (
    <StyledButtonIcon href={href} type={icon}>
      {icon === "google" && <StyledButtonLabel>Google</StyledButtonLabel>}
    </StyledButtonIcon>
  );
};

export { SocialButton };
