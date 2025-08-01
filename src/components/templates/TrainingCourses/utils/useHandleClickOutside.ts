import { useEffect } from "react";
import { TDropdownType } from "../TrainingCourses.types";

const useHandleClickOutside = (setActiveDropdown: React.Dispatch<React.SetStateAction<TDropdownType>>,
  ...refs: React.RefObject<HTMLDivElement | null>[]
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      const isClickInside =
        refs.some((ref) => ref.current?.contains(target));
      if (!isClickInside) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [refs, setActiveDropdown]);
};

export { useHandleClickOutside };
