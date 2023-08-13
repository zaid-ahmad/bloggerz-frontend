/* eslint-disable react/prop-types */

import Header from './components/Header'
import Blogs from './components/Blogs'

function App({ name, isSignedIn }) {
  return (
    <>
      <Header name={name} isSignedIn={isSignedIn} />
      <Blogs />
    </>
  )
}
export default App
