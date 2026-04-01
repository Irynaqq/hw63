import express from 'express';
import { getRoot } from '../controllers/rootController.js';
import { logRequests } from '../middlewares/logger.js';

const router = express.Router();

router.get('/', logRequests, getRoot);

router.get('/set-theme/:theme', (req, res) => {
  const { theme } = req.params;

  res.cookie('theme', theme, {
    maxAge: 1000 * 60 * 60 * 24,
  });

  res.redirect('/users');
});

export default router;