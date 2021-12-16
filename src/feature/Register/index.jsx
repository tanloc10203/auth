import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import InputCustom from '../../components/customForm/InputCusTom';
import styles from "./register.module.css";
import { registerPost, setState } from './registerSlice';
import clsx from "clsx";

function Register(props) {
  const { login, loginMain, loginTitle, btnLogin, dots, error, success } = styles;
  const state = useSelector(state => state.register);
  const dispatch = useDispatch();

  const handleRegister = () => {
    const data = {
      username: state.username,
      password: state.password
    }
    dispatch(registerPost(data));
  }

  return (
    <main className={login}>
      <div className={loginMain}>
        <h1 className={loginTitle}>Đăng Ký</h1>
        {
          state.isRegistered
            ? <p className={success}>{state && state?.errors.success ? state.errors.success : ""}</p>
            : <p className={error}>{state && state?.errors.err ? state.errors.err : ""}</p>
        }
        <div className="login-form">
          <InputCustom
            type="text"
            label="Tài khoản"
            value={state.username}
            name="username"
            onChange={e => dispatch(setState(e))}
          />
          <InputCustom
            type="password"
            label="Mật khẩu"
            value={state.password}
            name="password"
            onChange={e => dispatch(setState(e))}
          />
          <label htmlFor="">Ngôn ngữ</label>  {" | "}
          <select name="lang" id="">
            <option value="VI">Vietnamese</option>
            <option value="EN">English</option>
            <option value="JP">Janpan</option>
          </select>
          {state.isLoading && ""}
          <button
            className={clsx(btnLogin, {
              [styles.active]: state.isLoading
            })}
            onClick={handleRegister}
          >
            Đăng ký
            {state.isLoading && <div className={dots}></div>}
          </button>
        </div>
      </div>
    </main>
  )
}

Register.propTypes = {

}

export default Register;

