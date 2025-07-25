import { StyledContactsTemplate } from "./Contacts.styled";
import { ContactInfo } from "./sections/ContactInfo";
import { Hero } from "./sections/Hero";

const ContactsTemplate = () => {
  return (
    <StyledContactsTemplate>
      <Hero />
      <ContactInfo />
    </StyledContactsTemplate>
  );
};

export { ContactsTemplate };
