import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("amounts")
class Amount {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    price: number;

    @CreateDateColumn()
    readonly created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { Amount }