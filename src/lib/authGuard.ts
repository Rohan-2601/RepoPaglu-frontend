export const isLoggedIn = () => {
  if (typeof window === "undefined") return false;
  return Boolean(localStorage.getItem("token"));
};
