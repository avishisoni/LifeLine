import React, { useState } from 'react';

function Register() {
const [email, setEmail] = useState('');
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [message, setMessage] = useState('');
const [error, setError] = useState('');


async function handleSubmit(event) {
  event.preventDefault();
  setError('');
  setMessage('');
  
  try {
  const response = await fetch('/register', {
  method: 'POST',
  headers: {
  'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: new URLSearchParams({ email, username, password }),
  });
  
  if (!response.ok) {
    // Handle non-2xx responses
    try {
      const errorData = await response.json();
      setError(errorData.detail || 'Registration failed');
    } catch (jsonError) {
      // If response is not JSON, show a generic error with status code
      setError(`Registration failed with status ${response.status}`);
      console.error('Failed to parse error JSON:', jsonError);
    }
  } else {
    const data = await response.json();
    setMessage(data.message);
    setEmail('');
    setUsername('');
    setPassword('');
  }

  } catch (error) {
  console.error('Registration error:', error);
  setError('An unexpected error occurred');
  }
};

return (
<div>
<h2>Register</h2>
{message && <p style={{ color: 'green' }}>{message}</p>}
{error && <p style={{ color: 'red' }}>{error}</p>}
<form onSubmit={handleSubmit}>
<div>
<label htmlFor="email">Email:</label>
<input
type="email"
id="email"
value={email}
onChange={(e) => setEmail(e.target.value)}
required
/>
</div>
<div>
<label htmlFor="username">Username:</label>
<input
type="text"
id="username"
value={username}
onChange={(e) => setUsername(e.target.value)}
required
/>
</div>
<div>
<label htmlFor="password">Password:</label>
<input
type="password"
id="password"
value={password}
onChange={(e) => setPassword(e.target.value)}
required
/>
</div>
<button type="submit">Register</button>
</form>
</div>
);
}

export default Register;