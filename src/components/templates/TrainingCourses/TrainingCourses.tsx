import { useState } from "react";
import { Hero } from "./sections/Hero";
import { TrainingCoursesInput } from "./sub-component/TrainingCoursesInput";

const TrainingCoursesTemplate = () => {
  const [filterValue, setFilterValue] = useState("");

  return (
    <>
      <TrainingCoursesInput filterValue={filterValue} onFilterChange={setFilterValue} />
      <Hero />
    </>
  );
};

export { TrainingCoursesTemplate };