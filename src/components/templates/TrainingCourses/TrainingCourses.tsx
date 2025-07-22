import { useState } from "react";
import { Hero } from "./sections/Hero";
import { Cards } from "./sections/Cards";
import { Testimonials } from "./sections/Testimonials";
import { Faq } from "./sections/Faq";
import { TrainingCoursesInput } from "./sub-component/TrainingCoursesInput";
import { TrainingCoursesHeaderBg } from "./sub-component/TrainingCoursesHeaderBg";
import { ILocale } from "@src/types/locale";

const TrainingCoursesTemplate = ({ locale }: ILocale) => {
  const [filterValue, setFilterValue] = useState("");

  return (
    <>
      <TrainingCoursesHeaderBg />
      <TrainingCoursesInput filterValue={filterValue} onFilterChange={setFilterValue} />
      <Hero />
      <Cards locale={locale} filterValue={filterValue} />
      <Testimonials />
      <Faq />
    </>
  );
};

export { TrainingCoursesTemplate };