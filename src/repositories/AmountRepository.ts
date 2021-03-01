import { EntityRepository, Repository } from "typeorm";
import { Amount } from "../models/Amount";

@EntityRepository(Amount)
class AmountRepository extends Repository<Amount> {

}

export { AmountRepository }