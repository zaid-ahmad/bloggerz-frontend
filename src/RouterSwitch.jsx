import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import BlogDetail from './BlogDetail'
import BlogForm from './BlogForm'
import AdminPan from './AdminPan'

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/blogs/:id' element={<BlogDetail />} />
                <Route path='/:user/blogs/create' element={<BlogForm />} />
                <Route path='/:user' element={<AdminPan />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch

/*
    Completed:
    ✅ Home page
    ✅ Blog detail page
    ✅ Login
    ✅ Register
    ✅ Blog creation form
    ✅ Make the changes in the navbar when user logs in
    ✅ Make blogs admin page (all blogs, unpublished/published blogs, edit/delete blogs)

    TODOS:
*/
