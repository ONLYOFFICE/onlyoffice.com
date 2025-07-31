import { Section } from "@src/components/ui/Section";
import { useTranslation } from "next-i18next"
import { items } from "./data";
import { 
    StyledContainer,
    BlockCard, 
    BlockCardBg, 
    BlockCardText, 
    BlockCardWrapper, 
    StyledHeading
} from "./Benefits.styled";
import { Button } from "@src/components/ui/Button";

const Benefits = () => {
    const { t } = useTranslation("technology-partners");

    return (
        <Section id="part-benefits">
            <StyledContainer>
                <StyledHeading
                textAlign="center" 
                label={t(items.title)}
                />
                <BlockCardWrapper>
                    {items.cardText.map((item, idx) => (
                    <BlockCard key={idx}>
                        <BlockCardBg className="block_card_bg"/>
                        <BlockCardText
                        label={t(item.label)}
                        />
                    </BlockCard>
                    ))}
                </BlockCardWrapper>
                <Button as="a" label={t(items.btn.label)} href={items.btn.href}/>
            </StyledContainer>
        </Section>
    );
};

export { Benefits }