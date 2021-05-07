import history from "../routes/history"

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const TOKEN_KEY = '@pxpay:jwt'
export const TOKEN_USER = '@pxpay:user'



export const login = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token)
  window.location.reload();
  history.push('/dashboard')
}

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY)
  localStorage.clear()
  window.location.reload();
  history.push('/login')
}

export const isAuthenticated = () => {
  return !!localStorage.getItem(TOKEN_KEY)
}

export const getToken = (): string | null => localStorage.getItem(TOKEN_KEY)
