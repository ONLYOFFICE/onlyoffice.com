import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import {
  StyledOtherEditors,
  StyledOtherEditorsWrapper,
  StyledOtherEditorsItems,
  StyledOtherEditorsItem,
  StyledOtherEditorsItemImg,
} from "./OtherEditors.styled";
import { IOtherEditors } from "./OtherEditors.types";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { items } from "./data/items";

const OtherEditors = ({ id, className }: IOtherEditors) => {
  const { t } = useTranslation("Editors");
  const router = useRouter();

  return (
    <StyledOtherEditors
      id={id}
      className={className}
      tabletSmallSpacing={["80px", "80px"]}
    >
      <Container>
        <StyledOtherEditorsWrapper>
          <Heading level={3} label={t("ExploreOtherEditors")} />
          <StyledOtherEditorsItems>
            {items.map((item, index) => (
              <li key={index}>
                <StyledOtherEditorsItem
                  id={`editor-${item.id}`}
                  forwardedAs="a"
                  href={item.url}
                  title={item.name}
                  variant="quaternary"
                  $active={router.pathname === item.url}
                >
                  <StyledOtherEditorsItemImg $id={item.id} />
                  <span>{item.name}</span>
                </StyledOtherEditorsItem>
              </li>
            ))}
          </StyledOtherEditorsItems>
        </StyledOtherEditorsWrapper>
      </Container>
    </StyledOtherEditors>
  );
};

export { OtherEditors };
