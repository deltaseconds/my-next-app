'use client';
import withAuth from '../../../components/withAuth';

function Profile() {
  return (
    <div>
      <h1>Profile Page</h1>
      <p>This is a protected page.</p>
    </div>
  );
}

export default withAuth(Profile);