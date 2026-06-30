const nevadaCities = [
  "Amargosa Valley", "Boulder City", "Bunkerville", "Carson City", "Crystal Bay",
  "Dayton", "Dyer", "Elko", "Ely", "Fallon",
  "Fernley", "Gardnerville", "Genoa", "Goldfield", "Henderson",
  "Incline Village", "Jean", "Lamoille", "Las Vegas", "Laughlin",
  "Logandale", "Manhattan", "Mercury", "Mesquite", "Minden",
  "Moapa", "North Las Vegas", "Overton", "Pahrump", "Panaca",
  "Pioche", "Reno", "Round Mountain", "Ruby Valley", "Smith",
  "Sparks", "Spring Creek", "Stateline", "Sun Valley", "Valmy",
  "Verdi", "Virginia City", "Washoe Valley", "Wellington", "Winnemucca",
  "Yerington", "Zephyr Cove",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < nevadaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(nevadaCities[i]);
}

module.exports = { batches };
