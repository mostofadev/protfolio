export const getTokenFromLocal = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("user_token");
  }
  return null;
};
