import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../Connection/sequelize.js';


class Band extends Model {
    
}

Band.init({
    id: {
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [3, 50],
        },
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [3, 50],
        },
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [3, 50],
            is: /^[a-zA-Z\s]+$/i,
        },
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            len: [3, 200],
            is: /^[a-zA-Z\s]+$/i,
        },
    },
}, {
    sequelize,
    modelName: 'Band',
});