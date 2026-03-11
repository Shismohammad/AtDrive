import React, { useState } from 'react';
import { login } from '../services/api';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async () => {
    try {
      let data = await login({
        username: username,
        password: password,
      });
      alert('Login successful', data);
    } catch (error) {
      alert('Login failed : wrong credentials');
      console.log(error);
    }
  };

  return (
    <div
      style={{
        marginTop: '150px',
      }}
    >
      <div>
        <input
          type="text"
          style={{ padding: '10px' }}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          style={{ padding: '10px', marginTop: '20px' }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button
        onClick={() => loginUser()}
        style={{ background: 'blue', color: 'white', marginTop: '20px' }}
      >
        Login
      </button>
    </div>
  );
}
