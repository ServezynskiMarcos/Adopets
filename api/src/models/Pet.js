const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('pet', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    species: {
      type: DataTypes.ENUM('perro', 'gato', 'otro'),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    picture: { 
      type: DataTypes.STRING
    },
    coexistence: {
      type: DataTypes.ENUM('si', 'no'),
    },
    ubication: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },{ timestamps: false });
};
