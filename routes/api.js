import express from 'express';
import { Route } from '../app/Http';

const router = express.Router();

// HomeController
router.get('/home', Route('HomeController', 'index'));

export default router;
