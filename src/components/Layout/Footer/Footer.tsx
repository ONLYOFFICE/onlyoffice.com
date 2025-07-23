interface IFooter {
  children: React.ReactNode;
}

const Footer = ({ children }: IFooter) => {
  return <>{children}</>;
};

export { Footer };
