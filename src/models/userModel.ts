
import {Model, DataTypes} from 'sequelize';
import {sequelize} from '../config/db';

export class User extends Model{
    public id!: number;
    public name!: string;
    public address!: string;
}

User.init(
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull:false
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        address:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
        sequelize,
        modelName: 'User',
        tableName: "users",
        timestamps: false
    }
)
