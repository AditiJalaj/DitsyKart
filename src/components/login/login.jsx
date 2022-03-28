import React from 'react';
import * as styles from './styles';

function Login(props) {
  return (
    <div style={styles.loginContainer}>
      <h2>Login or Signup</h2>
      <input style={styles.inputLogin} class='input' type='text' placeholder='Enter number' />
      <p>
        By continuing I agree to the
        <button style={styles.subaction} class='text-btn'>
          Terms of Use and Privacy Policy
        </button>
      </p>
      <button class='btn elevated'>CONTINUE</button>
    </div>
  );
}

export default Login;
