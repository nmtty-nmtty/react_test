import { useState } from "react";
import "./styles.css";

const LogoutButton = (props) => {
  return <button onClick={props.toggleIsLoggedIn}>ログアウト</button>;
};

const LoginButton = (props) => {
  return <button onClick={props.toggleIsLoggedIn}>ログイン</button>;
};

const LoginControl = () => {
  const [isLoggedIn, setIsLoggedInState] = useState(false);

  const toggleIsLoggedIn = () => {
    setIsLoggedInState(!isLoggedIn);
  };

  if (isLoggedIn) {
    return <LogoutButton toggleIsLoggedIn={toggleIsLoggedIn} />;
  }

  return <LoginButton toggleIsLoggedIn={toggleIsLoggedIn} />;
};

export default function App() {
  return <LoginControl />;
}
