export const updateZendeskVerticalOffset = (offset?: number) => {
  if (!window.zE) return;

  window.zE("webWidget", "updateSettings", {
    offset: {
      mobile: {
        vertical: offset ? `${offset}px` : "0",
      },
    },
  });
};
