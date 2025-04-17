export const validateFullName = (fullname: string): boolean => {
  return /^[\p{L}\p{M}' \-]+$/u.test(fullname);
};

export const validateEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};
