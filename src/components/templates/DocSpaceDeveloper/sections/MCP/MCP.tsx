import { Button } from "@src/components/ui/Button";
import {
  StyledMCP,
  StyledLeftArea,
  StyledHeading,
  StyledRightArea,
  StyledSection,
} from "./MCP.styled";
import { Text } from "@src/components/ui/Text";
import { useTranslation } from "next-i18next";

const MCP = () => {
  const { t } = useTranslation("docspace-developer");

  return (
    <StyledSection background="#181C1E" tabletSmallSpacing={["64px", "88px"]} mobileSpacing={["24px", "48px"]}>
      <StyledMCP maxWidth="1120px">
        <StyledLeftArea>
          <StyledHeading color="#fff" level={2}>
            {t("MCPHeading")}
          </StyledHeading>
          <Text fontSize="18px" color="#fff">{t("MCPDescription")}</Text>
          <Button
            as="a"
            href="/mcp-server"
            label={t("LearnMore")}
            variant="quinary"
          />
        </StyledLeftArea>
        <StyledRightArea />
      </StyledMCP>
    </StyledSection>
  );
};

export { MCP };
