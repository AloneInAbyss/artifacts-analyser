class Artifact {
  constructor(name, type, level) {
    this.name = name
    this.type = type
    this.level = level
    this.substats = []

    this.setMainStat()
  }

  setMainStat() {
  }

  setSubstat(number, type, value) {
    this.substats[number] = {
      type,
      value
    }
    return this.substats[number]
  }
}

module.exports = Artifact