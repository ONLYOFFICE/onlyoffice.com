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
