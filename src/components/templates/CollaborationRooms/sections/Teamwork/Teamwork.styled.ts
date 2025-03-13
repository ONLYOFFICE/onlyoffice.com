import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledTeamworkWrapper = styled.div`
  .teamwork-title {
    font-size: 32px;

    @media ${device.tabletS} {
      font-size: 30px;
    }

    @media ${device.tabletS} {
      font-size: 20px;
    }
  }
  .teamwork-text {
    padding-top: 24px;

    @media ${device.tabletS} {
      font-size: 16px;
    }

    @media ${device.mobile} {
      font-size: 14px;
      padding-top: 16px;
    }
  }
`;

const StyledFirstLine = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  padding: 56px 0 32px;

  @media ${device.tablet} {
    padding: 32px 0;
  }

  @media ${device.mobile} {
    grid-template-columns: 1fr;
    gap: 24px;
    padding: 32px 0 24px;
  }
`;

const StyledSecondLine = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;

  @media ${device.mobile} {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const StyledTeamworkCard = styled.div`
  padding: 32px;
  border: 1px solid #cccccc;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  &.education {
    margin-right: 32px;
  }

  &.business {
    border: none;
    background-color: #ff6f3d;
    color: #fff;
  }

  &.individuals {
    border-color: #8bb825;
    background-color: #f9feef;
  }

  &.legal {
    margin-left: 32px;
  }

  .education-title,
  .business-title,
  .individuals-title,
  .legal-title {
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: 24px;
    line-height: 133%;
    font-weight: 700;

    &::before {
      content: "";
      display: inline-block;
      width: 56px;
      height: 56px;
      background-image: url("/images/templates/collaboration-rooms/ideal-for-teamwork/teamwork-icons.svg");
      background-repeat: no-repeat;
      background-position: -18px -20px;
    }

    @media ${device.tabletS} {
      font-size: 20px;
    }

    @media ${device.mobile} {
      font-size: 18px;
    }
  }

  .business-title::before {
    background-position-x: -94px;
  }

  .individuals-title::before {
    background-position-x: -170px;
  }

  .legal-title::before {
    background-position-x: -245px;
  }

  .education-text,
  .business-text,
  .individuals-text,
  .legal-text {
    font-size: 18px;

    @media ${device.tabletS} {
      font-size: 16px;
    }
    @media ${device.mobile} {
      font-size: 14px;
    }
  }

  @media ${device.tabletS} {
    padding: 16px;
  }

  @media ${device.mobile} {
    margin: 0 !important;

    &.education {
      order: 2;
    }

    &.business {
      order: 1;
    }
  }
`;

export {
  StyledTeamworkWrapper,
  StyledFirstLine,
  StyledSecondLine,
  StyledTeamworkCard,
};
