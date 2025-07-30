import { useState } from "react";
import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import { Trans, useTranslation } from "next-i18next"
import { 
    CodeBlock,
    CodeDocDownload,
    CodeScrollable,
    CodeWrapper,
    StyledBlockIconsWrapper,
    StyledBlockIconsWrapperBlock,
    StyledFormatsCodeBlockDesc,
    StyledFormatsCodeBlockHeading,
    StyledFormatsDesc, 
    StyledFormatsHeading, 
    StyledFormatsTab,
    StyledFormatsTabs,
    StyledFormatsTabsBox,
    StyledTextDocumentWrapper,
    StyledWrapperLeftBlock,
    StyledWrapperRightLinks,
    StyledWrapperRigthBlock
} from "./Formats.styled";
import { itemsTab } from "./data/itemsTab";
import { items } from "./data/items";
import { Text } from "@src/components/ui/Text";

const Formats = () => {
    const { t } = useTranslation("document-builder");
    const [activeTab, setActiveTab] = useState(0);
    const result = t(String(itemsTab[activeTab].code));
    
    return (
        <Section
        id="formats-section"
        background="#F5F5F5"
        tabletSpacing={["112px", "88px"]}
        >
            <Container>
                <StyledFormatsHeading
                size={3}
                label={t("ONLYOFFICEDocumentBuilderFeatures")}
                />
                <StyledFormatsDesc
                size={1}
                label={t("SupportsAllPopular")}
                />
                <StyledFormatsTabsBox>
                    <StyledFormatsTabs>
                        {itemsTab.map((item, index) => (
                            <StyledFormatsTab
                            key={index}
                            onClick={() => setActiveTab(index)}
                            $active={activeTab === index}
                            $iconPositionX={item.iconPositionX}
                            >
                                {t(item.heading)}
                            </StyledFormatsTab>
                        ))}
                    </StyledFormatsTabs>
                </StyledFormatsTabsBox>

                <StyledFormatsCodeBlockHeading
                size={4}
                label={t(itemsTab[activeTab].heading)}
                />
                <StyledFormatsCodeBlockDesc
                label={t(itemsTab[activeTab].text)}
                />
                <CodeBlock>
                    <CodeWrapper>
                        <CodeScrollable>
                            <pre className="line-numbers">
                                <code className="language-javascript">
                                   {Array.isArray(result) ? result.join('\n') : result}
                                </code>
                            </pre>
                        </CodeScrollable>
                    </CodeWrapper>
                        <CodeDocDownload
                        label={t("ResultingDocument")}
                        href={itemsTab[activeTab].href}
                        />
                </CodeBlock>
                
                {itemsTab[activeTab].apiLinks && (
                    <StyledTextDocumentWrapper>
                        <StyledWrapperLeftBlock size={3}>
                            <Trans
                            t={t}
                            i18nKey={"TextDocumentAPI"}
                            components={[<Text as="span" key={0} />]}
                            />
                        </StyledWrapperLeftBlock>
                        <StyledWrapperRigthBlock>
                            {items.icons.map((item, idx) => (
                                <StyledWrapperRightLinks 
                                key={idx}
                                label={t(item.label)}
                                href={item.url}
                                target="_blank"
                                textUnderline
                                hover="underline-none"
                                />
                            ))}
                        </StyledWrapperRigthBlock>
                    </StyledTextDocumentWrapper>
                )}
                {itemsTab[activeTab].apiIcons.length > 0 && (
                    <StyledBlockIconsWrapper>
                        {itemsTab[activeTab].apiIcons.map((item, idx) => (
                            <StyledBlockIconsWrapperBlock 
                            key={idx}
                            size={3}
                            label={t(item.label)}
                            width={item.width}
                            widthDesktop={item.widthDesktop}
                            iconPosX={item.iconPosX}
                            paddingLeft={item.paddingLeft}
                            paddingLeftTablet={item.leftIconTablet}
                            leftIcon={item.leftIcon}
                            leftIconDesktop={item.leftIconDesktop}
                            leftIconTablet={item.leftIconTablet}
                            leftIconMobile={item.leftIconMobile}
                            />
                        ))}
                    </StyledBlockIconsWrapper>
                )}
            </Container>
        </Section>
    )
}

export { Formats }