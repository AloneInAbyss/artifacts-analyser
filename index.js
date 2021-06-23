const Artifact = require('./utils/Artifact');

const GanyuSands = new Artifact('Wanderer\'s Troupe', 5, 'Sands', 20, 'ATKPerc');
GanyuSands.setSubStat(0, 'CritDmg', 46.8);
GanyuSands.setSubStat(1, 'CritRate', 23.4);
GanyuSands.setSubStat(2, 'HPPerc', 34.8);
GanyuSands.setSubStat(3, 'ER', 39);
console.log(GanyuSands);

/*

  TAREFAS
  - Verificar se o substatus é igual ao mainstatus.
  - Verificar se há status duplicados, entre os substatus.
  - Verificar a quantidade total de upgrades encontrada,
    porque há um limite dependendo do nível/raridade do artefato.
  - Verificar os casos em que o valor arredonda para cima.

*/


/*

  SUBSTATS
  Podemos substituir o switch(maxUpgradesCount) por uma
  sequência de IFs que verifica se o número é maior ou
  igual a 0, 1, ..., 5 e executa o trecho de código correspondente

*/


/*

  ARTIFACTS.JS
  Implementar funções que checam se os valores em 'Artifact.js'
  são válidos. Precisa checar: nome do conjunto, raridade/nível,
  tipo de peça, tipo de mainstat, tipos de substats.
  O substat não pode se repetir nem ser igual ao mainstat.
  Verificar o mainstat de acordo com o tipo de peça.

  Na função setSubStat verificar se number é entre 0~3
  (ou 1~4 para facilitar a legibilidade, mas subtrair no índice do array)

  Verificar se a soma de upgrades de substats não ultrapassa o limite

*/