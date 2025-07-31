import { useEffect, useRef, useState } from "react";
import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import { Trans, useTranslation } from "next-i18next"
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-javascript";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import {
    CodeBlock,
    CodeDocDownload,
    CodeScrollable,
    CodeWrapper,
    StyledBlockIconsWrapperBlockSec,
    StyledBlockIconsWrapperBlockText,
    StyledBlockIconsWrapperRow,
    StyledBlockIconsWrapperSec,
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
import { 
    IApiIcon, 
    ICodeBlockProps 
} from "./Formats.types";
import { itemsTab } from "./data/itemsTab";
import { items } from "./data/items";
import { Text } from "@src/components/ui/Text";

const Formats = () => {
    const { t } = useTranslation("document-builder");
    const [activeTab, setActiveTab] = useState(0);
    const result = t(String(itemsTab[activeTab].code));

    // Get window size
    function useWindowWidth() {
    const [width, setWidth] = useState(
        typeof window !== "undefined" ? window.innerWidth : 1920
    );
    useEffect(() => {
        const handler = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handler);
        return () => window.removeEventListener("resize", handler);
    }, []);
    return width;
}
    // Get elements in the StyledBlockIconsWrapperRow component and switch blocks
    function adaptApiIconsForTablet(apiIcons: IApiIcon[], tabCode?: string, width?: number) {
    if (tabCode === "xlsxBuilder" && width && width <= 1023) {
        const icons = apiIcons.map(icon => ({
            ...icon,
            row: [...icon.row]
        }));
        const thirdRow = icons[2]?.row;
        if (thirdRow) {
            const renderChartsIdx = thirdRow.findIndex(item => item.label === "RenderCharts");
            if (renderChartsIdx !== -1) {
                const [renderCharts] = thirdRow.splice(renderChartsIdx, 1);
                const secondRow = icons[1]?.row;
                if (secondRow) {
                    const mergeIdx = secondRow.findIndex(item => item.label === "Merge");
                    if (mergeIdx !== -1) {
                        secondRow.splice(mergeIdx, 0, renderCharts);
                    } else {
                        secondRow.unshift(renderCharts);
                    }
                }
            }
        }
        return icons;
    }
    if (tabCode === "pptxBuilder" && width && width <= 1023) {
        const icons = apiIcons.map(icon => ({
            ...icon,
            row: [...icon.row]
        }));
        const secRow = icons[1]?.row;
        if (secRow) {
            const parserIdx = secRow.findIndex(item => item.label === "Parser");
            if (parserIdx !== -1) {
                const [parser] = secRow.splice(parserIdx, 1);
                const firstRow = icons[0]?.row;
                if (firstRow) {
                    const splitIdx = firstRow.findIndex(item => item.label === "Split");
                    if (splitIdx !== -1) {
                        firstRow.splice(splitIdx + 1, 0, parser);
                    } else {
                        firstRow.push(parser);
                    }
                }
            }
        }
        return icons;
    }
    return apiIcons;
}

    const windowWidth = useWindowWidth();
    const apiIconsToRender = adaptApiIconsForTablet(
    itemsTab[activeTab].apiIcons,
    itemsTab[activeTab].code,
    windowWidth
);

    function DemoCodeBlock({ code, language = "javascript", docHref, docLabel }: ICodeBlockProps) {
    const codeRef = useRef(null);

    useEffect(() => {
        if (codeRef.current) {
        Prism.highlightElement(codeRef.current);
        }
    }, [code, language]);

    return (
        <CodeBlock>
            <CodeWrapper>
                <CodeScrollable>
                <pre className="line-numbers">
                    <code ref={codeRef} className={`language-${language}`}>
                    {code}
                    </code>
                </pre>
                </CodeScrollable>
            </CodeWrapper>
            <CodeDocDownload label={docLabel} href={docHref} />
        </CodeBlock>
    );
    }

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
                <DemoCodeBlock
                code={Array.isArray(result) ? result.join('\n') : result}
                language="javascript"
                docHref={itemsTab[activeTab].href}
                docLabel={t("ResultingDocument")}
                />

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
                    <StyledBlockIconsWrapperSec>
                        {apiIconsToRender.map((itemRow, idx) => (
                            <StyledBlockIconsWrapperRow key={idx}>
                                {itemRow.row.map((item, i) => (
                                    <StyledBlockIconsWrapperBlockSec
                                        key={i}
                                        width={item.width}
                                        widthTablet={item.widthTablet}
                                        widthMobile={item.widthMobile}
                                        minWidth={item.minWidth}
                                    >
                                        <StyledBlockIconsWrapperBlockText
                                            label={t(item.label)}
                                            iconPosX={item.iconPosX}
                                        />
                                    </StyledBlockIconsWrapperBlockSec>
                                ))}
                            </StyledBlockIconsWrapperRow>
                        ))}
                    </StyledBlockIconsWrapperSec>
                )}
            </Container>
        </Section>
    )
}

export { Formats }