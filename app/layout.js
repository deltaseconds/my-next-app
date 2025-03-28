'use client';

import './globals.css';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Layout({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    router.replace('/account/login');
  };

  return (
    <html lang="en">
      <head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
        </style>
        <title>VENTURIZE</title>
      </head>

      <body>
        <nav>
          <ul>
            <li><a href="/ " id="app_name">VENTURIZE</a></li>
            <li><a href="/about">ABOUT</a></li>
            {!isLoggedIn && <li><a href="/account/register">REGISTER</a></li>}
            {!isLoggedIn && <li><a href="/account/login">LOGIN</a></li>}
            {isLoggedIn && <li><a href="/account">ACCOUNT</a></li>}
            {isLoggedIn && <li><a href='/account/login' onClick={handleLogout}>LOGOUT</a></li>}
          </ul>
        </nav>
        <footer>
          <p className="deltaseconds">© 2025 DELTASECONDS</p>
        </footer>
        <div className="background"></div>
        {children}
      </body>
    </html>
  );
}