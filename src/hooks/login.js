import { useLocalStorage } from 'react-use'
import useAxios from 'axios-hooks'

const ENDPOINT = process.env.REACT_APP_ENDPOINT
export const useLogin = () => {
  const [token, setToken, removeToken] = useLocalStorage('x-token', null)
  const [result, doLogin, cancelLogin] = useAxios({ url: `${ENDPOINT}/login`, method: 'POST' }, { manual: true })
  const isLoggedIn = !!token;
  const loginData = { ...result, token, isLoggedIn }

  // Helper functions
  const execLogin = async (username, password) => {
    try {
      const res = await doLogin({ data: { username, password } })
      setToken(res.headers['x-auth-token'])
      return res
    } catch (error) {
      removeToken()
      return Promise.reject(error)
    }
  }
  const logout = () => {
    if (isLoggedIn) removeToken()
  }

  const loginHelper = { run: execLogin, cancel: cancelLogin, logout }

  // Returns
  return [loginData, loginHelper]
}