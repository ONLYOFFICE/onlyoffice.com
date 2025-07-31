export function scrollToStart(
  el: HTMLUListElement | null | undefined
): void {
  el?.scrollTo({ left: 0, behavior: "smooth" });
}

export function scrollToEnd(
  el: HTMLUListElement | null | undefined
): void {
  el?.scrollTo({ left: el.scrollWidth, behavior: "smooth" });
}
