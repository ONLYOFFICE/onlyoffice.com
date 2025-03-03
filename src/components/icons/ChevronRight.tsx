import { IIcon } from "./types";

// chevron-right.svg
const ChevronRightIcon = ({ id, className }: IIcon) => (
  <svg
    id={id}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.5436 11.9975L9.29357 16.2574C8.9035 16.6483 8.90187 17.2838 9.28993 17.6768L9.31699 17.7042C9.70506 18.0972 10.3359 18.0988 10.7259 17.7078L15.7058 12.7165C15.9258 12.496 16.0222 12.1977 15.9949 11.909C15.9767 11.6784 15.8799 11.4531 15.7044 11.2772L10.731 6.2923C10.3409 5.90132 9.71009 5.90294 9.32203 6.29591L9.29496 6.32332C8.9069 6.71629 8.90853 7.3518 9.29861 7.74277L13.5436 11.9975Z"
      fill="#444444"
    />
  </svg>
);

export { ChevronRightIcon };
