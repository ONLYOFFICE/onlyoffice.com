import styled from "styled-components";

export const StyledRoomTabsWrapper = styled.div`
  width: 100%;
  border-top: 1px solid #e2e2e2;
`;

export const StyledRoomTabs = styled.ul`
  display: flex;
  overflow-y: hidden;
  overflow-x: auto;
`;

export const StyledRoomTab = styled.li<{
  $active?: boolean;
}>`
  display: flex;
  text-align: center;
  justify-content: center;
  min-width: 190px;
  width: 100%;
  background-color: ${({ $active }) => ($active ? "#fff" : "#f5f5f5")};
  z-index: ${({ $active }) => ($active ? "100" : "0")};
  position: relative;
  margin: 0 auto;
  transition: box-shadow 0.3s ease, background-color 0.3s ease;

  &:hover {
    background-color: ${({ $active }) => !$active && "#efefef"};
    z-index: 90;
  }

  &:last-child a p {
    border-right: none;
  }

  a {
    display: flex;
    width: 100%;
    font-weight: 600;
    letter-spacing: -0.01em;
    justify-content: center;
    align-items: center;
    color: ${({ $active }) => ($active ? "#FF6F3D" : "initial")};
    padding: 18px 0;

    p {
      width: 100%;
      padding: 18px 12px;
      border-right: ${({ $active }) => ($active ? "none" : "1px solid #ccc")};
    }
  }
`;
