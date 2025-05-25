import { Sequelize } from 'sequelize';

import dotenv from 'dotenv';
dotenv.config();


console.log("DB_USER", process.env.DB_USER);


export const sequelize = new Sequelize(
    process.env.DB_NAME as string,
    process.env.DB_USER as string,
    process.env.DB_PASSword,{
        host: process.env.DB_HOST,
        dialect:'mysql'
    }
);



