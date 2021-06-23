const ArtifactsMainStats = require('./ArtifactsMainStats');
const ArtifactsSubStats = require('./ArtifactsSubStats');

/*
  This class implements the other two artifact-related files.
  It has all the information existent on artifacts.
*/

class Artifact {
  constructor(name, stars, type, level, mainStat) {
    this.name = name;
    this.stars = stars;
    this.type = type;
    this.level = level;
    /* Can I group these two lines below together? */
    this.mainStat = { name: mainStat };
    this.mainStat.value = ArtifactsMainStats.discover(this.stars, this.level, this.mainStat.name);
    this.subStats = [];
  }

  setSubStat(number, stat, value) {
    const upgrades = ArtifactsSubStats.calculator(stat, value, this.level, this.stars);

    this.subStats[number] = {
      stat,
      value,
      upgrades,
    };

    return this.subStats[number];
  }
}

module.exports = Artifact;