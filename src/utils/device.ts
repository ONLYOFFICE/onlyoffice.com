const size = {
  desktopL: "1300px",
  desktop: "1200px",
  tablet: "1024px",
  tabletS: "768px",
  mobile: "592px",
  mobileS: "375px",
};

const device = {
  desktopL: `screen and (max-width: ${size.desktop})`,
  desktop: `screen and (max-width: ${size.desktop})`,
  tablet: `screen and (max-width: ${size.tablet})`,
  tabletS: `screen and (max-width: ${size.tabletS})`,
  mobile: `screen and (max-width: ${size.mobile})`,
  mobileS: `screen and (max-width: ${size.mobileS})`,
};

export { device };
