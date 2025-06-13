import styled, { keyframes } from "styled-components";

const circle_left = keyframes`
    0% {
        transform: rotate(0deg) translate(-117px) rotate(0deg);
    }
    5%{
        transform: rotate(0deg) translate(-117px) rotate(0deg);
    }
    45%{
        transform: rotate(180deg) translate(-117px) rotate(-180deg);
    }
    55% {
        transform: rotate(180deg) translate(-117px) rotate(-180deg);
    }
    95%{
        transform: rotate(360deg) translate(-117px) rotate(-360deg);
    }
    100% {
        transform: rotate(360deg) translate(-117px) rotate(-360deg);
    }
`;

const circle_right = keyframes`
    0% {
        transform: rotate(0deg) translate(117px) rotate(0deg);
    }
    5%{
        transform: rotate(0deg) translate(117px) rotate(0deg);
    }
    45%{
        transform: rotate(180deg) translate(117px) rotate(-180deg);
    }
    55% {
        transform: rotate(180deg) translate(117px) rotate(-180deg);
    }
    95%{
        transform: rotate(360deg) translate(117px) rotate(-360deg);
    }
    100% {
        transform: rotate(360deg) translate(117px) rotate(-360deg);
    }
`;

export const StyledLoadingSvg = styled.div`
  svg {
    width: 300px;
    height: 300px;
    
    #Left_doc {
      animation: ${circle_left} 10s ease-in-out infinite;
    }

    #Right_doc {
      animation: ${circle_right} 10s ease-in-out infinite;
    }
  }
`;
