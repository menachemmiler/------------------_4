import { Router } from 'express';
import { login } from '../controllers/authController';

const router = Router();


router.post('/login', login); // התחברות של משתמש למערכת (יוצר לו טוקן עם הפרטים שלו)



export default router;
