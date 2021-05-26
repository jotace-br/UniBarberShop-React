import history from 'routes/history'
import api from './api'

export const TOKEN_KEY = '@pxpay:jwt'
export const TOKEN_USER = '@pxpay:user'

export const login = (token: string, user: string) => {
  localStorage.setItem(TOKEN_KEY, token)
  localStorage.setItem(TOKEN_USER, JSON.stringify(user))

  window.location.reload()
  history.push('/dashboard')
}

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem(TOKEN_USER)
  clearAllCookies()

  window.location.reload()
  history.push('/login')
}

export const authTest = async () => {
  const response = await api.get('/isAuth')
  if (!response.data) {
    localStorage.removeItem(TOKEN_KEY)
    window.location.reload()
    history.push('/login')
  }
  return response.data
}

export const authTestWithoutLogout = async () => {
  const response = await api.get('/isAuth')
  if (!response.data) {
    return 'Oops! Login não autorizado.'
  }
  return response.data
}

export const clearAllCookies = () => {
  document.cookie.split(';').forEach(function (c) {
    document.cookie = c
      .replace(/^ +/, '')
      .replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/')
  })
}

export const isAuthenticated = () => {
  return !!localStorage.getItem(TOKEN_KEY)
}

export const getToken = () => localStorage.getItem(TOKEN_KEY)
