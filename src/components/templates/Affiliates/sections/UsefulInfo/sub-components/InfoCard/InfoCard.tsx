import {
  StyledInfoCard,
  StyledInfoCardContent,
  StyledInfoCardHeading,
  StyledInfoCardImage,
  StyledInfoCardLink,
  StyledInfoCardText,
} from "./InfoCard.styled";
import { IInfoCard } from "./InfoCard.types";

const InfoCard = ({ id, heading, text, link }: IInfoCard) => {
  return (
    <StyledInfoCard>
      <StyledInfoCardImage className={id} />
      <StyledInfoCardContent>
        <StyledInfoCardHeading level={4} label={heading} />
        <StyledInfoCardText size={3}>{text.label}</StyledInfoCardText>
        {link && (
          <StyledInfoCardLink
            href={link.href}
            label={link.label}
            color="main"
            textUnderline
            hover="underline-none"
            target={link.isExternal ? "_blank" : undefined}
            download={link.isDownload}
          />
        )}
      </StyledInfoCardContent>
    </StyledInfoCard>
  );
};

export { InfoCard };
