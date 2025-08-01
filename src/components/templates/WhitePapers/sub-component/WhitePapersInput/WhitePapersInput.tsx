import { useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { SearchIcon } from "@src/components/icons";

import {
  StyledWhitePapersInput,
  StyledWhitePapersInputLeft,
  StyledWhitePapersInputRight,
  StyledWhitePapersInputSubtitle,
  StyledWhitePapersInputWrapper,
  StyledWhitePapersSection,
} from "./WhitePapersInput.styled";

const WhitePapersInput = ({ value, setValue }: {
  value: string;
  setValue: (value: string) => void
}) => {
  const { t } = useTranslation("whitepapers");

  return (
    <StyledWhitePapersSection background="#333">
      <Container maxWidth="1038px">
        <StyledWhitePapersInputWrapper>
          <StyledWhitePapersInputLeft>
            <StyledWhitePapersInputSubtitle
              color="#fff"
              level={6}
              size={6}
              label={t("TechnicalContent")}
            />
          </StyledWhitePapersInputLeft>
          <StyledWhitePapersInputRight>
            <StyledWhitePapersInput
              label={t("SearchWhitePaper")}
              id="#whitepapers-input"
              rightSide={<SearchIcon />}
              value={value}
              onChange={(event) => setValue(event.target.value)}
            />
          </StyledWhitePapersInputRight>
        </StyledWhitePapersInputWrapper>
      </Container>
    </StyledWhitePapersSection>
  );
};

export { WhitePapersInput };