const Artifact = require('./utils/Artifact')

const GanyuCirclet = new Artifact('Herói Invernal', 5, 'Circlet', 20, 'CritDmg')
// console.log(GanyuCirclet)

// console.log(GanyuCirclet.setSubstat(0, 'CritDmg', 27.0))
// GanyuCirclet.setSubstat(0, 'CritDMG', 27.0)
// GanyuCirclet.setSubstat(1, 'ATKPerc', 8.2)
// GanyuCirclet.setSubstat(2, 'EM', 19)
// GanyuCirclet.setSubstat(3, 'ER', 5.2)
// console.log(GanyuCirclet)

// GanyuCirclet.name = 'Bruxa das Chamas Carmesim'
// console.log(GanyuCirclet)

// const GanyuPlume = new Artifact('Herói Invernal', 5, 'Plume', 0, 'ATKFlat')
// GanyuPlume.setSubstat(0, 'CritDmg', 7.0)
// console.log(GanyuPlume)

const GanyuSands = new Artifact('Herói Invernal', 4, 'Sands', 12, 'ER')
GanyuSands.setSubstat(0, 'EM', 53)
console.log(GanyuSands)






