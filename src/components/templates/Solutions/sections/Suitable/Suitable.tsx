import {
  StyledSection,
  StyledContainer,
  IndustryList,
  IndustryItem,
} from "./Suitable.styled";
import { Heading } from "@src/components/ui/Heading";
import { useTranslation } from "next-i18next";
import { industryItems } from "./data/items";

const Suitable = () => {
  const { t } = useTranslation("solutions");

  return (
    <StyledSection background="#444444">
      <StyledContainer>
        <Heading color="#ffffff" level={2}>
          {t("SuitableForIndustry")}
        </Heading>
        <IndustryList>
          {[industryItems.slice(0, 4), industryItems.slice(4)].map((col, i) => (
            <div key={i}>
              {col.map((item, index) => (
                <IndustryItem
                  key={index}
                  label={t(item.title)}
                  href={item.link}
                  $positionX={item.positionX}
                />
              ))}
            </div>
          ))}
        </IndustryList>
      </StyledContainer>
    </StyledSection>
  );
};

export { Suitable };
