import { NavLink, Outlet } from "react-router-dom";
import styles from './App.module.css';

function App() {
  const { active, navLink } = styles;

  return (
    <main>
      <nav>
        <div className={navLink}>
          <NavLink className={({ isActive }) => isActive ? active : ""} to="/login">Đăng nhập Hello wword</NavLink>
          <NavLink className={({ isActive }) => isActive ? active : ""} to="/register">Đăng ký</NavLink>
          <NavLink className={({ isActive }) => isActive ? active : ""} to="/">Trang chủ</NavLink>
        </div>
        <h1>Auth</h1>
      </nav>
      <Outlet />
    </main>
  );
}

export default App;
