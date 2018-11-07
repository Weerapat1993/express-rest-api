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

// Articles
router.get('/articles', Route('ArticleController', 'getList'));
router.get('/articles/:id', Route('ArticleController', 'getByID'));
router.post('/articles', Route('ArticleController', 'postByID'));
router.put('/articles', Route('ArticleController', 'updateByID'));
router.delete('/articles', Route('ArticleController', 'deleteByID'));

export default router;
