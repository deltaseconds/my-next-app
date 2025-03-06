'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatpassword, setRepeatPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="register-form">
      <h1>REGISTER</h1>
      <form onSubmit={handleSubmit} >
        <div>
          <label htmlFor="username">USERNAME</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">E-MAIL ADDRESS</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">PASSWORD</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">REPEAT PASSWORD</label>
          <input
            type="password"
            id="repeatpassword"
            value={repeatpassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">SUBMIT</button>
      </form>
      <p>
        <Link className="redirect" href="/account/login">
          Have an account already?
        </Link>
      </p>
    </div>
  );
}