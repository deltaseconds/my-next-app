import bcrypt from 'bcrypt';
import { connectToDatabase } from '../../lib/mysql';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { username, email, password } = req.body;

  const connection = await connectToDatabase();

  // Check if user already exists
  const [existingUser] = await connection.execute('SELECT * FROM users WHERE email = ?', [email]);
  if (existingUser.length > 0) {
    return res.status(400).json({ error: 'Email already registered' });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Insert the new user into the database
  await connection.execute('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [
    username,
    email,
    hashedPassword,
  ]);

  res.status(201).json({ message: 'User registered successfully' });
}