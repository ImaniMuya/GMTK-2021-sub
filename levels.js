function getChests(lvl) {
  if (lvl == 1) {
    return [
      new Treasure(300, 356, 2),
      new Treasure(636, 524, 2),
      new Treasure(906, 860, 3),
      new Treasure(294, 734, 3),
      new Treasure(182, 1070, 5),
      new Treasure(717, 1313, 7),
      new Treasure(198, 1345, 7),
      new Treasure(510, 2068, 9),
      new Treasure(705, 2438, 10),
    ];
  } else if (lvl == 2) {
    return [
      new Treasure(662, 319, 2),
      new Treasure(714, 689, 2),
      new Treasure(721, 1146, 3),
      new Treasure(328, 1462, 3),
      new Treasure(206, 1811, 4),
      new Treasure(719, 1872, 5),
      new Treasure(208, 2176, 5),
      new Treasure(526, 2438, 10),
      new Treasure(373, 1094, 8),
      new Treasure(242, 650, 6),
      new Treasure(248, 330, 6),
    ];
  } else if (lvl == 3) {
    return [
      new Treasure(151, 184, 12),
      new Treasure(418, 370, 5),
      new Treasure(777, 627, 5),
      new Treasure(906, 528, 7),
      new Treasure(680, 840, 7),
      new Treasure(343, 1536, 5),
      new Treasure(636, 2289, 7),
      new Treasure(112, 2438, 8),
      new Treasure(48, 1815, 8),
      new Treasure(461, 926, 12),
    ];
  }
}

function getFishes(lvl) {
  if (lvl == 1) {
    return [
      new Fish(-10, 300, 2, "sub"),
      new Fish(SIZE + 10, 500, 3, "dive"),
      new Fish(-10, 550, 5, "sub"),
      new Fish(-10, 1100, 6, "dive"),
      new Fish(SIZE + 10, 1300, 2, "sub"),
    ];
  } else if (lvl == 2) {
    return [new Fish(300, 356, 2)];
  } else if (lvl == 3) {
    return [new Fish(636, 524, 2)];
  }
}
