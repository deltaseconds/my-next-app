'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Account() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      router.replace('/account/profile');
    } else {
      setIsLoggedIn(false);
      router.replace('/account/login');
      
    }
  }, [router]);

    return (
      <div>
        <h1>This is the Account page</h1>
        <p>
          <a>This is the Account Management Dashboard</a>
        </p>
      </div>
    );
  }
  