/*
    INFO COLLECTED FROM:
    Genshin Impact Wiki - Fandom
    https://genshin-impact.fandom.com/wiki/Artifacts#Sub_Stats

    These are the values that artifacts get in their substats at each level.
    Also, calculator() is a function that returns which stats have upgraded
*/

/* eslint-disable comma-spacing, no-multi-spaces */
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
    MaxLevel: 20,
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
    MaxLevel: 16,
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
    MaxLevel: 12,
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
    MaxLevel: 8,
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
    MaxLevel: 4,
  },
  // ArtifactsSubstats.calculator(String stat, Number value, Number level, Number stars)
  calculator(stat, value, level, stars) {
    let rarity, maxUpgradesCount;
    try {
      rarity = verifyRarityAndLevel(stars, level);
      maxUpgradesCount = verifyUpgradeCount(rarity, level);
      verifyStat(stat);
    }
    catch (e) {
      console.log(e);
      return 'Error';
    }

    const artifactStat = ArtifactsSubstats[rarity][stat];
    let matches;
    try {
      matches = verifyUpgradeMatches(value, maxUpgradesCount, artifactStat);
    }
    catch (e) {
      console.log(e);
      return 'Error';
    }

    if (matches !== undefined) {
      return matches;
    }
    else {
      return 'No matches found';
    }
  },
};

function throwLevelError(stars, level) {
  throw new Error(`Incorrect level value. Rarity: ${stars}, Level: ${level}`);
}

function throwRarityError(stars, level) {
  throw new Error(`Incorrect rarity value. Rarity: ${stars}, Level: ${level}`);
}

function verifyRarityAndLevel(stars, level) {
  switch (stars) {
  case 5:
    if (level < 0 || level > 20) {
      return throwLevelError(stars, level);
    }
    return 'fiveStar';
  case 4:
    if (level < 0 || level > 16) {
      return throwLevelError(stars, level);
    }
    return 'fourStar';
  case 3:
    if (level < 0 || level > 12) {
      return throwLevelError(stars, level);
    }
    return 'threeStar';
  case 2:
    if (level < 0 || level > 8) {
      return throwLevelError(stars, level);
    }
    return 'twoStar';
  case 1:
    if (level < 0 || level > 4) {
      return throwLevelError(stars, level);
    }
    return 'oneStar';
  default:
    return throwRarityError(stars, level);
  }
}

function verifyUpgradeCount(rarity, level) {
  switch (rarity) {
  case 'fiveStar':
    if (level === 20) {
      return 5;
    }
    else if (level >= 16) {
      return 4;
    }
    else if (level >= 12) {
      return 3;
    }
    else if (level >= 8) {
      return 2;
    }
    else if (level >= 4) {
      return 1;
    }
    else {
      return 0;
    }
  case 'fourStar':
    if (level === 16) {
      return 3;
    }
    else if (level >= 12) {
      return 2;
    }
    else if (level >= 8) {
      return 1;
    }
    else {
      return 0;
    }
  case 'threeStar':
    if (level === 12) {
      return 1;
    }
    else {
      return 0;
    }
  case 'twoStar':
  case 'oneStar':
    return 0;
  default:
    return throwRarityError(rarity, level);
  }
}

function verifyStat(stat) {
  switch (stat) {
  case 'HPFlat':
  case 'ATKFlat':
  case 'HPPerc':
  case 'ATKPerc':
  case 'DEFPerc':
  case 'EM':
  case 'ER':
  case 'CritRate':
  case 'CritDmg':
    return;
  default:
    throw new Error(`Incorrect stat name. Stat: ${stat}`);
  }
}

function getObjectSize(obj) {
  let size = 0, key;

  for (key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) size++;
  }

  return size;
}

