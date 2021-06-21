const ArtifactsMainStats = require('./ArtifactsMainStats')
const ArtifactsSubstats = require('./ArtifactsSubstats')

class Artifact {
  constructor(name, stars, type, level, mainStat) {
    this.name = name
    this.stars = stars
    this.type = type
    this.level = level
    this.mainStat = { name: mainStat }
    this.mainStat.value = ArtifactsMainStats.discover(this.stars, this.level, this.mainStat.name)
    this.substats = []
  }

  setSubstat(number, stat, value) {
    let upgrades = ArtifactsSubstats.calculator(stat, value, this.level, this.stars)

    this.substats[number] = {
      stat,
      value,
      upgrades
    }
    
    return this.substats[number]
  }

}

module.exports = Artifact