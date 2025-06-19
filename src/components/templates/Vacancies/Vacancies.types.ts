interface ICardProps {
  department: {
    color: "red" | "blue" | "green";
    label: string;
  }
  title: string;
  location: string;
  time: string;
  language: {
    icon: string[];
    label: string;
  }
  description: string;
  requirements: string;
  skills: string;
  benefits: string;
}

interface IJobItem extends ICardProps {
  id: number;
}

export type { ICardProps, IJobItem };