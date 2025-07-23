import { useTranslation, Trans } from "next-i18next";
import {
  StyledCareDataHeading,
  StyledCareDataItems,
  StyledCareDataItemImage,
} from "./CareData.styled";
import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";
import { items } from "./data/items";

const CareData = () => {
  const { t } = useTranslation("converter");

  return (
    <Section background="#f5f5f5">
      <Container>
        <StyledCareDataHeading level={2} textAlign="center">
          <Trans
            t={t}
            i18nKey="WeAreCareAboutYourData"
            components={[<Text as="span" color="#FF6F3D" key={0} />]}
          />
        </StyledCareDataHeading>

        <StyledCareDataItems>
          {items.map((item, index) => (
            <div key={index}>
              <StyledCareDataItemImage
                $imageUrl={item.image.url}
                $imagePositionX={item.image.positionX}
                $imagePositionY={item.image.positionY}
              />
              <Text size={2} textAlign="center">
                <Trans
                  t={t}
                  i18nKey={String(item.text)}
                  components={[
                    <Link
                      href="https://github.com/ONLYOFFICE/DocumentServer"
                      target="_blank"
                      color="main"
                      textUnderline
                      hover="underline-none"
                      key="0"
                    />,
                  ]}
                />
              </Text>
            </div>
          ))}
        </StyledCareDataItems>
      </Container>
    </Section>
  );
};

export { CareData };
