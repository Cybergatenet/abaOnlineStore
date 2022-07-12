import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home/Home'
import About from "./pages/About/About";
import Cart from "./pages/Cart/Cart";
import Account from "./pages/Account/Account";
import Dashboard from "./pages/Dashboard/Dashboard";
import Admin from "./pages/AdminPage/Admin";
import Pages from "./pages/AdminPage/Pages";
import Edit from "./pages/AdminPage/Edit";
import Users from "./pages/AdminPage/Users";
import Posts from "./pages/AdminPage/Posts";
import Index from "./pages/AdminPage/Index";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/:id" element={<Cart />} />
        <Route path="/login" element={<Account />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/pages" element={<Pages />} />
        <Route path="/admin/edit" element={<Edit />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/posts" element={<Posts />} />
        <Route path="/admin/home" element={<Index />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App 