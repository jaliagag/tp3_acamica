module.exports = (sequelize, DataTypes) => {
    const Role = sequelize.define('role', {
        roleId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
        {
            tableName: 'role'
        })
    return Role
} 