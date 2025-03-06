import Link from 'next/link';

export default function Login() {
    return (
      <div>
        <h1>This is the login page</h1>
        <p>
          <Link href="/account/register">
            Dont have an account?
          </Link>
        </p>
      </div>
    );
  }
  