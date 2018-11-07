import express from 'express';
import { Route } from '../app/Http';

const router = express.Router();

// HomeController
router.get('/home', Route('HomeController', 'index'));

// Users
router.get('/users/token', Route('UserController', 'getAuthResponse'));
router.get('/users', Route('UserController', 'getList'));
router.post('/register', Route('UserController', 'createData'));
router.post('/login', Route('UserController', 'login'));

// Products
router.get('/products/', Route('ProductController', 'getList'));
router.get('/products/:id', Route('ProductController', 'getByID'));

export default router;
