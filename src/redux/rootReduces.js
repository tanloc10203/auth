import loginReducer from "../feature/Login/loginSlice";
import registerReducer from "../feature/Register/registerSlice";
import profileReducer from "../feature/Profile/profileSlice";

const rootReduces = {
  login: loginReducer,
  register: registerReducer,
  profile: profileReducer
};

export default rootReduces;