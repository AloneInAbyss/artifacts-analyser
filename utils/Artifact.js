const ArtifactsMainStats = require('./ArtifactsMainStats');
const ArtifactsSubstats = require('./ArtifactsSubstats');

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
    this.substats = [];
  }

  setSubstat(number, stat, value) {
    const upgrades = ArtifactsSubstats.calculator(stat, value, this.level, this.stars);

    this.substats[number] = {
      stat,
      value,
      upgrades,
    };

    return this.substats[number];
  }
}

module.exports = Artifact;