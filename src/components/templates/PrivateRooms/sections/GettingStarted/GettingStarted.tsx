import { Container } from "@src/components/ui/Container";
import { Trans, useTranslation } from "next-i18next";
import {
  StyledSection,
  StyledGettingStartedHeading,
  StyledGettingStartedWrapper,
  StyledGettingStartedWrapperLeft,
  StyledGettingStartedWrapperRight,
  StyledWrapperLeftText,
  StyledWrapperRightBlock,
  StyledWrapperRightBlockHeading,
  StyledWrapperRightBlockText,
  StyledButton,
} from "./GettingStarted.styled";
import { Link } from "@src/components/ui/Link";
import { items } from "./data/items";
import { CardForm } from "./sub-components/CardForm";
import { useState } from "react";
import { ICardDatasheetsItemsProps } from "./GettingStarted.types";
import { ILocale } from "@src/types/locale";

const GettingStarted = ({
  download_url,
  locale,
}: ICardDatasheetsItemsProps & ILocale) => {
  const { t } = useTranslation("private-rooms");
  const [openModal, setOpenModal] = useState(false);

  return (
    <StyledSection>
      <Container>
        <StyledGettingStartedHeading label={t(items.title)} />
        <StyledGettingStartedWrapper>
          <StyledGettingStartedWrapperLeft>
            {items.text.map((item, idx) => (
              <StyledWrapperLeftText key={idx}>
                <Trans
                  t={t}
                  i18nKey={item.heading}
                  components={item.textLinks?.map((link, index) => (
                    <Link
                      key={index}
                      href={link.url}
                      color="main"
                      hover="underline"
                      target={link.isExternal ? "_blank" : undefined}
                      textUnderline
                    />
                  ))}
                />
              </StyledWrapperLeftText>
            ))}
          </StyledGettingStartedWrapperLeft>
          <StyledGettingStartedWrapperRight>
            <StyledWrapperRightBlock>
              <StyledWrapperRightBlockHeading label={t(items.btnTitle)} />
              <StyledWrapperRightBlockText label={t(items.btnSubTitle)} />
              <StyledButton
                label={t(items.btnText)}
                fullWidth
                variant="tertiary"
                onClick={() => setOpenModal(true)}
              />
            </StyledWrapperRightBlock>
          </StyledGettingStartedWrapperRight>
        </StyledGettingStartedWrapper>
        {openModal && (
          <CardForm
            openModal={openModal}
            setOpenModal={setOpenModal}
            download_url={download_url}
            locale={locale}
          />
        )}
      </Container>
    </StyledSection>
  );
};

export { GettingStarted };
