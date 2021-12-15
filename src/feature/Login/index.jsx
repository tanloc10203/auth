import React from 'react';
import InputCustom from '../../components/customForm/InputCusTom';
import styles from "./login.module.css";

function Login(props) {
  const { login, loginMain, loginTitle, btnLogin } = styles;
  return (
    <main className={login}>
      <div className={loginMain}>
        <h1 className={loginTitle}>Đăng nhập</h1>
        <div className="login-form">
          <InputCustom type="text" label="Tài khoản" />
          <InputCustom type="password" label="Mật khẩu" />
          <label htmlFor="">Ngôn ngữ</label>  {" | "}
          <select name="lang" id="">
            <option value="VI">Vietnamese</option>
            <option value="EN">English</option>
            <option value="JP">Janpan</option>
          </select>
          <button className={btnLogin}>Đăng nhập</button>
        </div>
      </div>
    </main>
  )
}

Login.propTypes = {

}

export default Login;

