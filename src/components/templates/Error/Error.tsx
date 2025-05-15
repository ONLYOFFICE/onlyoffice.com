import { useTranslation } from "next-i18next";
import {
  StyledError,
  StyledErrorWrapper,
  StyledErrorImg,
  StyledErrorHeading,
  StyledErrorDescription,
} from "./Error.styled";
import { IError } from "./Error.types";
import { Container } from "@src/components/ui/Container";
import { Button } from "@src/components/ui/Button";

const ErrorTemplate = ({ heading, description }: IError) => {
  const { t } = useTranslation("error");

  return (
    <StyledError forwardedAs="div">
      <Container>
        <StyledErrorWrapper>
          <StyledErrorImg />
          <StyledErrorHeading level={1} label={heading} />
          <StyledErrorDescription color="#555555">
            {description}
          </StyledErrorDescription>
          <Button as="a" href="/" label={t("GoToHomePage")} />
        </StyledErrorWrapper>
      </Container>
    </StyledError>
  );
};

export { ErrorTemplate };
