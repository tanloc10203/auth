import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import InputCustom from '../../components/customForm/InputCusTom';
// import styles from "./login.module.css";
import { loginPost, setState } from './loginSlice';

function Login() {
  const state = useSelector(state => state.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState("vi");

  useEffect(() => {
    state.isLogin && navigate("/", { replace: true });
  }, [state.isLogin]);

  const handleLogin = () => {
    const data = {
      username: state.username,
      password: state.password
    }
    dispatch(loginPost(data));
  }

  const changeLanguage = (lng) => {
    setLang(lng.target.value);
    i18n.changeLanguage(lng.target.value);
  };

  return (
    <main className="login">
      <div className="loginMain">
        <h1 className="loginTitle">Đăng nhập</h1>
        {
          state.isLogin ? "" :
            <p className="error">{state && state?.errors.err ? state.errors.err : ""}</p>
        }
        <div className="login-form">
          <InputCustom
            type="text"
            label={t("Tài khoản")}
            name="username"
            value={state.username}
            onChange={e => dispatch(setState(e.target))}
          />
          <InputCustom
            type="password"
            label={t("Mật khẩu")}
            name="password"
            value={state.password}
            onChange={e => dispatch(setState(e.target))}
          />
          <label htmlFor="">{t("Ngôn ngữ")}</label>  {" | "}
          <select
            name="lang"
            id=""
            onChange={changeLanguage}
            value={lang}
          >
            <option value="vi">Vietnamese</option>
            <option value="en">English</option>
            <option value="jp">Janpan</option>
          </select>
          <button
            // className={clsx(btnLogin, {
            //   [styles.active]: state.isLoading
            // })}
            className={state.isLoading ? "active btnLogin" : "btnLogin"}
            onClick={handleLogin}
          >
            Đăng nhập
            {state.isLoading && <div className="dots"></div>}
          </button>
        </div>
      </div>
    </main>
  )
}

export default Login;

