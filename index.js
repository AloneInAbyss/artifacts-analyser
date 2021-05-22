const Artifact = require('./utils/Artifact')
const SubstatsCalculator = require('./utils/SubstatsCalculator')

const GanyuCirclet = new Artifact('Herói Invernal', 'Circlet', 1)
console.log(GanyuCirclet)

console.log(GanyuCirclet.setSubstat(0, 'CritDMG', 5.4))
console.log(GanyuCirclet.setSubstat(1, 'ATKPerc', 4.1))
console.log(GanyuCirclet.setSubstat(2, 'EM', 19))
console.log(GanyuCirclet.setSubstat(3, 'ER', 5.2))
console.log(GanyuCirclet)