const hasOption = <T extends { option?: unknown }>(
  item: T
): item is T & { option: string } => {
  return typeof item.option === "string" && item.option.length > 0;
}

export {
  hasOption,
}