import React, { useState } from 'react';

const SimpleLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://adrian.informaticamajada.es/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Accept": "application/json",
        },
        body: JSON.stringify({
          email: 'test@example.com',
          password: 'password'
        }),
        credentials: "include"
      });

      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }

      const data = await response.json();
      setToken(data.token); // Guardar el token en el estado
      console.log('Token recibido:', data.token);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>

      {token && (
        <div>
          <h2>Token recibido:</h2>
          <p>{token}</p>
        </div>
      )}
    </div>
  );
};

export default SimpleLogin;