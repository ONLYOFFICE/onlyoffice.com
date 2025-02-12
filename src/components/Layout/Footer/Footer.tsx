import { StyledFooter } from "./Footer.styled";

interface IFooter {
  children: React.ReactNode;
}

const Footer = ({ children }: IFooter) => {
  return <StyledFooter>{children}</StyledFooter>;
};

export { Footer };
