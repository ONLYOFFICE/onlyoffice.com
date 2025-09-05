import { useState, useMemo, useEffect } from "react";
import { useTranslation } from "next-i18next";
import { addDays, Locale } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";
import { Navigation } from "swiper/modules";
import {
  enUS,
  fr,
  de,
  es,
  pt,
  cs,
  srLatn,
  it,
  nl,
  zhCN,
  ja,
  ru,
} from "date-fns/locale";
import {
  StyledLabel,
  StyledDateInput,
  StyledDatePopup,
  StyledCalendarIcon,
  StyledButtonWrapper,
  StyledDateWrapper,
  StyledTimePicker,
  List,
  Item,
  ListHeading,
  StyledTimePickerWrapper,
  StyledDateTimePicker,
  MobilePicker,
  StyledModal,
  StyledSwiper,
  StyledSwiperSlide,
  StyledSwiperButton,
} from "./DateTimePicker.styled";

type DateTimePickerProps = {
  supportMinUTC: string;
  supportMaxUTC: string;
  label: string;
  sublabel?: string;
  placeholder: string;
  minDayDate?: number;
  locale: string;
  selectedFromForm?: { date: Date; time: string; tz: string } | null;
  onChange?: (date: Date, time: string, tz: string) => void;
};

const TIMEZONES = [
  "-12:00", "-11:00", "-10:00", "-09:30", "-09:00",
  "-08:00", "-07:00", "-06:00", "-05:00", "-04:30",
  "-04:00", "-03:30", "-03:00", "-02:00", "-01:00",
  "+00:00", "+01:00", "+02:00", "+03:00", "+03:30",
  "+04:00", "+04:30", "+05:00", "+05:30", "+05:45",
  "+06:00", "+06:30", "+07:00", "+08:00", "+08:45",
  "+09:00", "+09:30", "+10:00", "+10:30", "+11:00",
  "+11:30", "+12:00", "+12:45", "+13:00", "+14:00",
];

const localeMap: Record<string, Locale> = {
  en: enUS,
  fr: fr,
  de: de,
  es: es,
  pt: pt,
  cs: cs,
  sr: srLatn,
  it: it,
  nl: nl,
  zh: zhCN,
  ja: ja,
  ru: ru,
};

