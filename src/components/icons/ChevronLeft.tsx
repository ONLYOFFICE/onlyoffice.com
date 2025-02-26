import { IIcon } from "./types";

// chevron-left.svg
const ChevronLeftIcon = ({ id, className }: IIcon) => (
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
      d="M10.4564 11.9975L14.7064 16.2574C15.0964 16.6483 15.0981 17.2838 14.71 17.6768L14.683 17.7042C14.2949 18.0972 13.6641 18.0988 13.274 17.7078L8.29417 12.7165C8.07416 12.496 7.97772 12.1977 8.00508 11.909C8.02321 11.6784 8.12008 11.4531 8.29557 11.2772L13.269 6.2923C13.6591 5.90132 14.2899 5.90294 14.6779 6.29591L14.705 6.32332C15.093 6.71629 15.0914 7.3518 14.7013 7.74277L10.4564 11.9975Z"
      fill="#444444"
    />
  </svg>
);

export { ChevronLeftIcon };
