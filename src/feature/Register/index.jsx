import React from 'react';
import InputCustom from '../../components/customForm/InputCusTom';
import styles from "./register.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setState } from './registerSlice';

function Register(props) {
  const { login, loginMain, loginTitle, btnLogin } = styles;
  const state = useSelector(state => state.register);
  const dispatch = useDispatch();

  return (
    <main className={login}>
      <div className={loginMain}>
        <h1 className={loginTitle}>Đăng Ký</h1>
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
          <button className={btnLogin}>Đăng ký</button>
        </div>
      </div>
    </main>
  )
}

Register.propTypes = {

}

export default Register;

