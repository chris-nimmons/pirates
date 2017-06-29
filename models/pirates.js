'use strict';
module.exports = function (sequelize, DataTypes) {
  var pirates = sequelize.define('pirates', {
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    hasHook: DataTypes.BOOLEAN
  });
  
  pirates.associate = function (models) {
    pirates.hasMany(models.islands);
  }

  return pirates;
};