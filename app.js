const boyNames = [
  "Hendrix",
  "Miles",
  "Eli",
  "Jonah",
  "Elijah",
  "Oakley",
  "Rosia",
  "Jasper",
  "Axel",
  "Ellis",
  "Soren",
  "Arlo",
  "Forest",
  "Revali",
  "Calico",
];

const girlNames = [
  "Lacee",
  "Olive",
  "Xiomara",
  "Juniper",
  "Summer",
  "Luna",
  "Demi",
  "Ruby",
  "Lily",
  "Lilith",
  "Riley",
  "Autumn",
  "Tatum",
  "Eris",
  "London",
  "Rylee",
  "Brooklyn",
  "Mynth",
  "Elle",
  "Lux",
  "Sundae",
  "Mipha",
  "Glory",
  "Kathy",
  "Saylor",
  "Solara",
  "Levy",
  "Sethra",
  "Navy",
  "Nova",
  "Ember",
  "Quinn",
  "Rayne",
  "Atlas",
  "Millie",
];

const secondNames = [
  "Maples",
  "Winchester",
  "Holiday",
  "Pearson",
  "Evans",
  "Storey",
  "Garton",
];

const petNames = [
  "Kenai",
  "Marshmello",
  "Salem",
  "Eris",
  "Mango",
  "Gumbo",
  "Wisp",
  "Rayne",
  "Mojito",
  "Pot Roast",
  "Toast",
  "Panko",
  "Jellie",
  "Navy",
  "Cobweb",
  "Toadflax",
];

// Random Boy Name

const getRandomNumber = (max) => Math.floor(Math.random() * max);

const getRandomBoyName = () =>
  `${boyNames[getRandomNumber(boyNames.length)]} ${
    secondNames[getRandomNumber(secondNames.length)]
  }`;

const setRandomBoyName = () => {
  document.getElementById("random-name").innerText = getRandomBoyName();
};

document
  .getElementById("generateBoy")
  .addEventListener("click", setRandomBoyName);

setRandomBoyName();

// Random Girl Name

const getRandomGirlName = () =>
  `${girlNames[getRandomNumber(girlNames.length)]} ${
    secondNames[getRandomNumber(secondNames.length)]
  }`;

const setRandomGirlName = () => {
  document.getElementById("random-name").innerText = getRandomGirlName();
};

document
  .getElementById("generateGirl")
  .addEventListener("click", setRandomGirlName);

setRandomGirlName();

// Random Pet Name

const getRandomPetName = () => `${petNames[getRandomNumber(petNames.length)]}`;

const setRandomPetName = () => {
  document.getElementById("random-name").innerText = getRandomPetName();
};

document
  .getElementById("generatePet")
  .addEventListener("click", setRandomPetName);

setRandomGirlName();

const svgContainer = document.getElementById("svg");
const animItem = bodymovin.loadAnimation({
  wrapper: svgContainer,
  animType: "svg",
  loop: false,
  autoplay: falaaase,
  path: "https://assets2.lottiefiles.com/packages/lf20_u4yrau.json",
});
