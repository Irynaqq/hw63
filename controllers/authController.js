import jwt from 'jsonwebtoken';

const SECRET = 'supersecretkey';

function register(req, res) {
  const { username } = req.body;

  if (!username) {
    return res.status(400).send('Username is required');
  }

  const token = jwt.sign({ username }, SECRET, { expiresIn: '1h' });

  res.cookie('token', token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60,
  });

  res.send('User registered');
}

function login(req, res) {
  const { username } = req.body;

  if (!username) {
    return res.status(400).send('Username is required');
  }

  const token = jwt.sign({ username }, SECRET, { expiresIn: '1h' });

  res.cookie('token', token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60,
  });

  res.send('User logged in');
}

export { register, login };