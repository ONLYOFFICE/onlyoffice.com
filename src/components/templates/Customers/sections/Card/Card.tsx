import { useTranslation } from "next-i18next";
import { useState } from "react";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { ICustomers } from "../../Customers.types";
import { useFixUrl } from "./utils/useFixUrl";

import { StyledCardButton, StyledCardHeading, StyledCardImg, StyledCardItem, StyledCardItemWrapper, StyledCardLink, StyledCardList } from "./Card.styled";

const Card = ({ customers }: ICustomers) => {
  const { t } = useTranslation("customers");
  const { fixUrlData } = useFixUrl({customers});
  const [showMore, setShowMore] = useState<boolean>(true);

  return (
    <Section background="#F9F9F9">
      <Container maxWidth="1007px">
        <StyledCardList>
          {fixUrlData.map((item) => (
            <StyledCardItemWrapper key={item.id} $showMore={showMore}>
              <StyledCardItem href={item.url} target="_blank">
                <StyledCardImg $imgUrl={item.img?.[0]?.url} />
                <StyledCardHeading label={item.title} level={4} size={5} />
              </StyledCardItem>
              {item.url_pdf &&
                <StyledCardLink
                  href={item.url_pdf?.[0]?.url}
                  target="_blank"
                  download
                  label={t("DownloadPDF")}
                  color="main"
                  textUnderline={true}
                  hover="underline-none"
                />
              }
            </StyledCardItemWrapper>
          ))}
        </StyledCardList>
        {fixUrlData.length > 6 && (
          <StyledCardButton
            variant="tertiary"
            borderRadius="3px"
            label={showMore ? t("TrustedButtonShowMore") : t("TrustedButtonShowLess")}
            onClick={() => setShowMore(!showMore)}
          />
        )}
      </Container>
    </Section>
  );
};

export { Card };