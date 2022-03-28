import React from 'react';
import * as styles from '../styles';

function Otp(props) {
  return (
    <div style={styles.loginContainer}>
      <h2>Verify with OTP</h2>
      <p>Sent to (phone number)</p>
      <div style={styles.otpContainer}>
        <input class='input' style={styles.otpInput} />
        <input class='input' style={styles.otpInput} />
        <input class='input' style={styles.otpInput} />
        <input class='input' style={styles.otpInput} />
      </div>
      <button class='text-btn'>RESEND OTP</button>
      <p>
        Log in using <button class='text-btn'>PASSWORD</button>
      </p>
    </div>
  );
}

export default Otp;
