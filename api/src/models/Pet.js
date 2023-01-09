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
      type: DataTypes.ENUM('dog', 'cat', 'other'),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    picture: { 
      type: DataTypes.STRING
    },
    coexistence: {
      type: DataTypes.ENUM('yes', 'no'),
    }
  },{ timestamps: false });
};
