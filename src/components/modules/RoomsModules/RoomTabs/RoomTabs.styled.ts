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
  position: relative;
  margin: 0 auto;
  transition: box-shadow 0.3s ease, background-color 0.3s ease;

  &:hover {
    background-color: ${({ $active }) => !$active && "#efefef"};
  }

  &:last-child a::after {
    display: none;
  }

  a {
    display: flex;
    width: 100%;
    font-size: 13px;
    line-height: 1.5em;
    font-weight: 600;
    letter-spacing: -0.01em;
    justify-content: center;
    align-items: center;
    color: ${({ $active }) => ($active ? "#FF6F3D" : "#444")};
    padding: 37px 12px;
    position: relative;

    &::after {
      content: "";
      display: ${({ $active }) => $active && "none"};
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      width: 1px;
      height: 56px;
      background-color: #ccc;
    }
  }
`;
