import { useSelector } from "react-redux";

function useAuth(name) {
  const state = useSelector(state => state[name]);
  return state;
}

export { useAuth };