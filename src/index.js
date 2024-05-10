let sizes = document.getElementsByClassName("sizes");
let currentSelectedSize = 0;
createRadioButtonSet(currentSelectedSize, sizes, "size-selected");

let imageInput = document.getElementById("image-input");
let image = "";

imageInput.addEventListener("change", async (e) => {
  let file = e.target.files[0];
  console.log(file);
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    image = reader.result;
  };
  reader.onerror = (err) => console.log(err);
});

let pathRank = [0, 0, 0, 0, 0, 0];
let pathRankNames = ["", "", "", "", "", ""];
for (let i of [0, 1, 2, 3, 4, 5]) {
  let path = document.getElementsByClassName("path" + (i + 1).toString());
  createRadioButtonSetWithArray(pathRank, i, path, "path-selected");
  document
    .getElementById("path" + (i + 1).toString())
    .addEventListener("change", (e) => {
      pathRankNames[i] = e.target.value;
    });
}

let traits = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
let traitsNames = ["", "", "", "", "", "", "", "", "", ""];
for (let i of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
  let trait = [
    document.getElementById("trait" + (i + 1).toString() + "-attractivness"),
    document.getElementById("trait" + (i + 1).toString() + "-creepiness"),
    document.getElementById("trait" + (i + 1).toString() + "-hunger"),
  ];
  createInputSet(traits, trait, i);
  document
    .getElementById("trait" + (i + 1).toString())
    .addEventListener("change", (e) => {
      traitsNames[i] = e.target.value;
    });
}

let maximumMarks = 0;
document.getElementById("marks").addEventListener("change", (e) => {
  maximumMarks = Number(e.target.value);
});

let amuletsNames = ["", "", "", "", "", ""];
let amuletsMarks = [0, 0, 0, 0, 0, 0];
for (let i of [0, 1, 2, 3, 4, 5]) {
  document
    .getElementById("amulet" + (i + 1).toString())
    .addEventListener("change", (e) => {
      amuletsNames[i] = e.target.value;
    });
  document
    .getElementById("amulet" + (i + 1).toString() + "-marks")
    .addEventListener("change", (e) => {
      amuletsMarks[i] = Number(e.target.value);
    });
}

let equipmentName = ["", "", "", "", "", "", "", "", "", ""];
let equipmentMarks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
for (let i of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
  document
    .getElementById("equipment" + (i + 1).toString())
    .addEventListener("change", (e) => {
      equipmentName[i] = e.target.value;
    });
  document
    .getElementById("equipment" + (i + 1).toString() + "-weight")
    .addEventListener("change", (e) => {
      equipmentMarks[i] = Number(e.target.value);
    });
}

let techniqueNames = ["", "", "", "", "", "", "", "", ""];
let techniqueSlots = [0, 0, 0, 0, 0, 0, 0, 0, 0];
for (let i of [0, 1, 2, 3, 4, 5, 6, 7, 8]) {
  document
    .getElementById("technique" + (i + 1).toString())
    .addEventListener("change", (e) => {
      techniqueNames[i] = e.target.value;
    });
  document
    .getElementById("equipment" + (i + 1).toString() + "-weight")
    .addEventListener("change", (e) => {
      techniqueSlots[i] = Number(e.target.value);
    });
}

let weaponName = ["", "", "", "", ""];
let weaponStats = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];
for (let i of [0, 1, 2, 3, 4]) {
  document
    .getElementById("weapon" + (i + 1).toString() + "-name")
    .addEventListener("change", (e) => {
      weaponName[i] = e.target.value;
    });
  document
    .getElementById("weapon" + (i + 1).toString() + "-weight")
    .addEventListener("change", (e) => {
      weaponStats[i][0] = Number(e.target.value);
    });
  document
    .getElementById("weapon" + (i + 1).toString() + "-damage")
    .addEventListener("change", (e) => {
      weaponStats[i][1] = Number(e.target.value);
    });
  document
    .getElementById("weapon" + (i + 1).toString() + "-range")
    .addEventListener("change", (e) => {
      weaponStats[i][2] = Number(e.target.value);
    });
  document
    .getElementById("weapon" + (i + 1).toString() + "-quality")
    .addEventListener("change", (e) => {
      weaponStats[i][3] = Number(e.target.value);
    });
}

let armorName = "";
let armorStats = [0, 0, [0, 0]];

document.getElementById("armour").addEventListener("change", (e) => {
  armorName = e.target.value;
});
document.getElementById("armour-quality").addEventListener("change", (e) => {
  armorStats[0] = Number(e.target.value);
});
document.getElementById("armour-resistance").addEventListener("change", (e) => {
  armorStats[1] = Number(e.target.value);
});
document
  .getElementById("armour-durabily-max")
  .addEventListener("change", (e) => {
    armorStats[2][0] = Number(e.target.value);
  });
