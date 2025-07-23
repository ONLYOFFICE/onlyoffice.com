interface IHeader {
  children: React.ReactNode;
}

const Header = ({ children }: IHeader) => {
  return <>{children}</>;
};

export { Header };
