import dayjs from "dayjs";
import { ILocale } from "@src/types/locale";
import { formatDate } from "./formatDate";

const dayLabelForLocale = (d: dayjs.Dayjs, locale: ILocale["locale"]) => {
  // fr: 1 -> "1er", others -> "2", "3" и т.д.
  if (locale === "fr") {
    return d.date() === 1 ? "1er" : d.format("D");
  }
  // for others
  return d.format("D");
};

export const formatDateRange = (
  start: string | Date,
  end: string | Date,
  locale: ILocale["locale"] = "en",
) => {
  const s = dayjs(start).locale(locale);
  const e = dayjs(end).locale(locale);

  if (!s.isValid() || !e.isValid()) {
    // fallback: if only one or more date is not valid — return single format
    return formatDate(start || end, locale);
  }

  // if same day - just display this day
  if (s.isSame(e, "day")) {
    return formatDate(s.toDate(), locale);
  }

  // same year
  if (s.year() === e.year()) {
    // same month
    if (s.month() === e.month()) {
      switch (locale) {
        case "fr":
          // Du 1er au 2 octobre 2025
          return `Du ${dayLabelForLocale(s, locale)} au ${dayLabelForLocale(
            e,
            locale,
          )} ${s.format("MMMM")} ${s.format("YYYY")}`;
        case "es":
          // Del 1 al 2 de octubre de 2025
          return `Del ${s.format("D")} al ${e.format(
            "D",
          )} de ${s.format("MMMM")} ${s.format("YYYY")}`;
        case "de":
          // 1.–2. Oktober 2025
          return `${s.format("D")}.${s.format("")}–${e.format(
            "D",
          )}. ${s.format("MMMM YYYY")}`.replace(".–", "–");
        case "ru":
          // 1–2 октября 2025
          return `${s.format("D")}–${e.format("D")} ${s.format("MMMM YYYY")}`;
        case "zh":
          // 1–2十月 2025
          return `${s.format("YYYY年M月")}${s.format("D日")}至${e.format("D日")} `;
        default:
          // en, etc: October 1–2, 2025
          return `${s.format("MMMM D")}–${e.format("D, YYYY")}`;
      }
    }

    // different months, same year
    switch (locale) {
      case "fr":
        // Du 30 septembre au 2 octobre 2025
        return `Du ${dayLabelForLocale(s, locale)} ${s.format(
          "MMMM",
        )} au ${dayLabelForLocale(e, locale)} ${e.format("MMMM")} ${s.format(
          "YYYY",
        )}`;
      case "es":
        // Del 30 de septiembre al 2 de octubre de 2025
        return `Del ${s.format("D")} de ${s.format(
          "MMMM",
        )} al ${e.format("D")} de ${e.format("MMMM")} ${s.format("YYYY")}`;
      case "ru":
        // 30 сентября – 2 октября 2025
        return `${s.format("D MMMM")} – ${e.format("D MMMM YYYY")}`;
      default:
        // en: September 30 – October 2, 2025
        return `${s.format("MMMM D")}–${e.format("MMMM D, YYYY")}`;
    }
  }

  // different years
  switch (locale) {
    case "fr":
      return `Du ${dayLabelForLocale(s, locale)} ${s.format(
        "MMMM YYYY",
      )} au ${dayLabelForLocale(e, locale)} ${e.format("MMMM YYYY")}`;
    case "es":
      return `Del ${s.format("D")} de ${s.format(
        "MMMM YYYY",
      )} al ${e.format("D")} de ${e.format("MMMM YYYY")}`;
    default:
      return `${s.format("D MMMM YYYY")}–${e.format("D MMMM YYYY")}`;
  }
};