document
  .getElementById("armour-durabily-temp")
  .addEventListener("change", (e) => {
    armorStats[2][1] = Number(e.target.value);
  });

let ranks = [0, 0, 0];
for (let i of [0, 1, 2]) {
  document
    .getElementById("rank" + (i + 1).toString())
    .addEventListener("change", (e) => {
      ranks[i] = Number(e.target.value);
    });
}

let skills = ["", "", "", "", "", "", "", "", "", "", "", ""];
let skillsMasteries = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
for (let i of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]) {
  document
    .getElementById("skill" + (i + 1).toString())
    .addEventListener("change", (e) => {
      ranks[i] = e.target.value;
    });
  document
    .getElementById("skill" + (i + 1).toString() + "-mastery")
    .addEventListener("change", (e) => {
      ranks[i] = Number(e.target.value);
    });
}

document.getElementById("save").addEventListener("click", save);

async function save() {
  let nameValue = document.getElementById("name-input").value;

  let milestones = {
    big: document.getElementById("milestone-input").value,
    small: document.getElementById("small-advancement-input").value,
  };

  let gamer = document.getElementById("player-input").value;

  let mainStats = {
    power: {
      static: document.getElementById("power").value,
      temp: document.getElementById("power-temp").value,
    },
    insight: {
      static: document.getElementById("insight").value,
      temp: document.getElementById("insight-temp").value,
    },
    shell: {
      static: document.getElementById("shell").value,
      temp: document.getElementById("shell-temp").value,
    },
    grace: {
      static: document.getElementById("grace").value,
      temp: document.getElementById("grace-temp").value,
    },
  };

  let bars = {
    heart: {
      current: document.getElementById("heart-current").value,
      max: document.getElementById("heart-max").value,
      temp: document.getElementById("heart-temp").value,
    },
    soul: {
      current: document.getElementById("soul-current").value,
      max: document.getElementById("soul-max").value,
      temp: document.getElementById("soul-temp").value,
    },
    stamina: {
      current: document.getElementById("stamina-current").value,
      max: document.getElementById("stamine-max").value,
      temp: document.getElementById("stamina-temp").value,
    },
    custom1: {
      name: document.getElementById("custom1-name").value,
      current: document.getElementById("custom1-current").value,
      max: document.getElementById("custom1-max").value,
      temp: document.getElementById("custom1-temp").value,
    },
    custom2: {
      name: document.getElementById("custom2-name").value,
      current: document.getElementById("custom2-current").value,
      max: document.getElementById("custom2-max").value,
      temp: document.getElementById("custom2-temp").value,
    },
    custom3: {
      name: document.getElementById("custom3-name").value,
      current: document.getElementById("custom3-current").value,
      max: document.getElementById("custom3-max").value,
      temp: document.getElementById("custom3-temp").value,
    },
  };

  let secondaryStats = {
    attractivness: document.getElementById("attractiveness").value,
    creepiness: document.getElementById("creepiness").value,
    speed: {
      current: document.getElementById("speed-current").value,
      max: document.getElementById("speed-max").value,
    },
    maneuver: document.getElementById("maneuver").value,
    satiety: {
      current: document.getElementById("satiety-current").value,
      max: document.getElementById("satiety-max").value,
    },
  };

  let description = document.getElementById("description").value;

  let techniqueSlot = document.getElementById("techniques-slots").value;

  let beltSlot = document.getElementById("belt").value;

  let currency = document.getElementById("currency").value;

  let overallWeight = document.getElementById("overall-weight").value;
  let load = document.getElementById("load").value;

  let notes = document.getElementById("notes").value;

  let saveData = {
    nameValue,
    milestones,
    currentSelectedSize,
    gamer,
    image,
    mainStats,
    bars,
    secondaryStats,
    description,
    pathRank,
    pathRankNames,
    traits,
    traitsNames,
    maximumMarks,
    amuletsMarks,
    amuletsNames,
    equipmentName,
    equipmentMarks,
    techniqueSlot,
    techniqueNames,
    techniqueSlots,
    beltSlot,
    weaponName,
    weaponStats,
    currency,
    overallWeight,
    load,
    ranks,
    skills,
    skillsMasteries,
    notes,
  };

  let json = JSON.stringify(saveData);
  console.log(json);

  navigator.clipboard.writeText(json);
}

document.getElementById("user-input-button").addEventListener("click", load);

