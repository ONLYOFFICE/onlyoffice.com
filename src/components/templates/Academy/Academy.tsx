import React from "react";
import { Hero } from "./sections/Hero";
import { Benefits } from "./sections/Benefits";
import { Discover } from "./sections/Discover";
import { Table } from "./sections/Table";
import { Reviews } from "./sections/Reviews";
import { FAQ } from "./sections/FAQ";
import { Contact } from "./sections/Contact";
import { ILocale } from "@src/types/locale";

const Academy = ({ locale }: ILocale) => {
  return (
    <>
      <Hero />
      <Benefits />
      <Discover locale={locale} />
      <Table />
      <Reviews />
      <FAQ />
      <Contact />
    </>
  );
};

export { Academy };
