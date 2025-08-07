import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import { Trans, useTranslation } from "next-i18next"
import { 
    StyledHeading,
    StyledBackupWrapper,
    StyledWrapperLeft,
    StyledWrapperRightImg,
    StyledText,
    StyledLink
} from "./Backup.styled";
import { Text } from "@src/components/ui/Text";

const Backup = () => {
    const { t } = useTranslation("security");

    return(
        <Section
        background="#333"
        desktopSpacing={["80px", "80px"]}
        tabletSpacing={["80px", "80px"]}
        tabletSmallSpacing = {["88px", "88px"]}
        mobileSpacing={["48px", "48px"]}
        >
        <Container>
            <StyledBackupWrapper>
                <StyledWrapperLeft>
                    <StyledHeading color="#fff" level={2} label={t("Backup") }/>
                    <StyledText>
                        <Trans
                        t={t}
                        i18nKey={"TheRemoteBackup"}
                        components={[<Text as="strong" key="0"/>]}
                        />
                    </StyledText>
                    <StyledLink
                    label={t("ReadMoreAboutDataBackup")}
                    href="https://helpcenter.onlyoffice.com/tipstricks/data-backup-restore.aspx"
                    color="main"
                    hover="underline-none"
                    target="_blank"
                    textUnderline
                    />
                </StyledWrapperLeft>
                <StyledWrapperRightImg/>
            </StyledBackupWrapper>
        </Container>
        </Section>
    )
}

export { Backup }