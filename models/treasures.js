'use strict';
module.exports = function (sequelize, DataTypes) {
  var treasures = sequelize.define('treasures', {
    latitude: DataTypes.DOUBLE,
    longitude: DataTypes.DOUBLE,
    type: DataTypes.STRING,
    weight: DataTypes.FLOAT,
    value: DataTypes.FLOAT,
    isBoobyTrapped: DataTypes.BOOLEAN
  });
  treasures.associate = function (models) {
    treasures.belongsTo(models.islands, { foreignKey: 'id' })
  }

  return treasures;
};