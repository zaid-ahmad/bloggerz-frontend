import Home from './Home'
import Login from './Login'
import Register from './Register'
import BlogDetail from './BlogDetail'
import BlogForm from './BlogForm'
import AdminPan from './AdminPan'
import BlogEdit from './components/BlogEdit'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/blogs/:id' element={<BlogDetail />} />
        <Route path='/:user/blogs/create' element={<BlogForm />} />
        <Route path='/:user/blogs/edit/:id' element={<BlogEdit />} />
        <Route path='/:user' element={<AdminPan />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch
