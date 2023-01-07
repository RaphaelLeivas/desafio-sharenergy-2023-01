import React from 'react';
import { useNavigation } from '../navigation';
import { AuthService } from '../services';

const Login = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    AuthService.setToken('tokenFakeTMP');
    navigation('/home');
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Teste</button>
    </div>
  );
};

export default Login;
