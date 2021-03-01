import { Router } from "express";

import { AmountController } from "./controllers/AmountController";

const router = Router();

const amountController = new AmountController();

router.post('/amounts', amountController.create);
router.get('/amounts', amountController.read);


export { router };
