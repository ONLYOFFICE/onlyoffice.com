import { Container } from "@src/components/ui/Container";
import { StyledActionsContent } from "./Actions.styled";

const Actions = () => {
  return (
    <Container>
      <StyledActionsContent>
        <iframe
          src="https://site.docs.onlyoffice.com/8.3.3-0d10b80972d36ff5a943a921d724982a/web-apps/apps/documenteditor/main/index.html?_dc=8.3.3-18&lang=en&customer=ONLYOFFICE&type=desktop&frameEditorId=editorPlaceholder&isForm=false&parentOrigin=https://www.onlyoffice.com&fileType=docx"
          width="100%"
          height="100%"
          name="frameEditor"
          allow="autoplay; camera; microphone; display-capture; clipboard-write;"
        ></iframe>
      </StyledActionsContent>
    </Container>
  );
};

export { Actions };
