// flow-> login , then otp component renders,
// if on otp screen user selects login with password -then password compnent
import React from 'react';
import Login from '../../components/login/login';
import Otp from '../../components/login/otp/otp';
import Password from '../../components/login/password/password';
import * as styles from './styles';

function LoginScreen(props) {
  return (
    <div style={styles.loginScreenContainer}>
      <Login />
      <Otp />
      <Password />
    </div>
  );
}

export default LoginScreen;
