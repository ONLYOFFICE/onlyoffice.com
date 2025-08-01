import { StyledInfoCard } from "./InfoCard.styled";
import { IInfoCard } from "./InfoCard.types";

const InfoCard = ({ icon, link, text }: IInfoCard) => {
  return (
    <StyledInfoCard
      $iconUrl={icon.url}
      $iconPositionX={icon.positionX}
      $iconPositionY={icon.positionY}
      href={link.href}
      target={link.isExternal ? "_blank" : undefined}
    >
      <div>{text}</div>
    </StyledInfoCard>
  );
};

export { InfoCard };
