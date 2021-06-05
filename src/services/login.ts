import history from 'routes/history'
import api from './api'

export const TOKEN_KEY = '@barbershop:jwt'

export const login = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token)

  window.location.reload()
  history.push('/dashboard')
}

export const logout = async () => {
  try {
    await api.post('/api/auth/logout')
  } catch (error) {
    localStorage.removeItem(TOKEN_KEY)
    clearAllCookies()

    window.location.reload()
    history.push('/login')
  }
}

export const authTest = async () => {
  const response = await api.get('/api/auth/profile')
  if (!response.data) {
    localStorage.removeItem(TOKEN_KEY)
    window.location.reload()
    history.push('/login')
  }
  return response.data
}

export const authTestWithoutLogout = async () => {
  const response = await api.get('/api/auth/profile')
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
