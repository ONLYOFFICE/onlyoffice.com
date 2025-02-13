import { IIcon } from "./types";

// arrow-down.svg
const ArrowDownIcon = ({ id, className }: IIcon) => (
  <svg
    id={id}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="8"
    height="5"
    viewBox="0 0 8 5"
    fill="none"
  >
    <path d="M4 5L0.535899 0.499999L7.4641 0.5L4 5Z" fill="#444444" />
  </svg>
);

export { ArrowDownIcon };
