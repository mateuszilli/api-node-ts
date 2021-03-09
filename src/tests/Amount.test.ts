import request from "supertest";
import { app } from "../app";

import createConnection from "../../database";
import { getConnection } from "typeorm";

describe("Amounts", () => {
    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    });

    afterAll(async () => {
        const connection = getConnection();
        await connection.dropDatabase();
        await connection.close();
    });

    it("Should create a new amount", async () => {
        const response = await request(app).post('/amounts').send({ price: 3000.00 });

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('id');

    });

    it("Should return all amounts", async () => {
        const response = await request(app).get('/amounts');

        expect(response.status).toBe(200);
        expect(response.body.length).toBe(1);
    });
})
