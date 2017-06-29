'use strict';
module.exports = function (sequelize, DataTypes) {
  var islands = sequelize.define('islands', {
    name: { type: DataTypes.STRING, allowNull: true },
    latitude: DataTypes.DOUBLE,
    longitude: DataTypes.DOUBLE
  });
  
  islands.associate = function (models) {
    islands.belongsTo(models.pirates, { foreignKey: 'pirateId' });
    islands.hasMany(models.treasures, { foreignKey: 'islandId' });
  }

  return islands;
};