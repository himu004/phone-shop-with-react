import { NavLink } from "react-router-dom";
import Logo from "./Logo";
const NavBar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center py-5">
        <Logo></Logo>
        <ul className="flex gap-5">
            <li>
                <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-500 underline underline-offset-8" : ""
                }>
                Home
                </NavLink>
            </li>
            <li>
                <NavLink
                to="/favorites"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-500 underline underline-offset-8" : ""
                }>
                Favorites
                </NavLink>
            </li>
            <li>
                <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-500 underline underline-offset-8" : ""
                }>
                Login
                </NavLink>
            </li>
            
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
