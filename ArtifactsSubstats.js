/*
    INFO COLLECTED FROM:
    Genshin Impact Wiki - Fandom
    https://genshin-impact.fandom.com/wiki/Artifacts#Sub_Stats

    These are the values that artifacts get in their substats at each level. 
*/

const ArtifactsSubstats = {
  fiveStar: {
    HPFlat:   [209, 239, 269, 299],
    ATKFlat:  [14, 16, 18, 19],
    DEFFlat:  [16, 19, 21, 23],
    HPPerc:   [4.1, 4.7, 5.3, 5.8],
    ATKPerc:  [4.1, 4.7, 5.3, 5.8],
    DEFPerc:  [5.1, 5.8, 6.6, 7.3],
    EM:       [16, 19, 21, 23],
    ER:       [4.5, 5.2, 5.8, 6.5],
    CritRate: [2.7, 3.1, 3.5, 3.9],
    CritDmg:  [5.4, 6.2, 7.0, 7.8],
    MaxLevel: 20
  },
  fourStar: {
    HPFlat:   [167, 191, 215, 239],
    ATKFlat:  [11, 12, 14, 16],
    DEFFlat:  [13, 15, 17, 19],
    HPPerc:   [3.3, 3.7, 4.2, 4.7],
    ATKPerc:  [3.3, 3.7, 4.2, 4.7],
    DEFPerc:  [4.1, 4.7, 5.3, 5.8],
    EM:       [13, 15, 17, 19],
    ER:       [3.6, 4.1, 4.7, 5.2],
    CritRate: [2.2, 2.5, 2.8, 3.1],
    CritDmg:  [4.4, 5.0, 5.6, 6.2],
    MaxLevel: 20
  },
  threeStar: {
    HPFlat:   [100, 115, 129, 143],
    ATKFlat:  [7, 8, 9],
    DEFFlat:  [8, 9, 10, 11],
    HPPerc:   [2.5, 2.8, 3.2, 3.5],
    ATKPerc:  [2.5, 2.8, 3.2, 3.5],
    DEFPerc:  [3.1, 3.5, 3.9, 4.4],
    EM:       [10, 11, 13, 14],
    ER:       [2.7, 3.1, 3.5, 3.9],
    CritRate: [1.6, 1.9, 2.1, 2.3],
    CritDmg:  [3.3, 3.7, 4.2, 4.7],
    MaxLevel: 16
  },
  twoStar: {
    HPFlat:   [50, 61, 72],
    ATKFlat:  [3, 4, 5],
    DEFFlat:  [4, 5, 6],
    HPPerc:   [1.6, 2.0, 2.3],
    ATKPerc:  [1.6, 2.0, 2.3],
    DEFPerc:  [2.0, 2.5, 2.9],
    EM:       [7, 8, 9],
    ER:       [1.8, 2.2, 2.6],
    CritRate: [1.1, 1.3, 1.6],
    CritDmg:  [2.2, 2.6, 3.1],
    MaxLevel: 12
  },
  oneStar: {
    HPFlat:   [24, 30],
    ATKFlat:  [2],
    DEFFlat:  [2],
    HPPerc:   [1.2, 1.5],
    ATKPerc:  [1.2, 1.5],
    DEFPerc:  [1.5, 1.8],
    EM:       [5, 6],
    ER:       [1.3, 1.6],
    CritRate: [0.8, 1.0],
    CritDmg:  [1.6, 1.9],
    MaxLevel: 8
  }
}

module.exports = ArtifactsSubstats