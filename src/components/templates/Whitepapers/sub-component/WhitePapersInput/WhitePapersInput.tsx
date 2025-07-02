import { useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { SearchIcon } from "@src/components/icons";

import {
  StyledWhitepapersInput,
  StyledWhitepapersInputLeft,
  StyledWhitepapersInputRight,
  StyledWhitepapersInputSubtitle,
  StyledWhitepapersInputWrapper,
  StyledWhitepapersSection,
} from "./WhitepapersInput.styled";

const WhitepapersInput = ({ value, setValue }: {
  value: string;
  setValue: (value: string) => void
}) => {
  const { t } = useTranslation("whitepapers");

  return (
    <StyledWhitepapersSection
        background="#333"
      >
      <Container maxWidth="1038px">
        <StyledWhitepapersInputWrapper>
          <StyledWhitepapersInputLeft>
            <StyledWhitepapersInputSubtitle
              color="#fff"
              level={6}
              size={6}
              label={t("WhitepapersInputSubtitle")}
            />
          </StyledWhitepapersInputLeft>
          <StyledWhitepapersInputRight>
            <StyledWhitepapersInput
              label={t("WhitepapersInputLabel")}
              id="#whitepapers-input"
              rightSide={<SearchIcon />}
              value={value}
              onChange={(event) => setValue(event.target.value)}
            />
          </StyledWhitepapersInputRight>
        </StyledWhitepapersInputWrapper>
      </Container>
    </StyledWhitepapersSection>
  );
};

export { WhitepapersInput };