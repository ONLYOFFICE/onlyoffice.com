import React from "react";
import { Button, ButtonContainer } from "./SocialButtons.styled";
import { ISocialButtonProps } from "./SocialButtons.type";

const SocialButtons: React.FC<{ buttons: ISocialButtonProps[] }> = ({ buttons }) => {
  return (
    <ButtonContainer>
      {buttons.map((button, index) => (
        <Button key={index}>
          <img src={button.icon} alt={button.label} />
          {button.label && <span>{button.label}</span>}
        </Button>
      ))}
    </ButtonContainer>
  );
};

export default SocialButtons;
