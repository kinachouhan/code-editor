import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { logout } from "../redux/userSlice";

export const Header = () => {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {

      const response = await fetch("http://localhost:3100/api/v1/user/logout",
        {
          method: "POST",
          credentials: "include"
        }
      )

      dispatch(logout())
      navigate("/login")
      toast.success("Logged out successfully")


    } catch (error) {
      toast.error("Logout failed, please try again!!")

    }
  

}

return (
  <header className="bg-white shadow-md sticky top-0 z-50">
    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-10 py-4">

      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-black text-white font-bold flex items-center justify-center">
          D
        </div>
        <h1 className="font-bold text-xl">
          <Link to="/">DevSync</Link>
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex gap-6 mt-4 sm:mt-0 text-sm sm:text-base font-semibold">
        <NavLink to="/pricing" className="text-gray-700 hover:text-black">
          Pricing
        </NavLink>
        <NavLink to="/about" className="text-gray-700 hover:text-black">
          About
        </NavLink>
        <NavLink to="/contact" className="text-gray-700 hover:text-black">
          Contact
        </NavLink>

        {isAuthenticated ? (
          <NavLink to="/logout" onClick={handleLogout} className="text-gray-700 hover:text-black">
            Logout
          </NavLink>
        ) : (
          <NavLink to="/signup" className="text-gray-700 hover:text-black">
            Signup
          </NavLink>
        )}
      </nav>
    </div>
  </header>
);
};
