import { formats } from "@src/components/modules/converter/Hero/data/formats";

export const getAllOutputFormats = (fileExt: string): string[] => {
  fileExt = fileExt.toLowerCase();

  for (const category of Object.keys(formats) as Array<keyof typeof formats>) {
    if (formats[category].inputFormats.includes(fileExt)) {
      return formats[category].allOutputFormats;
    }
  }

  return [];
};
