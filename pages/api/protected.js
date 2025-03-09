import nextConnect from 'next-connect';
import passport from '../../lib/passport';

const handler = nextConnect();

handler.use(passport.initialize());

handler.get(passport.authenticate('bearer', { session: false }), (req, res) => {
  res.status(200).json({ message: 'This is a protected route', user: req.user });
});

export default handler;