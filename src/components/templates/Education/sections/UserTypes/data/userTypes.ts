import { IButton } from "@src/components/ui/Button/Button.types";

interface IUserTypes {
  image: string;
  title: string;
  text: string;
  button: IButton;
}

export const userTypes: IUserTypes[] = [
  {
    image: "/images/templates/education/user-types/oo-educators.svg",
    title: "OOForEducators",
    text: "OOForEducatorsText",
    button: {
      id: "oo-educators",
      href: "/office-for-educators",
      variant: "primary",
    },
  },
  {
    image: "/images/templates/education/user-types/oo-students.svg",
    title: "OOForStudents",
    text: "OOForStudentsText",
    button: {
      id: "oo-students",
      href: "/office-for-students",
      variant: "secondary",
    },
  },
];
