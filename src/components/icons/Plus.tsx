import { IIcon } from "./types";

// plus.svg
const PlusIcon = ({ id, className }: IIcon) => (
  <svg
    id={id}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.5 17C13.5 17.5523 13.0523 18 12.5 18C11.9477 18 11.5 17.5523 11.5 17V13H7.5C6.94772 13 6.5 12.5523 6.5 12C6.5 11.4477 6.94772 11 7.5 11H11.5V7C11.5 6.44772 11.9477 6 12.5 6C13.0523 6 13.5 6.44772 13.5 7V11H17.5C18.0523 11 18.5 11.4477 18.5 12C18.5 12.5523 18.0523 13 17.5 13H13.5V17Z"
      fill="#444444"
    />
  </svg>
);

export { PlusIcon };
