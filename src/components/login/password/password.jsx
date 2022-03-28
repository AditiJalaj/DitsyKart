import React from 'react';
import * as styles from '../styles';

function Password(props) {
  return (
    <div style={styles.loginContainer}>
      <h2>Login to your account</h2>
      <input style={styles.inputLogin} class='input' type='text' placeholder='Email or Mobile Number' />
      <input style={styles.inputLogin} class='input' type='password' placeholder='Password' />
      <button class='btn elevated'>LOGIN</button>
      <p>
        Forgot your password?
        <button style={styles.subaction} class='text-btn'>
          Reset here
        </button>
      </p>
    </div>
  );
}

export default Password;
