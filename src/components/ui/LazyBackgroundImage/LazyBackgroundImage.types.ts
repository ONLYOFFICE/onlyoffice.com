export interface ILazyBackgroundImage extends React.HTMLAttributes<HTMLDivElement> {
 
  imageUrl: string;
 
  placeholder?: string;

  className?: string;

  position?: "center" | "top" | "bottom" | "left" | "right";
  
  size?: "cover" | "contain" | "auto";
}
