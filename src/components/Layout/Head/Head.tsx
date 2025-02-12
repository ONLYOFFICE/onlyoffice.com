interface IHead {
  children: React.ReactNode;
}

const Head = ({ children }: IHead) => {
  return <>{children}</>;
};

export { Head };
