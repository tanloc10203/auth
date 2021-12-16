import { NavLink, Outlet } from "react-router-dom";
import styles from './App.module.css';
import { useAuth } from "./HOC";

function App() {
  const { active, navLink } = styles;
  const auth = useAuth("login");

  return (
    <main>
      <nav>
        <h1>Auth</h1>
        <div className={navLink}>
          {auth.isLogin
            ?
            <>
              <NavLink to="/logout">Đăng xuất</NavLink>
            </>
            :
            <>
              <NavLink className={({ isActive }) => isActive ? active : ""} to="/login">Đăng nhập</NavLink>
              <NavLink className={({ isActive }) => isActive ? active : ""} to="/register">Đăng ký</NavLink>
            </>
          }

          <NavLink className={({ isActive }) => isActive ? active : ""} to="/profile">Thông tin cá nhân</NavLink>
          <NavLink className={({ isActive }) => isActive ? active : ""} to="/">Trang chủ</NavLink>
        </div>
      </nav>
      <Outlet />
    </main>
  );
}

export default App;
