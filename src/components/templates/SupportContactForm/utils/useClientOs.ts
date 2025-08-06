import { useEffect, useState } from "react";
import { TNavigatorWithUAData } from "../SupportContactForm.types";

export const useClientOS = (): string | null => {
  const [os, setOs] = useState<string | null>(null);

  useEffect(() => {
    const getOS = () => {
      const nav: TNavigatorWithUAData = navigator;

      if (nav.userAgentData?.platform) {
        return nav.userAgentData.platform;
      }

      const { userAgent, platform } = nav;
      const mac = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
      const windows = ['Win32', 'Win64', 'Windows', 'WinCE'];
      const ios = ['iPhone', 'iPad', 'iPod'];

      if (mac.includes(platform)) return 'macOS';
      if (ios.includes(platform)) return 'iOS';
      if (windows.includes(platform)) return 'Windows';
      if (/Android/.test(userAgent)) return 'Android';
      if (/Linux/.test(platform)) return 'Linux';

      return 'Unknown';
    };

    setOs(getOS());
  }, []);

  return os;
};
