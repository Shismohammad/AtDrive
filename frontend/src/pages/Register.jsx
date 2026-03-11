import React, { useState } from 'react';
import { register } from '../services/api';

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const registerUser = async () => {
    try {
      let data = await register({
        username: username,
        password: password,
      });
      alert('Registration successful', data);
    } catch (error) {
      alert('Registration failed : invalid inputs');
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
        onClick={() => registerUser()}
        style={{ background: 'blue', color: 'white', marginTop: '20px' }}
      >
        Register
      </button>
    </div>
  );
}
