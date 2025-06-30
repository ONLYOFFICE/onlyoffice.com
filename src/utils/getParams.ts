export function getCookieParams(keys: string[]) {
  if (typeof document === "undefined") return {};

  const cookies = Object.fromEntries(
    document.cookie.split("; ").map((cookie) => {
      const [key, ...rest] = cookie.split("=");
      return [key, decodeURIComponent(rest.join("="))];
    }),
  );

  return Object.fromEntries(
    keys.map((key) => [key, cookies[key] || undefined]),
  );
}

export function getFromParam(): string | undefined {
  if (typeof window !== "undefined") {
    const params = new URLSearchParams(window.location.search);
    const fromParam = params.get("from");

    const fallback = window.location.pathname
      .split("/")
      .slice(1, 3)
      .join("/")
      .split(".")[0];

    return fromParam || fallback;
  }

  return undefined;
}
