import { useState } from "react";
import { Hero } from "./sections/Hero";
import { Cards } from "./sections/Cards";
import { Testimonials } from "./sections/Testimonials";
import { Faq } from "./sections/Faq";
import { TrainingCoursesInput } from "./sub-component/TrainingCoursesInput";

const TrainingCoursesTemplate = () => {
  const [filterValue, setFilterValue] = useState("");

  return (
    <>
      <TrainingCoursesInput filterValue={filterValue} onFilterChange={setFilterValue} />
      <Hero />
      <Cards />
      <Testimonials />
      <Faq />
    </>
  );
};

export { TrainingCoursesTemplate };