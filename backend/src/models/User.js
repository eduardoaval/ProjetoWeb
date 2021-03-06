const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize){
        super.init({
            nickName: DataTypes.STRING,
            name: DataTypes.STRING,
            surname: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            photo: DataTypes.STRING,
        }, { sequelize })
    }
}

module.exports = User;