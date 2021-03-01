import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { AmountRepository } from "../repositories/AmountRepository";

class AmountController {

    async create(request: Request, response: Response) {
        const { price } = request.body;

        const amountRepository = getCustomRepository(AmountRepository);

        const amount = amountRepository.create({
            price
        });

        await amountRepository.save(amount);


        return response.status(200).json(amount);
    }

    async read(request: Request, response: Response) {
        const amountRepository = getCustomRepository(AmountRepository);

        const result = await amountRepository.find();

        return response.status(200).json(result);
    }

}

export { AmountController };
