import styled, { css } from "styled-components";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { ICardProps } from "@src/components/templates/Vacancies/Vacancies.types";

const CardItem = styled.li`
  background-color: #fff;
  box-shadow: 0 7px 15px rgba(85, 85, 85, 0.15);
  border: 1px solid #EFEFEF;
  padding: 32px;
`;

const CardDepartment = styled(Text)<{
  $departmentColor: ICardProps["department"]["color"];
}>`
  width: fit-content;
  padding: 4px 8px;
  border-radius: 3px;
  margin-bottom: 24px;

  ${({ $departmentColor }) => {
    switch ($departmentColor) {
      case "red":
        return css`
          color: #FF6F3D;
          background: rgba(255, 111, 61, 0.1);
          border: 1px solid #FFB7A0;
        `;
      case "blue":
        return css`
          background-color: rgba(220, 244, 255, 0.7);
          border: 1px solid #9ADAF3;
          color: #37719B;
        `;
      case "green":
        return css`
          background-color: #F9FEEF;
          border: 1px solid #8BB825;
          color: #668E0C;
        `;
      default:
        return css`
          color: #FF6F3D;
          background: rgba(255, 111, 61, 0.1);
          border: 1px solid #FFB7A0;
        `;
    }
  }}
`;

const CardHeading = styled(Heading)`
  margin-bottom: 28px;
`;

const CardDescription = styled(Text)`
  margin-bottom: 24px;
`;

export {
  CardItem,
  CardDepartment,
  CardHeading,
  CardDescription,
};