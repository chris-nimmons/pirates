//pirate name, hook?, islands, password
//island name, treasures, longitude, latitude
//treasure type, weight, value, longitude, latitude

var pirate = {};
pirate.name = 'Steve';
pirate.password = 'shivermetimbers123';
pirate.islands = [];
pirate.hasHook = true;

var island = {};
island.name = 'Steves Island of Death and Gold! Arrrggggg';
island.longitude = NaN;
island.latitude = NaN;
island.treasures = [];

pirate.islands.push(island);

var treasure = {};
treasure.type = 'Rum';
treasure.weight = 50;
treasure.value = 10;
treasure.longitude = NaN;
treasure.latitude = NaN;

island.treasures.push(treasure);