/* eslint-disable react/prop-types */
import Header from './components/Header'
import LoginForm from './components/LoginForm'

function Login({ loadUser }) {
  return (
    <>
      <Header />
      <LoginForm loadUser={loadUser} />
    </>
  )
}

export default Login
