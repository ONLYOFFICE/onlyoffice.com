import { useTranslation } from "next-i18next";
import { ICardProps } from "@src/components/templates/Vacancies/Vacancies.types";

import {
  CardDepartment,
  CardDescription,
  CardHeading,
  CardItem
} from "./Card.styled";

const Card = ({ department, title, description }: ICardProps) => {
  const { t } = useTranslation("vacancies");

  return (
    <CardItem>
      <CardDepartment
        $departmentColor={department.color}
        label={t(department.label)}
        size={3}
      />
      <CardHeading
        label={title}
        level={3}
        size={4}
      />
      <CardDescription
        label={description}
        size={2}
      />
    </CardItem>
  );
};

export { Card };