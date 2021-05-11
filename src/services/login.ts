import history from "../routes/history";

export const TOKEN_KEY = "@pxpay:jwt";
export const TOKEN_USER = "@pxpay:user";

export const login = (token: string, user: string) => {
  document.cookie = `${TOKEN_KEY}=${token}`;
  localStorage.setItem(TOKEN_USER, JSON.stringify(user));

  window.location.reload();
  history.push("/dashboard");
};

export const logout = () => {
  document.cookie = `${TOKEN_KEY}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
  localStorage.removeItem(TOKEN_USER);

  window.location.reload();
  history.push("/login");
};

export const getCookieByName = (name: any) => {
  var cookieName = `${name}=`;
  var allCookies = document.cookie.split(";");

  for (var i = 0; i < allCookies.length; i++) {
    var cookieIndex = allCookies[i];
    while (cookieIndex.charAt(0) === " ")
      cookieIndex = cookieIndex.substring(1);
    if (cookieIndex.indexOf(cookieName) !== -1)
      return cookieIndex.substring(cookieName.length, cookieIndex.length);
  }
  return null;
};

export const getCookieToken = () => {
  var userTokenName = `${TOKEN_KEY}=`;
  var allCookies = document.cookie.split(";");

  for (var i = 0; i < allCookies.length; i++) {
    var cookieIndex = allCookies[i];
    while (cookieIndex.charAt(0) === " ")
      cookieIndex = cookieIndex.substring(1);
    if (cookieIndex.indexOf(userTokenName) !== -1)
      return cookieIndex.substring(userTokenName.length, cookieIndex.length);
  }
  return null;
};

export const isAuthenticated = () => {
  return !!getCookieToken();
};
