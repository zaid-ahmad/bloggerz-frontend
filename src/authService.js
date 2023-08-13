// authService.js
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'

export const isLoggedIn = () => {
  const token = Cookies.get('token')

  if (!token) {
    return false // No token found
  }

  try {
    const decodedToken = jwtDecode(token)
    const currentTime = Date.now() / 1000 // Get current time in seconds

    if (decodedToken.exp < currentTime) {
      return false // Token has expired
    }

    return true // User is signed in
  } catch (error) {
    return false // Invalid token or other error
  }
}

export const getUserInfo = () => {
  const token = Cookies.get('token')

  if (!token) {
    return null // No token found
  }

  try {
    const decodedToken = jwtDecode(token)
    return {
      name: decodedToken.name,
      username: decodedToken.username,
    }
  } catch (error) {
    return null // Invalid token or other error
  }
}

export const login = async (username, password) => {
  // Make a fetch request to your login API endpoint
  const response = await fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  })

  if (response.ok) {
    const { token } = await response.json()
    Cookies.set('token', token) // Store the token in a cookie
  } else {
    throw new Error('Invalid credentials')
  }
}

export const logout = () => {
  Cookies.remove('token') // Remove the token from the cookie
}

export const getAuthToken = () => {
  return Cookies.get('token') // Retrieve the token from the cookie
}
