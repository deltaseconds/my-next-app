import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { connectToDatabase } from '../../lib/mysql';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, password } = req.body;

  const connection = await connectToDatabase();

  // Check if user exists
  const [user] = await connection.execute('SELECT * FROM users WHERE email = ?', [email]);
  if (user.length === 0) {
    return res.status(400).json({ error: 'Invalid email or password' });
  }

  const userRecord = user[0];

  // Compare the password
  const isPasswordValid = await bcrypt.compare(password, userRecord.password);
  if (!isPasswordValid) {
    return res.status(400).json({ error: 'Invalid email or password' });
  }

  // Generate JWT token
  const token = jwt.sign({ id: userRecord.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

  res.status(200).json({ message: 'Login successful', token });
}