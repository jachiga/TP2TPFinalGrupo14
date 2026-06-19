import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../Connection/sequelize.js';


class Album extends Model {
    
}

Album.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    year: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 4],
            is: /^[0-9]+$/i,
        }
    },
    bandId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            len: [1, 11],
            is: /^[0-9]+$/i,
        }
    },
}, {
    sequelize,
    modelName: 'Album',
});