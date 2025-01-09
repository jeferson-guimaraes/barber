import { Router, Request, Response } from 'express';
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';

const router = Router();

router.get('/teste', (req: Request, res: Response) => {
	res.json({ ok: true });
});

// --- ROTAS USER ---
router.post('/users', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);

export { router };