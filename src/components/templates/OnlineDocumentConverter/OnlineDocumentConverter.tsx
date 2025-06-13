import { SupportedFormats } from "@src/components/modules/converter/SupportedFormats";
import { CareData } from "@src/components/modules/converter/CareData";
import { Edits } from "@src/components/modules/converter/Edits";
import { ConversionApi } from "@src/components/modules/converter/ConversionApi";
import { ConverterHero } from "@src/components/modules/converter/ConverterHero";
import { StyledOnlineDocumentConverter } from "./OnlineDocumentConverter.styled";

const OnlineDocumentConverterTemplate = () => {
  return (
    <StyledOnlineDocumentConverter>
      <ConverterHero
        allowedTypes={["text", "spreadsheet", "presentation", "pdf"]}
      />
      <SupportedFormats />
      <CareData />
      <Edits />
      <ConversionApi />
    </StyledOnlineDocumentConverter>
  );
};

export { OnlineDocumentConverterTemplate };
