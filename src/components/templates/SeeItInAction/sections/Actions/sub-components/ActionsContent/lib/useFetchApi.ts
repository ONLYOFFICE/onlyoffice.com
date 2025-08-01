import { useEffect, useState } from "react";
import { IActionsContentProps, ITokenResponse } from "../ActionsContent.types";

const useFetchApi = (
  fileType: IActionsContentProps["fileType"],
  title:    IActionsContentProps["title"],
  url:      IActionsContentProps["url"],
  mode:     IActionsContentProps["mode"],
  uiTheme:  IActionsContentProps["uiTheme"]
) => {
  const [token, setToken] = useState("");
  const [config, setConfig] = useState<ITokenResponse["config"] | null>(null);

  useEffect(() => {
    const apiUrl = `/api/document-editor?fileType=${fileType}&title=${encodeURIComponent(
      title,
    )}&url=${encodeURIComponent(url)}&mode=${mode}&uiTheme=${uiTheme}`;

    const fetchApi = async () => {
      try {
        const res = await fetch(apiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        });
        if (!res.ok) {
          throw new Error(`${res.status}`);
        }
        const data: ITokenResponse = await res.json();
        setToken(data.token);
        setConfig(data.config);
      } catch (err) {
        console.error(err);
      }
    };

    fetchApi();
  }, [fileType, title, url, mode, uiTheme]);

  return { token, config };
}

export { useFetchApi };