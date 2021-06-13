function getChests(lvl) {
  if (lvl == 1){
    return [
      new Treasure(300, 356, 2),
      new Treasure(636, 524, 2),
      new Treasure(906, 860, 3),
      new Treasure(294, 734, 3),
      new Treasure(182, 1070, 5),
      new Treasure(591, 1004, 5),
      new Treasure(717, 1313, 7),
      new Treasure(198, 1345, 7),
      new Treasure(510, 2068, 9),
      new Treasure(705, 2438, 10),
    ];
  }
  else if (lvl == 2) {
    return [
      new Treasure(300, 356, 2),
    ];
  }
  else if (lvl == 3) {
    return [
      new Treasure(636, 524, 2),
    ];
  }
}

function getFishes(lvl) {
  if (lvl == 1){
    return [
      new Fish(-10, 300, 2, "sub"),
      new Fish(SIZE+10, 500, 3, "dive"),
      new Fish(-10, 550, 5, "sub"),
      new Fish(-10, 1100, 6, "dive"),
      new Fish(SIZE+10, 1300, 2, "sub"),
    ];
  }
  else if (lvl == 2) {
    return [
      new Fish(300, 356, 2),
    ];
  }
  else if (lvl == 3) {
    return [
      new Fish(636, 524, 2),
    ];
  }
}
