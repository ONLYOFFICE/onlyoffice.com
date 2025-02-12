interface IMain {
  children: React.ReactNode;
}

const Main = ({ children }: IMain) => {
  return <main>{children}</main>;
};

export { Main };
