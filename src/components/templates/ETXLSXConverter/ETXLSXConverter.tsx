import { useTranslation, Trans } from "next-i18next";
import { Hero } from "@src/components/modules/converter/Hero";
import { SupportedFormats } from "@src/components/modules/converter/SupportedFormats";
import { CareData } from "@src/components/modules/converter/CareData";
import { MakeEdits } from "@src/components/modules/converter/MakeEdits";
import { ConversionApi } from "@src/components/modules/converter/ConversionApi";
import { Text } from "@src/components/ui/Text";
import { IRating } from "@src/components/modules/converter/Hero/sub-components/steps/DownloadFile/sub-components/Rating";

const ETXLSXConverterTemplate = ({ ratingData }: IRating) => {
  const { t } = useTranslation("et-xlsx-converter");

  return (
    <>
      <Hero
        theme="spreadsheet"
        heading={
          <Trans
            t={t}
            i18nKey="OnlineETToXLSXConverter"
            components={[<Text key="0" as="span" color="main" />]}
          />
        }
        subHeading={t("ConvertSpreadsheetFiles")}
        learnMore={{
          label: "ET",
          text: t("LearnMoreText"),
        }}
        ratingData={{ ratingData }}
      />
      <SupportedFormats />
      <CareData />
      <MakeEdits />
      <ConversionApi />
    </>
  );
};

export { ETXLSXConverterTemplate };
