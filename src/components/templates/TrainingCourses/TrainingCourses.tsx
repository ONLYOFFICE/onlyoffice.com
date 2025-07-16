import { useState } from "react";
import { Hero } from "./sections/Hero";
import { Cards } from "./sections/Cards";
import { Testimonials } from "./sections/Testimonials";
import { Faq } from "./sections/Faq";
import { TrainingCoursesInput } from "./sub-component/TrainingCoursesInput";
import { ILocale } from "@src/types/locale";

const TrainingCoursesTemplate = ({ locale }: ILocale) => {
  const [filterValue, setFilterValue] = useState("");

  return (
    <>
      <TrainingCoursesInput filterValue={filterValue} onFilterChange={setFilterValue} />
      <Hero />
      <Cards locale={locale} />
      <Testimonials />
      <Faq />
    </>
  );
};

export { TrainingCoursesTemplate };