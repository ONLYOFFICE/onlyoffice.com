import { useTranslation } from "next-i18next";
import {
  StyledMarquee,
  StyledMarqueeWrapper,
  StyledMarqueeImg,
  StyledMarqueeItem,
  StyledMarqueeText,
} from "./Marquee.styled";
import { logos } from "../../data/logos";

const Marquee = () => {
  const { t } = useTranslation("contribute");

  return (
    <StyledMarquee>
      <StyledMarqueeWrapper>
        {[...logos, ...logos].map((item, index) => (
          <StyledMarqueeItem key={index} href={item.href}>
            <StyledMarqueeImg src={item.url} alt={item.id} />
            <StyledMarqueeText
              forwardedAs="div"
              fontSize="14px"
              lineHeight="20px"
              color="main"
              textAlign="center"
              textDecoration="underline"
              label={t("More")}
            />
          </StyledMarqueeItem>
        ))}
      </StyledMarqueeWrapper>
    </StyledMarquee>
  );
};

export { Marquee };
