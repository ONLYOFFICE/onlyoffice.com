import { StyledWrapper } from "../../MCPServer.styled";
import {
  StyledSection,
  StyledLeftArea,
  GetStartedArea,
  HubsArea,
  StyledScrollGif,
  ButtonsArea,
  StyledText,
  QuestionsImage,
  HubImg,
  StyledLink,
} from "./GetStarted.styled";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";
import { useTranslation, Trans } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Link } from "@src/components/ui/Link";

const GetStarted = () => {
  const { t } = useTranslation("mcp-server");

  return (
    <StyledWrapper>
      <StyledSection>
        <Container>
          <StyledLeftArea>
            <GetStartedArea>
              <Heading level={2} color="#fff">
                {t("GetStartedToday")}
              </Heading>
              <Text>
                {t(
                  "ExperienceThePowerOfAutomationAndCollaborationWithTheONLYOFFICEDocSpaceMCPServer",
                )}
              </Text>
              <ButtonsArea>
                <Button
                  as="a"
                  href="https://github.com/ONLYOFFICE/docspace-mcp"
                  label={t("StartNow")}
                />
                <Button
                  as="a"
                  href="/docspace-developer"
                  label={t("ExploreONLYOFFICEDocSpaceDeveloper")}
                  variant="quinary"
                />
              </ButtonsArea>
            </GetStartedArea>
            <StyledScrollGif $src="/images/templates/mcp-server/get-started/robot1.svg" />
            <HubsArea>
              <Heading level={2} color="#fff">
                {t("BeginYourJourneyFromSpecializedHubs")}
              </Heading>

              <StyledLink href="https://hub.docker.com/mcp/server/onlyoffice-docspace/overview">
                <HubImg $src="/images/templates/mcp-server/get-started/logos.svg" />
                <Text color="main" as="span">mcp | Docker Hub</Text>
              </StyledLink>
            </HubsArea>
            <StyledScrollGif $src="/images/templates/mcp-server/get-started/robot2.svg" />
          </StyledLeftArea>
        </Container>
        <Container maxWidth="432px">
          <QuestionsImage />
          <Heading color="#fff" textAlign="center" level={3}>
            {t("HaveAnyFollowUpQuestions")}
          </Heading>
          <StyledText textAlign="center">
            <Trans
              t={t}
              i18nKey="ContactUsAt"
              components={[
                <Link
                  href="mailto:sales@onlyoffice.com"
                  color="main"
                  key={0}
                />,
              ]}
            />
          </StyledText>
        </Container>
      </StyledSection>
    </StyledWrapper>
  );
};
export { GetStarted };
