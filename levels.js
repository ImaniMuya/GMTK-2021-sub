function getChests(lvl) {
  if (lvl == 1) {
    return [
      new Treasure(300, 353, 2),
      new Treasure(644, 532, 2),
      new Treasure(285, 735, 3),
      new Treasure(906, 873, 3),
      new Treasure(182, 1095, 5),
      new Treasure(725, 1335, 7),
      new Treasure(198, 1353, 7),
      new Treasure(510, 2095, 9),
      new Treasure(705, 2455, 10),
    ];
  } else if (lvl == 2) {
    return [
      new Treasure(662, 334, 2),
      new Treasure(260, 334, 6),
      new Treasure(242, 655, 6),
      new Treasure(714, 694, 2),
      new Treasure(373, 1094, 8),
      new Treasure(721, 1152, 3),
      new Treasure(328, 1472, 3),
      new Treasure(206, 1811, 4),
      new Treasure(719, 1892, 5),
      new Treasure(208, 2172, 5),
      new Treasure(526, 2432, 10),
    ];
  } else if (lvl == 3) {
    return [
      new Treasure(151, 194, 12),
      new Treasure(418, 392, 5),
      new Treasure(906, 532, 7),
      new Treasure(777, 632, 5),
      new Treasure(680, 852, 7),
      new Treasure(461, 932, 12),
      new Treasure(343, 1536, 5),
      new Treasure(48, 1815, 8),
      new Treasure(636, 2435, 7),
      new Treasure(112, 2435, 8),
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
