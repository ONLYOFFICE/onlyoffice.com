import { Container } from "@src/components/ui/Container";
import { Trans, useTranslation } from "next-i18next"
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
    StyledQuoteModal,
} from "./GettingStarted.styled";
import { Link } from "@src/components/ui/Link";
import { items } from "./data/items";
import {
    IQuoteModalApiRequest, 
    IQuoteModalFormData, 
    IQuoteModalPipedriveRequest, 
    IQuoteModalSendEmailRequest, 
    QuoteModal
} from "@src/components/widgets/pricing/QuoteModal";
import { useState } from "react";
import { ILocale } from "@src/types/locale";

const GettingStarted = ( {locale}: ILocale) => {
    const { t } = useTranslation("private-rooms");

    const initialQuoteFormData: IQuoteModalFormData = {
        fullName: "",
        email: "",
        phone: "hidden",
        companyName: "",
        hCaptcha: null,
      };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [quoteFormData, setQuoteFormData] = useState(initialQuoteFormData);

    const apiRequest = async (params: IQuoteModalApiRequest) => {
        const response = await fetch("/api/private-rooms", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(params),
        });
    
        return response.json();
      };

    const sendEmailRequest = async (params: IQuoteModalSendEmailRequest) => {
        const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(params),
        });

        return response.json();
    };

    const pipedriveRequest = async (params : IQuoteModalPipedriveRequest) => {
        const response = await fetch("/api/pipedrive", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(params),
        });
    
        return response.json();
      };

    return(
        <StyledSection>
            <Container>
                <StyledGettingStartedHeading 
                    label={t(items.title)}
                />
                <StyledGettingStartedWrapper>
                    <StyledGettingStartedWrapperLeft>
                            {items.text.map((item, idx) => (
                                <StyledWrapperLeftText>
                                <Trans
                                    key={idx}
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
                            <StyledWrapperRightBlockHeading 
                            label={t(items.btnTitle)} />
                            <StyledWrapperRightBlockText label={t(items.btnSubTitle)}/>
                            <StyledButton 
                            label={t(items.btnText)}
                            fullWidth
                            variant="tertiary"
                            onClick={() => setIsModalOpen(true)}
                            />
                        </StyledWrapperRightBlock>
                    </StyledGettingStartedWrapperRight>
                </StyledGettingStartedWrapper>
                <StyledQuoteModal>
                <QuoteModal
                locale={locale}
                isOpen={isModalOpen}
                heading={t("FillOutThisForm")}
                byClickedText={
                <Trans
                    t={t}
                    i18nKey="GetItNowText"
                    components={[
                    <Link
                        key="0"
                        href="https://help.onlyoffice.co/Products/Files/doceditor.aspx?fileid=6615734&doc=cy9XcGc5TXNONjVTMkNrR2NZUEVTT2E1Y1FDZGVRQ1YvOTJYTnpkZ3JEWT0_IjY2MTU3MzQi0"
                        target="_blank"
                        color="main"
                        textUnderline
                        hover="underline-none"
                    />,
                    <Link
                        key="1"
                        href="https://help.onlyoffice.co/products/files/doceditor.aspx?fileid=5048502&doc=SXhWMEVzSEYxNlVVaXJJeUVtS0kyYk14YWdXTEFUQmRWL250NllHNUFGbz0_IjUwNDg1MDIi0&_ga=2.101739969.1105072466.1587625676-1002786878.1584771261"
                        target="_blank"
                        color="main"
                        textUnderline
                        hover="underline-none"
                    />,
                    ]}
                />
                }
                initialFormData={{}}
                initialQuoteFormData={initialQuoteFormData}
                setFormData={()=> {}}
                quoteFormData={quoteFormData}
                setQuoteFormData={setQuoteFormData}
                buttonLabel={t("Download")}
                apiRequest={apiRequest}
                sendEmailRequest={sendEmailRequest}
                pipedriveRequest={pipedriveRequest}
                onClose={() => setIsModalOpen(false)}
                />
                </StyledQuoteModal>
            </Container>
        </StyledSection>
    )
}

export { GettingStarted };