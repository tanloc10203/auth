import clsx from 'clsx';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import InputCustom from '../../components/customForm/InputCusTom';
import styles from "./login.module.css";
import { loginPost, setState } from './loginSlice';

function Login(props) {
  const { login, loginMain, loginTitle, btnLogin, dots } = styles;
  const state = useSelector(state => state.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  return (
    <main className={login}>
      <div className={loginMain}>
        <h1 className={loginTitle}>Đăng nhập</h1>
        {
          state.isLogin ? "" :
            <p className={styles.error}>{state && state?.errors.err ? state.errors.err : ""}</p>
        }

        <div className="login-form">
          <InputCustom
            type="text"
            label="Tài khoản"
            name="username"
            value={state.username}
            onChange={e => dispatch(setState(e.target))}
          />
          <InputCustom
            type="password"
            label="Mật khẩu"
            name="password"
            value={state.password}
            onChange={e => dispatch(setState(e.target))}
          />
          <label htmlFor="">Ngôn ngữ</label>  {" | "}
          <select name="lang" id="">
            <option value="VI">Vietnamese</option>
            <option value="EN">English</option>
            <option value="JP">Janpan</option>
          </select>
          <button
            className={clsx(btnLogin, {
              [styles.active]: state.isLoading
            })}
            onClick={handleLogin}
          >
            Đăng nhập
            {state.isLoading && <div className={dots}></div>}
          </button>
        </div>
      </div>
    </main>
  )
}

Login.propTypes = {

}

export default Login;

