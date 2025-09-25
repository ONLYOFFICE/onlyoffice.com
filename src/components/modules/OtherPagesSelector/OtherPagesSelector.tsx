import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import {
  StyledOtherSelector,
  StyledOtherSelectorWrapper,
  StyledOtherSelectorItems,
  StyledOtherSelectorItem,
  StyledOtherSelectorItemImg,
} from "./OtherPagesSelector.styled";
import { IOtherPagesSelector } from "./OtherPagesSelector.types";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { editors, rooms, collaborations } from "./data/items";

const OtherPagesSelector = ({ id, className, withImage, withTitle, page }: IOtherPagesSelector) => {
  const { t } = useTranslation("Tabs");
  const router = useRouter();
  const items = page === "editors" ? editors : page === "rooms" ? rooms : collaborations;

  return (
    <StyledOtherSelector
      id={id}
      className={className}
      tabletSmallSpacing={["80px", "80px"]}
    >
      <Container>
        <StyledOtherSelectorWrapper>
          {withTitle && <Heading level={3} label={t("ExploreOtherEditors")} />}
          <StyledOtherSelectorItems>
            {items.map((item, index) => (
              <li key={index}>
                <StyledOtherSelectorItem
                  id={`${item.id}`}
                  forwardedAs="a"
                  href={item.url}
                  title={t(item.name)}
                  variant="quaternary"
                  $active={router.pathname === item.url}
                >
                  {withImage && <StyledOtherSelectorItemImg $id={item.id} />}
                  <span>{t(item.name)}</span>
                </StyledOtherSelectorItem>
              </li>
            ))}
          </StyledOtherSelectorItems>
        </StyledOtherSelectorWrapper>
      </Container>
    </StyledOtherSelector>
  );
};

export { OtherPagesSelector };
