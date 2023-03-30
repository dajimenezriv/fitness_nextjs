import { useState } from 'react';
import styles from './index.module.scss';

export default function Login() {
  const [username, setUsername] = useState<string>('admin');
  const [password, setPassword] = useState<string>('admin');

  return (
    <div className={styles.login}>
      <div className={styles.form}>
        <input
          placeholder='Username'
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          placeholder='Password'
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
    </div>
  )
}
