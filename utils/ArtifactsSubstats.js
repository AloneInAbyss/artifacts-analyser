/*
    INFO COLLECTED FROM:
    Genshin Impact Wiki - Fandom
    https://genshin-impact.fandom.com/wiki/Artifacts#Sub_Stats

    These are the values that artifacts get in their substats at each level. 
*/

const ArtifactsSubstats = {
  fiveStar: {
    HPFlat:   [209, 239, 269, 299],
    ATKFlat:  [14 , 16 , 18 , 19 ],
    DEFFlat:  [16 , 19 , 21 , 23 ],
    HPPerc:   [4.1, 4.7, 5.3, 5.8],
    ATKPerc:  [4.1, 4.7, 5.3, 5.8],
    DEFPerc:  [5.1, 5.8, 6.6, 7.3],
    EM:       [16 , 19 , 21 , 23 ],
    ER:       [4.5, 5.2, 5.8, 6.5],
    CritRate: [2.7, 3.1, 3.5, 3.9],
    CritDmg:  [5.4, 6.2, 7.0, 7.8],
    MaxLevel: 20
  },
  fourStar: {
    HPFlat:   [167, 191, 215, 239],
    ATKFlat:  [11 , 12 , 14 , 16 ],
    DEFFlat:  [13 , 15 , 17 , 19 ],
    HPPerc:   [3.3, 3.7, 4.2, 4.7],
    ATKPerc:  [3.3, 3.7, 4.2, 4.7],
    DEFPerc:  [4.1, 4.7, 5.3, 5.8],
    EM:       [13 , 15 , 17 , 19 ],
    ER:       [3.6, 4.1, 4.7, 5.2],
    CritRate: [2.2, 2.5, 2.8, 3.1],
    CritDmg:  [4.4, 5.0, 5.6, 6.2],
    MaxLevel: 16
  },
  threeStar: {
    HPFlat:   [100, 115, 129, 143],
    ATKFlat:  [7  , 8  , 9       ],
    DEFFlat:  [8  , 9  , 10 , 11 ],
    HPPerc:   [2.5, 2.8, 3.2, 3.5],
    ATKPerc:  [2.5, 2.8, 3.2, 3.5],
    DEFPerc:  [3.1, 3.5, 3.9, 4.4],
    EM:       [10 , 11 , 13 , 14 ],
    ER:       [2.7, 3.1, 3.5, 3.9],
    CritRate: [1.6, 1.9, 2.1, 2.3],
    CritDmg:  [3.3, 3.7, 4.2, 4.7],
    MaxLevel: 12
  },
  twoStar: {
    HPFlat:   [50 , 61 , 72 ],
    ATKFlat:  [3  , 4  , 5  ],
    DEFFlat:  [4  , 5  , 6  ],
    HPPerc:   [1.6, 2.0, 2.3],
    ATKPerc:  [1.6, 2.0, 2.3],
    DEFPerc:  [2.0, 2.5, 2.9],
    EM:       [7  , 8  , 9  ],
    ER:       [1.8, 2.2, 2.6],
    CritRate: [1.1, 1.3, 1.6],
    CritDmg:  [2.2, 2.6, 3.1],
    MaxLevel: 8
  },
  oneStar: {
    HPFlat:   [24 , 30 ],
    ATKFlat:  [2       ],
    DEFFlat:  [2       ],
    HPPerc:   [1.2, 1.5],
    ATKPerc:  [1.2, 1.5],
    DEFPerc:  [1.5, 1.8],
    EM:       [5  , 6  ],
    ER:       [1.3, 1.6],
    CritRate: [0.8, 1.0],
    CritDmg:  [1.6, 1.9],
    MaxLevel: 4
  },
  // ArtifactsSubstats.calculator(String stat, Number value, Number level, Number stars)
  calculator(stat, value, level, stars) {
    let maxUpgradesCount = 0;
    let rarity = '', i = 0, j = 0, k = 0, l = 0, m = 0;

    switch (stars) {
      case 5:
        if (level < 0 || level > 20) {
          throw new Error('Incorrect level value')
        }
        if (level === 20) {
          maxUpgradesCount = 5
        } else if (level >= 16) {
          maxUpgradesCount = 4
        } else if (level >= 12) {
          maxUpgradesCount = 3
        } else if (level >= 8) {
          maxUpgradesCount = 2
        } else if (level >= 4) {
          maxUpgradesCount = 1
        } else {
          maxUpgradesCount = 0
        }
        rarity = 'fiveStar'
        break
      case 4:
        if (level < 0 || level > 16) {
          throw new Error('Incorrect level value')
        }
        if (level === 16) {
          maxUpgradesCount = 3
        } else if (level >= 12) {
          maxUpgradesCount = 2
        } else if (level >= 8) {
          maxUpgradesCount = 1
        } else {
          maxUpgradesCount = 0
        }
        rarity = 'fourStar'
        break
      case 3:
        if (level < 0 || level > 12) {
          throw new Error('Incorrect level value')
        }
        if (level === 12) {
          maxUpgradesCount = 1
        } else {
          maxUpgradesCount = 0
        }
        rarity = 'threeStar'
        break
      case 2:
        if (level < 0 || level > 8) {
          throw new Error('Incorrect level value')
        }
        maxUpgradesCount = 0
        rarity = 'twoStar'
        break
      case 1:
        if (level < 0 || level > 4) {
          throw new Error('Incorrect level value')
        }
        maxUpgradesCount = 0
        rarity = 'oneStar'
        break
      default:
        throw new Error('Incorrect stars value')
    }

    switch (stat) {
      case 'HPFlat':
      case 'ATKFlat':
      case 'HPPerc':
      case 'ATKPerc':
      case 'DEFPerc':
      case 'PhysDmg':
      case 'ElemDmg':
      case 'EM':
      case 'ER':
      case 'CritRate':
      case 'CritDmg':
      case 'HealBonus':
        break;
      default:
        throw new Error('Incorrect stat value')
    }

    function getObjectSize(obj) {
      let size = 0, key

      for (key in obj) {
        if (obj.hasOwnProperty(key)) size++
      }

      return size
    }

    let artifactStat = ArtifactsSubstats[rarity][stat]
    let length = getObjectSize(artifactStat)
    let matches = []
    let currentResult = [], result = true;

    function arrayCompare(_arr1, _arr2) {
      if (
        !Array.isArray(_arr1)
        || !Array.isArray(_arr2)
        || _arr1.length !== _arr2.length
      ) {
        return false;
      }
      
      // .concat() to not mutate arguments
      const arr1 = _arr1.concat().sort();
      const arr2 = _arr2.concat().sort();
      
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
          return false;
        }
      }
      
      return true;
    }

    switch (maxUpgradesCount) {
      case 0:
        // Nenhum upgrade
        for(i; i < length; i++) {
          if (value === artifactStat[i]) {
            matches.push(artifactStat[i])
          }
        
          if (matches.length > 0) {
            return 'No upgrades - Base value: ' + matches
          }
        }

        break
      case 1:
        // Nenhum upgrade
        for(i; i < length; i++) {
          if (value === artifactStat[i]) {
            matches.push(artifactStat[i])
          }
        }
        i = 0;
        
        if (matches.length > 0) {
          return 'No upgrades - Base value: ' + matches
        }

        // Um upgrade
        for(i; i < length; i++) {
          for(j; j < length; j++) {
            // console.log("subtração: " + (value - artifactStat[j]) + " igual a " + artifactStat[i]);
            if (value - artifactStat[j] === artifactStat[i]) {
              currentResult = [artifactStat[i], artifactStat[j]]

              if (matches.length > 0) {
                result = true
                for (const element of matches) {
                  if (arrayCompare(currentResult, element)) {
                    result = false;
                  }
                }
              }

              if (result) {
                matches.push(currentResult)
              }
            }
          }
          j = 0;
        }
        i = 0;

        if (matches.length > 0) {
          return matches.join(', ')
        }

        break
      case 2:
        // Nenhum upgrade
        for(i; i < length; i++) {
          if (value === artifactStat[i]) {
            matches.push(artifactStat[i])
          }
        }
        i = 0;
        
        if (matches.length > 0) {
          return 'No upgrades - Base value: ' + matches
        }

        // Um upgrade
        for(i; i < length; i++) {
          for(j; j < length; j++) {
            // console.log("subtração: " + (value - artifactStat[j]) + " igual a " + artifactStat[i]);
            if (value - artifactStat[j] === artifactStat[i]) {
              currentResult = [artifactStat[i], artifactStat[j]]

              if (matches.length > 0) {
                result = true
                for (const element of matches) {
                  if (arrayCompare(currentResult, element)) {
                    result = false;
                  }
                }
              }

              if (result) {
                matches.push(currentResult)
              }
            }
          }
          j = 0;
        }
        i = 0;

        if (matches.length > 0) {
          return matches.join(', ')
        }

        // Dois upgrades
        for(i; i < length; i++) {
          for(j; j < length; j++) {
            for(k; k < length; k++) {
              // console.log("subtração: " + (value - artifactStat[k] - artifactStat[j]) + " igual a " + artifactStat[i]);
              if (value - artifactStat[k] - artifactStat[j] === artifactStat[i]) {
                currentResult = [artifactStat[i], artifactStat[j], artifactStat[k]]
                // console.log(currentResult);
                // console.log(matches);
                if (matches.length > 0) {
                  result = true
                  for (const element of matches) {
                    if (arrayCompare(currentResult, element)) {
                      result = false;
                    }
                  }
                }
                
                if (result) {
                  matches.push([artifactStat[i], artifactStat[j], artifactStat[k]])
                }
              }
            }
            k = 0;
          }
          j = 0;
        }
        i = 0;

        if (matches.length > 0) {
          return matches.join(' + ')
        }
        
        break
      case 3:
        
        break
      case 4:
        
        break
      case 5:
        
        break
      default:
        break
    }

    // Mudar o retorno para a quantidade de vezes que o stat upou
    if (matches.length > 1) {
      return 'Several matches'
    } else if (matches.length > 0) {
      return 'One match'
    } else {
      return 'No matches found'
    }
  }
}

module.exports = ArtifactsSubstats