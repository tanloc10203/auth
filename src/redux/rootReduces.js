import loginReducer from "../feature/Login/loginSlice";
import registerReducer from "../feature/Register/registerSlice";

const rootReduces = {
  login: loginReducer,
  register: registerReducer
};

export default rootReduces;