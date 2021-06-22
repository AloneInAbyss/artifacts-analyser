const Artifact = require('./utils/Artifact');

// const GanyuSands = new Artifact('Herói Invernal', 5, 'Sands', 20, 'ATKPerc');
// GanyuSands.setSubstat(0, 'CritDmg', 46.8);
// GanyuSands.setSubstat(1, 'CritRate', 23.4);
// GanyuSands.setSubstat(2, 'HPPerc', 34.8);
// GanyuSands.setSubstat(3, 'ER', 39);
// console.log(GanyuSands);

/*

  - Verificar se o substatus é igual ao mainstatus.
  - Verificar se há status duplicados, entre os substatus.
  - Verificar a quantidade total de upgrades encontrada,
    porque há um limite dependendo do nível/raridade do artefato.
  - Verificar os casos em que o valor arredonda para cima.

*/