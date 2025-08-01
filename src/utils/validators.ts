export const validateFullName = (fullname: string): boolean => {
  return /^[\p{L}\p{M}' \-]+$/u.test(fullname);
};

export const validateEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const validateWebsite = (website: string): boolean => {
  return /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/|www\.){0,1}[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(
    website,
  );
};
