import passport from 'passport';
import { Strategy as BearerStrategy } from 'passport-http-bearer';
import jwt from 'jsonwebtoken';
import { connectToDatabase } from './mysql';

passport.use(new BearerStrategy(async (token, done) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const connection = await connectToDatabase();
    const [user] = await connection.execute('SELECT * FROM users WHERE id = ?', [decoded.id]);

    if (user.length === 0) {
      return done(null, false);
    }

    return done(null, user[0]);
  } catch (error) {
    return done(error);
  }
}));

export default passport;