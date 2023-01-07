import React from "react";
import { useNavigation } from '../navigation';

const Login = () => {
  const navigation = useNavigation();

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={() => navigation("/home")}>Teste</button>
    </div>
  )
};

export default Login;
