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
    return [new Treasure(636, 524, 2)];
  }
}
