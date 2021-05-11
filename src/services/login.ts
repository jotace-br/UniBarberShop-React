import history from "../routes/history";

export const TOKEN_KEY = "@pxpay:jwt";
export const TOKEN_USER = "@pxpay:user";

export const login = (token: string, user: string) => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(TOKEN_USER, JSON.stringify(user));

  window.location.reload();
  history.push("/dashboard");
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(TOKEN_USER);

  window.location.reload();
  history.push("/login");
};

export const isAuthenticated = () => {
  return !!localStorage.getItem(TOKEN_KEY);
};

export const getToken = () => localStorage.getItem(TOKEN_KEY);
