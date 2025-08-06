import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import { Trans, useTranslation } from "next-i18next"
import { 
    PrivateRoomBlock, 
    StyledPrivateBlockHeading, 
    StyledPrivateBlockText, 
    StyledPrivateCardArea, 
    StyledPrivateCardColLeft, 
    StyledPrivateCardColRight, 
    StyledPrivateCardRow,
    StyledPrivateCardAreaAdaptive
} from "./PrivateBlock.styled";
import { Text } from "@src/components/ui/Text";
import { items_first, items_second } from "./data/items";

const PrivateBlock = () => {
    const { t } = useTranslation("private-rooms");

    return(
        <Section
        background="#f5f5f5"
        desktopSpacing={["0", "112px"]}
        tabletSpacing={["0", "88px"]}
        tabletSmallSpacing={["0", "80px"]}
        mobileSpacing={["0", "48px"]}
        >
            <Container>
                <PrivateRoomBlock>
                    <StyledPrivateBlockHeading>
                        <Trans
                        t={t}
                        i18nKey={"WhatYouCan"}
                        components={[<Text as="span" key="0" color="#FF6F3D"/>]}
                        />
                    </StyledPrivateBlockHeading>
                    <StyledPrivateBlockText
                    label={t("ToMakeSureYourData")}
                    />
                    <StyledPrivateCardArea>
                        {items_first.map(({ text }, blockIdx) =>
                        text.map(([leftKey, rightKey], rowIdx) => (
                            <StyledPrivateCardRow key={`${blockIdx}-${rowIdx}`}>
                            <StyledPrivateCardColLeft>
                                <Trans t={t} i18nKey={leftKey} />
                            </StyledPrivateCardColLeft>
                            <StyledPrivateCardColRight>
                                <Trans t={t} i18nKey={rightKey} />
                            </StyledPrivateCardColRight>
                            </StyledPrivateCardRow>
                        ))
                        )}
                    </StyledPrivateCardArea>
                    <StyledPrivateCardAreaAdaptive>
                        {items_second.map(({ text }, index) =>
                        text.map(([leftKey], rowIndex) => (
                            <StyledPrivateCardRow key={`${index}-${rowIndex}`}>
                            <StyledPrivateCardColLeft>
                                <Trans t={t} i18nKey={leftKey} />
                            </StyledPrivateCardColLeft>
                            </StyledPrivateCardRow>
                        ))
                        )}
                    </StyledPrivateCardAreaAdaptive>
                    <StyledPrivateCardAreaAdaptive>
                        {items_second.map(({ textSec }, index) =>
                        textSec.map(([leftKey], rowIndex) => (
                            <StyledPrivateCardRow key={`${index}-${rowIndex}`}>
                            <StyledPrivateCardColRight>
                                <Trans t={t} i18nKey={leftKey} />
                            </StyledPrivateCardColRight>
                            </StyledPrivateCardRow>
                        ))
                        )}
                    </StyledPrivateCardAreaAdaptive>
                </PrivateRoomBlock>
            </Container>
        </Section>
    );
};

export { PrivateBlock }