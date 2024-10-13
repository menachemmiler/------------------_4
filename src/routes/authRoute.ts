import { Router } from 'express';
import { loginStudent, loginTeacher } from '../controllers/authController';

const router = Router();


router.post('/student/login', loginStudent);
router.post('/teacher/login', loginTeacher);



export default router;
