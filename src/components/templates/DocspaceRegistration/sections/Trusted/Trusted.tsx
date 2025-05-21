import { useTranslation } from "next-i18next";
import { Trans } from "react-i18next";
import {
  StyledTrusted,
  StyledTrustedWrapper,
  StyledTrustedContent,
  StyledTrustedBox,
  StyledTrustedIcon,
  StyledTrustedText,
  StyledAwardsList,
  StyledAwardsItem,
  StyledAwardsItemIcon
} from "./Trusted.styled";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";

const Trusted = () => {
  const { t } = useTranslation("docspace-registration");

  const awards = [
    { id: "cc", title: "Capterra" },
    { id: "sd", title: "Software Advice" },
    { id: "ct", title: "GetApp" }
  ];

  return (
    <StyledTrusted>
      <Container maxWidth="1277px">
        <StyledTrustedWrapper>
          <StyledTrustedContent>
            <StyledTrustedBox>
              <StyledTrustedIcon />
              <StyledTrustedText>
                Trusted by <span style={{color: "#FF6F3D", fontSize: "28px", fontWeight: 700}}>more than 10 million</span> users worldwide
              </StyledTrustedText>
            </StyledTrustedBox>
            
            <StyledAwardsList>
              {awards.map((award) => (
                <StyledAwardsItem key={award.id}>
                  <StyledAwardsItemIcon className={award.id} title={award.title} />
                </StyledAwardsItem>
              ))}
            </StyledAwardsList>
          </StyledTrustedContent>
        </StyledTrustedWrapper>
      </Container>
    </StyledTrusted>
  );
};

export { Trusted };
