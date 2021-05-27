import { createBrowserHistory } from 'history'
import { useHistory } from 'react-router-dom'

export default createBrowserHistory()

export const PushHistory = (history: string) => {
  const historyRouter = useHistory()
  return historyRouter.push(history)
}