function arrayCompare(_arr1, _arr2) {
  if (
    !Array.isArray(_arr1)
    || !Array.isArray(_arr2)
    || _arr1.length !== _arr2.length
  ) {
    return false;
  }

  const arr1 = _arr1.concat().sort();
  const arr2 = _arr2.concat().sort();

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

function verifyUpgradeMatches(value, maxUpgradesCount, artifactStat) {
  const length = getObjectSize(artifactStat);
  const matches = [];

  function checkIfNoUpgrades() {
    for (let i = 0; i < length; i++) {
      if (value == artifactStat[i]) {
        matches.push(artifactStat[i]);
      }
    }
  }

  function checkIfOneUpgrade() {
    let currentResult;
    let result = true;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        if ((value - artifactStat[j]).toFixed(1) == artifactStat[i]) {
          currentResult = [artifactStat[i], artifactStat[j]];

          if (matches.length > 0) {
            result = true;
            for (const element of matches) {
              if (arrayCompare(currentResult, element)) {
                result = false;
                break;
              }
            }
          }

          if (result) {
            matches.push(currentResult);
          }
        }
      }
    }
  }

  function checkIfTwoUpgrades() {
    let currentResult;
    let result = true;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        for (let k = 0; k < length; k++) {
          if ((value - artifactStat[k] - artifactStat[j]).toFixed(1) == artifactStat[i]) {
            currentResult = [artifactStat[i], artifactStat[j], artifactStat[k]];

            if (matches.length > 0) {
              result = true;
              for (const element of matches) {
                if (arrayCompare(currentResult, element)) {
                  result = false;
                }
              }
            }

            if (result) {
              matches.push(currentResult);
            }
          }
        }
      }
    }
  }

  function checkIfThreeUpgrades() {
    let currentResult;
    let result = true;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        for (let k = 0; k < length; k++) {
          for (let m = 0; m < length; m++) {
            if ((value - artifactStat[m] - artifactStat[k] - artifactStat[j]).toFixed(1) == artifactStat[i]) {
              currentResult = [
                artifactStat[i],
                artifactStat[j],
                artifactStat[k],
                artifactStat[m],
              ];

              if (matches.length > 0) {
                result = true;
                for (const element of matches) {
                  if (arrayCompare(currentResult, element)) {
                    result = false;
                  }
                }
              }

              if (result) {
                matches.push(currentResult);
              }
            }
          }
        }
      }
    }
  }

  function checkIfFourUpgrades() {
    let currentResult;
    let result = true;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        for (let k = 0; k < length; k++) {
          for (let m = 0; m < length; m++) {
            for (let n = 0; n < length; n++) {
              if ((value - artifactStat[n] - artifactStat[m] - artifactStat[k] - artifactStat[j]).toFixed(1) == artifactStat[i]) {
                currentResult = [
                  artifactStat[i],
                  artifactStat[j],
                  artifactStat[k],
                  artifactStat[m],
                  artifactStat[n],
                ];

                if (matches.length > 0) {
                  result = true;
                  for (const element of matches) {
                    if (arrayCompare(currentResult, element)) {
                      result = false;
                    }
                  }
                }

                if (result) {
                  matches.push(currentResult);
                }
              }
            }
          }
        }
      }
    }
  }

  function checkIfFiveUpgrades() {
    let currentResult;
    let result = true;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        for (let k = 0; k < length; k++) {
          for (let m = 0; m < length; m++) {
            for (let n = 0; n < length; n++) {
              for (let o = 0; o < length; o++) {
                if ((value - artifactStat[o] - artifactStat[n] - artifactStat[m] - artifactStat[k] - artifactStat[j]).toFixed(1) == artifactStat[i]) {
                  currentResult = [
                    artifactStat[i],
                    artifactStat[j],
                    artifactStat[k],
                    artifactStat[m],
                    artifactStat[n],
                    artifactStat[o],
                  ];

                  if (matches.length > 0) {
                    result = true;
                    for (const element of matches) {
                      if (arrayCompare(currentResult, element)) {
                        result = false;
                      }
                    }
                  }

                  if (result) {
                    matches.push(currentResult);
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  switch (maxUpgradesCount) {
  case 0:
    checkIfNoUpgrades();

    if (matches.length > 0) {
      return matches.join(' + ');
    }

    break;
  case 1:
    checkIfNoUpgrades();

    if (matches.length > 0) {
      return matches.join(' + ');
    }

    checkIfOneUpgrade();

    if (matches.length > 0) {
      return matches.join(' + ');
    }

    break;
  case 2:
    checkIfNoUpgrades();

    if (matches.length > 0) {
      return matches.join(' + ');
    }

    checkIfOneUpgrade();

    if (matches.length > 0) {
      return matches.join(' + ');
    }

    checkIfTwoUpgrades();

    if (matches.length > 0) {
      return matches.join(' + ');
    }

    break;
  case 3:
    checkIfNoUpgrades();

    if (matches.length > 0) {
      return matches.join(' + ');
    }

    checkIfOneUpgrade();

    if (matches.length > 0) {
      return matches.join(' + ');
    }

    checkIfTwoUpgrades();

    if (matches.length > 0) {
      return matches.join(' + ');
    }

    checkIfThreeUpgrades();

    if (matches.length > 0) {
      return matches.join(' + ');
    }

    break;
  case 4:
    checkIfNoUpgrades();

    if (matches.length > 0) {
      return matches.join(' + ');
    }

    checkIfOneUpgrade();

    if (matches.length > 0) {
      return matches.join(' + ');
    }

    checkIfTwoUpgrades();

    if (matches.length > 0) {
      return matches.join(' + ');
    }

    checkIfThreeUpgrades();

    if (matches.length > 0) {
      return matches.join(' + ');
    }

    checkIfFourUpgrades();

    if (matches.length > 0) {
      return matches.join(' + ');
    }

    break;
  case 5:
    checkIfNoUpgrades();

    if (matches.length > 0) {
      return matches.join(' + ');
    }

    checkIfOneUpgrade();

    if (matches.length > 0) {
      return matches.join(' + ');
    }

    checkIfTwoUpgrades();

    if (matches.length > 0) {
      return matches.join(' + ');
    }

    checkIfThreeUpgrades();

    if (matches.length > 0) {
      return matches.join(' + ');
    }

    checkIfFourUpgrades();

    if (matches.length > 0) {
      return matches.join(' + ');
    }

    checkIfFiveUpgrades();

    if (matches.length > 0) {
      return matches.join(' + ');
    }

    break;
  default:
    throw new Error(`Incorrect max upgrades count: ${maxUpgradesCount}`);
  }
}

module.exports = ArtifactsSubstats;