export default function DateTimePicker({
  supportMinUTC,
  supportMaxUTC,
  label,
  sublabel,
  placeholder,
  minDayDate,
  locale,
  onChange,
  selectedFromForm = null,
}: DateTimePickerProps) {
  const { t } = useTranslation("DatePicker");
  const [date, setDate] = useState<Date | null>(
    selectedFromForm?.date ?? null,
  );
  const [selected, setSelected] = useState<{ tz: string; time: string } | null>(
    selectedFromForm
      ? { tz: selectedFromForm.tz, time: selectedFromForm.time }
      : null,
  );
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTz, setSelectedTz] = useState<string>(
    selectedFromForm?.tz ?? TIMEZONES[0],
  );
  const [isValid, setIsValid] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [openPopup, setOpenPopup] = useState<string | null>(null);

  const availableTimes = useMemo(() => {
    if (!selectedTz) return [];
  
    const m = selectedTz.match(/^([+-])?(\d{2}):(\d{2})$/);
    if (!m) return [];
    const sign = m[1] ?? "";
    const hours = parseInt(m[2], 10);
    const minutes = parseInt(m[3], 10);
  
    const list: string[] = [];
  
    for (let localH = 0; localH < 24; localH++) {
      let utcH: number;
      let utcM: number;
  
      if (sign !== "") {
        utcH = localH - hours;
        if (minutes !== 0) utcH -= 1;
        if (utcH < 0) utcH += 23;
        utcM = minutes !== 0 ? 60 - minutes : 0;
      } else {
        utcH = localH + hours;
        if (utcH >= 23) utcH -= 23;
        utcM = minutes;
      }
  
      const utcStr =
        `${String(utcH).padStart(2, '0')}:${String(utcM).padStart(2, '0')}`;
  
      if (utcStr >= supportMinUTC && utcStr <= supportMaxUTC) {
        list.push(`${String(localH).padStart(2, '0')}:00`);
      }
    }
  
    return list;
  }, [selectedTz, supportMinUTC, supportMaxUTC]);
  

  const handleSelect = () => {
    setIsOpen(false);
    setSelected(selected);
    handleDateChange(date);
    setIsValid(true);
    if (onChange) {
      onChange(date!, selected!.time, selected!.tz);
    }
  };

  const handleDateChange = (d: Date | null) => {
    if (!d) {
      setDate(null);
      return;
    }
    const onlyDate = new Date(
      Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()),
    );
    setDate(onlyDate);
  };

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();

    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (selectedFromForm) {
      setDate(selectedFromForm.date);
      setSelected({ tz: selectedFromForm.tz, time: selectedFromForm.time });
      setSelectedTz(selectedFromForm.tz);
      setIsValid(!!selectedFromForm.date && !!selectedFromForm.time && !!selectedFromForm.tz);
    } else {
      setDate(null);
      setSelected(null);
      setSelectedTz(TIMEZONES[0]);
      setIsValid(false);
    }
  }, [selectedFromForm]);

  return (
    <StyledDateTimePicker>
      <StyledLabel>
        {label}
        {sublabel && <Text as="span" color="#666666" label={sublabel} />}
      </StyledLabel>
      <StyledDateInput
        onClick={() => setIsOpen(!isOpen)}
        $isOpen={isOpen}
        $isEmpty={date || selected ? false : true}
        $isDateEmpty={date ? false : true}
        $isValid={isValid}
        $placeholder={placeholder}
      >
        <div id="datepicker">{date?.toLocaleDateString("en-US")}</div>
        <div id="timezone">{selected?.tz && `UTC ${selected?.tz}`}</div>
        <div id="timepicker">{selected?.time}</div>
        <StyledCalendarIcon $isOpen={isOpen} />
      </StyledDateInput>
      <StyledDatePopup $isOpen={isOpen}>
        <StyledDateWrapper>
          <DatePicker
            selected={date}
            onChange={handleDateChange}
            minDate={minDayDate ? addDays(new Date(), minDayDate) : undefined}
            dateFormat="MM/dd/yyyy"
            calendarClassName="my-calendar"
            inline
            locale={localeMap[locale || "en"]}
          />
          <StyledTimePicker>
            <StyledTimePickerWrapper>
              <ListHeading level={6}>{t("UTC")}</ListHeading>
              {isMobile ? (
                <MobilePicker
                  $isOpen={openPopup === "tz"}
                  $isSelected={!!selected?.tz}
                  onClick={() => setOpenPopup("tz")}
                >
                  {selected?.tz ? selected?.tz : "-12:00"}
                </MobilePicker>
              ) : (
                <List>
                  {TIMEZONES.map((tz) => (
                    <Item
                      key={tz}
                      selected={selected?.tz === tz}
                      onClick={() => {
                        setSelectedTz(tz);
                        setSelected({ tz, time: "" });
                      }}
                    >
                      {tz}
                    </Item>
                  ))}
                </List>
              )}
            </StyledTimePickerWrapper>
            <StyledTimePickerWrapper>
              <ListHeading level={6}>{t("Time")}</ListHeading>
              {isMobile ? (
                <MobilePicker
                  $isOpen={openPopup === "time"}
                  $isSelected={!!selected?.time}
                  onClick={() => setOpenPopup("time")}
                >
                  {selected?.time ? selected?.time : "00:00"}
                </MobilePicker>
              ) : (
                <List>
                  {availableTimes.map((time) => (
                    <Item
                      key={time}
                      selected={selected?.time === time}
                      onClick={() =>
                        setSelected((prev) =>
                          prev ? { ...prev, time } : { tz: selectedTz!, time },
                        )
                      }
                    >
                      {time}
                    </Item>
                  ))}
                </List>
              )}
            </StyledTimePickerWrapper>
          </StyledTimePicker>
        </StyledDateWrapper>

        <StyledButtonWrapper>
          <Button
            disabled={!date || !selected?.tz || !selected?.time}
            onClick={() => handleSelect()}
            
          >
            {t("Select")}
          </Button>
        </StyledButtonWrapper>

        {openPopup === "tz" && (
          <StyledModal
            isOpen={!!openPopup}
            withCloseBtn
            positionCloseBtn="outside"
            onClose={() => {
              if (selectedTz) {
                setSelected({ tz: selectedTz, time: "" });
              }
              setOpenPopup(null);
            }}
          >
            <StyledSwiperButton className="swiper-button-prev" />
            <StyledSwiper
              modules={[Navigation]}
              navigation={{
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
              }}
              slidesPerView={3}
              direction={"vertical"}
              centeredSlides={true}
              onSlideChange={(swiper) => {
                const index = swiper.activeIndex;
                setSelectedTz(TIMEZONES[index]);
              }}
              initialSlide={selectedTz ? TIMEZONES.indexOf(selectedTz) : 0}
            >
              {TIMEZONES.map((tz, index) => (
                <StyledSwiperSlide
                  key={index}
                  onClick={() => {
                    setSelectedTz(tz);
                    setSelected({ tz, time: "" });
                    setOpenPopup(null);
                  }}
                >
                  {tz}
                </StyledSwiperSlide>
              ))}
            </StyledSwiper>
            <StyledSwiperButton className="swiper-button-next" />
          </StyledModal>
        )}

        {openPopup === "time" && (
          <StyledModal
            isOpen={!!openPopup}
            withCloseBtn
            positionCloseBtn="outside"
            onClose={() => {
              if (selected?.time) {
                setSelected({ tz: selectedTz!, time: selected!.time });
              }
              setOpenPopup(null);
            }}
          >
            <StyledSwiperButton className="swiper-button-prev" />
            <StyledSwiper
              modules={[Navigation]}
              navigation={{
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
              }}
              slidesPerView={3}
              direction={"vertical"}
              centeredSlides={true}
              onSlideChange={(swiper) => {
                const index = swiper.activeIndex;
                setSelected((prev) =>
                  prev
                    ? { ...prev, time: availableTimes[index] }
                    : { tz: selectedTz!, time: availableTimes[index] },
                );
              }}
              initialSlide={
                selected?.time ? availableTimes.indexOf(selected!.time) : 0
              }
            >
              {availableTimes.map((time, index) => (
                <StyledSwiperSlide
                  key={index}
                  onClick={() => {
                    setSelected({ tz: selectedTz!, time });
                    setOpenPopup(null);
                  }}
                >
                  {time}
                </StyledSwiperSlide>
              ))}
            </StyledSwiper>
            <StyledSwiperButton className="swiper-button-next" />
          </StyledModal>
        )}
      </StyledDatePopup>
    </StyledDateTimePicker>
  );
}
