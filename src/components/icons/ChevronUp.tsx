import { IIcon } from "./types";

// chevron-up.svg
const ChevronUpIcon = ({ id, className }: IIcon) => (
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
      d="M12.0025 11.4564L7.74265 15.7064C7.35168 16.0964 6.71616 16.0981 6.32319 15.71L6.29579 15.683C5.90282 15.2949 5.9012 14.6641 6.29217 14.274L11.2835 9.29417C11.504 9.07416 11.8023 8.97772 12.091 9.00508C12.3216 9.02321 12.5469 9.12008 12.7228 9.29557L17.7077 14.269C18.0987 14.6591 18.0971 15.2899 17.7041 15.6779L17.6767 15.705C17.2837 16.093 16.6482 16.0914 16.2572 15.7013L12.0025 11.4564Z"
      fill="#444444"
    />
  </svg>
);

export { ChevronUpIcon };
