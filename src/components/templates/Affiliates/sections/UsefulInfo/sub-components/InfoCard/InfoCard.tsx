import {
  StyledInfoCard,
  StyledInfoCardContent,
  StyledInfoCardHeading,
  StyledInfoCardImage,
  StyledInfoCardLink,
} from "./InfoCard.styled";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";
import { ICustomBlogCard } from "../../data/items";

const InfoCard = ({ id, heading, text, links }: ICustomBlogCard) => {
  return (
    <StyledInfoCard>
      <StyledInfoCardImage className={id} />
      <StyledInfoCardContent>
        <StyledInfoCardHeading level={5} size={5} label={heading.label} />
        <Text size={3}>{text.label}</Text>
        {links &&
          links.map(({ isDownload, href, label, isExternal }, index) =>
            isDownload ? (
              <StyledInfoCardLink key={index} href={href} download>
                {label}
              </StyledInfoCardLink>
            ) : (
              <Link
                key={index}
                href={href}
                label={label}
                color="main"
                textUnderline
                hover="underline-none"
                target={isExternal ? "_blank" : undefined}
              />
            ),
          )}
      </StyledInfoCardContent>
    </StyledInfoCard>
  );
};

export { InfoCard };
