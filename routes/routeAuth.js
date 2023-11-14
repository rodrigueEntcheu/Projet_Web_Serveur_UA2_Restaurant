import { Router } from "express";

import { login } from "../Auth/loginController.js";

const router = Router();

router.post('/', login);

export default router;