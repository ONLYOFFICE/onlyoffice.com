interface IAdventAnnounce {
  children: React.ReactNode;
}

const AdventAnnounce = ({ children }: IAdventAnnounce) => {
  return <>{children}</>;
};

export { AdventAnnounce };
