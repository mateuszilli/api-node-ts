import { Connection, createConnection, getConnectionOptions } from "typeorm";

export default async(): Promise<Connection> => {
    const defaultOptions = await getConnectionOptions();
    
    const database = process.env.NODE_ENV === 'test' ? './database/db.test.sqlite' : defaultOptions.database;

    return createConnection(
        Object.assign(defaultOptions, { 
            database
        })
    ); 
}