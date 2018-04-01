import express from 'express';
import { Route } from '../app/Http';

const router = express.Router();

// HomeController
router.get('/home', Route('HomeController', 'index'));
router.get('/json', Route('JsonController', 'index'));

export default router;