function load() {
  let input = JSON.parse(document.getElementById("user-input").value);
  console.log(input);

  document.getElementById("name-input").value = input.nameValue;

  document.getElementById("milestone-input").value = input.milestones.big;
  document.getElementById("milestone-input").value = input.milestones.small;

  document.getElementById("player-input").value = input.gamer;

  document.getElementById("power").value = input.mainStats.power.static;
  document.getElementById("power-temp").value = input.mainStats.power.temp;

  document.getElementById("insight").value = input.mainStats.insight.static;
  document.getElementById("insight-temp").value = input.mainStats.insight.temp;

  document.getElementById("shell").value = input.mainStats.shell.static;
  document.getElementById("shell-temp").value = input.mainStats.shell.temp;

  document.getElementById("shell").value = input.mainStats.shell.static;
  document.getElementById("shell-temp").value = input.mainStats.shell.temp;

  document.getElementById("heart-current").value = input.bars.heart.current;
  document.getElementById("heart-max").value = input.bars.heart.max;
  document.getElementById("heart-temp").value = input.bars.heart.temp;

  document.getElementById("soul-current").value = input.bars.soul.current;
  document.getElementById("soul-max").value = input.bars.soul.max;
  document.getElementById("soul-temp").value = input.bars.soul.temp;

  document.getElementById("stamina-current").value = input.bars.stamina.current;
  document.getElementById("stamina-max").value = input.bars.stamina.max;
  document.getElementById("stamina-temp").value = input.bars.stamina.temp;

  document.getElementById("custom1-name").value = input.bars.custom1.name;
  document.getElementById("custom1-current").value = input.bars.custom1.current;
  document.getElementById("custom1-max").value = input.bars.custom1.max;
  document.getElementById("custom1-temp").value = input.bars.custom1.temp;

  document.getElementById("custom2-name").value = input.bars.custom2.name;
  document.getElementById("custom2-current").value = input.bars.custom2.current;
  document.getElementById("custom2-max").value = input.bars.custom2.max;
  document.getElementById("custom2-temp").value = input.bars.custom2.temp;

  document.getElementById("custom3-name").value = input.bars.custom3.name;
  document.getElementById("custom3-current").value = input.bars.custom3.current;
  document.getElementById("custom3-max").value = input.bars.custom3.max;
  document.getElementById("custom3-temp").value = input.bars.custom3.temp;

  document.getElementById("attractiveness").value =
    input.secondaryStats.attractivness;
  document.getElementById("creepiness").value = input.secondaryStats.creepiness;
  document.getElementById("speed-current").value =
    input.secondaryStats.speed.current;
  document.getElementById("speed-max").value = input.secondaryStats.speed.max;
  document.getElementById("maneuver").value = input.secondaryStats.maneuver;
  document.getElementById("satiety-current").value =
    input.secondaryStats.satiety.current;
  document.getElementById("satiety-max").value =
    input.secondaryStats.satiety.max;

  document.getElementById("description").value = input.description;

  document.getElementById("techniques-slots").value = input.techniqueSlot;

  document.getElementById("belt").value = input.beltSlot;

  document.getElementById("currency").value = input.currency;

  document.getElementById("overall-weight").value = input.overallWeight;
  document.getElementById("load").value = input.load;

  document.getElementById("notes").value = input.notes;

  currentSelectedSize = input.currentSelectedSize;

  image = input.image;

  pathRank = input.pathRank;
  pathRankNames = input.pathRankNames;
  traitsNames = input.traitsNames;
  maximumMarks = input.maximumMarks;
  amuletsNames = input.amuletsNames;
  amuletsMarks = input.amuletsMarks;
  equipmentName = input.equipmentName;
  equipmentMarks = input.equipmentMarks;
  techniqueNames = input.techniqueNames;
  techniqueSlots = input.techniqueSlots;
  weaponName = input.weaponName;
  weaponStats = input.weaponStats;
  armorName = input.armorName;
  armorStats = input.armorStats;
  skills = input.skills;
  skillsMasteries = input.skillsMasteries;
}

function createInputSet(arrValues, arrElements, index) {
  Array.from(arrElements).forEach((element, i) => {
    element.addEventListener("change", (e) => {
      arrValues[index][i] = Number(e.target.value);
      console.log(arrValues);
    });
  });
}

function createRadioButtonSet(selected, elements, selectedClass) {
  Array.from(elements).forEach((element, index) => {
    element.addEventListener("click", (e) => {
      if (e.target.className.includes(selectedClass)) return;

      let classNames = elements[selected].className.split(" ");
      classNames.pop();
      elements[selected].className = classNames.join(" ");

      selected = index;
      e.target.className += " " + selectedClass;
    });
  });
}

function createRadioButtonSetWithArray(arr, i, elements, selectedClass) {
  Array.from(elements).forEach((element, index) => {
    element.addEventListener("click", (e) => {
      if (e.target.className.includes(selectedClass)) return;

      let classNames = elements[arr[i]].className.split(" ");
      classNames.pop();
      elements[arr[i]].className = classNames.join(" ");

      arr[i] = index;
      e.target.className += " " + selectedClass;

      console.log(arr, i);
    });
  });
}
