import { TFunction } from "next-i18next";

export const getMonthKey = (date: Date): string => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return months[date.getMonth()];
};

export const formatEventDate = (
  t: TFunction,
  start_date: string,
  end_date?: string,
) => {
  const startDate = new Date(start_date);
  const endDate = end_date ? new Date(end_date) : null;
  const startMonth = t(`events:months.${getMonthKey(startDate)}`);
  const startDay = startDate.getDate();
  const startYear = startDate.getFullYear();

  if (!endDate) {
    return t("events:dateTemplates.singleDay", {
      day: startDay,
      month: startMonth,
      year: startYear,
    });
  }

  const endMonth = t(`events:months.${getMonthKey(endDate)}`);
  const endDay = endDate.getDate();
  const endYear = endDate.getFullYear();

  if (startYear !== endYear) {
    return t("events:dateTemplates.differentYears", {
      dayStart: startDay,
      monthStart: startMonth,
      yearStart: startYear,
      dayEnd: endDay,
      monthEnd: endMonth,
      year: endYear,
    });
  }

  if (startDate.getMonth() !== endDate.getMonth()) {
    return t("events:dateTemplates.differentMonths", {
      dayStart: startDay,
      monthStart: startMonth,
      dayEnd: endDay,
      monthEnd: endMonth,
      year: startYear,
    });
  }

  return t("events:dateTemplates.sameMonth", {
    dayStart: startDay,
    dayEnd: endDay,
    month: startMonth,
    year: startYear,
  });
};
