import styled from "styled-components";

const StyledCarouselButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50%;
  width: 56px;
  height: 56px;
  background-color: transparent;
  transition:
    background-color 0.2s,
    box-shadow 0.2s;
  cursor: pointer;

  svg {
    path {
      transition: fill 0.2s;
    }
  }

  &:hover {
    box-shadow: 0px 20px 50px 0px rgba(85, 85, 85, 0.15);
    background-color: #ffffff;

    svg {
      path {
        fill: #ff6f3d;
      }
    }
  }
`;

export { StyledCarouselButton };
