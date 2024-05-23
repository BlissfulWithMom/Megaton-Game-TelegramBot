import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        // static associate(models) {
        //     // define association here
        // }
    }

    User.init(
        {
            uuid: DataTypes.UUID,
            first_name: DataTypes.STRING,
            last_name: DataTypes.STRING,
            userName: DataTypes.STRING,
            password: DataTypes.STRING,
            status: DataTypes.INTEGER,
            userName_verified: DataTypes.INTEGER,
            address: DataTypes.STRING,
            phone_number: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'user',
            underscored: true,
        }
    );
    return User;
};
