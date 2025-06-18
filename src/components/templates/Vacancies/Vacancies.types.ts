interface ICardProps {
  department: {
    color: "red" | "blue" | "green";
    label: string;
  }
  title: string;
  description: string;
}

interface IJobItem extends ICardProps {
  id: number;
}

export type { ICardProps, IJobItem };