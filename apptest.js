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

      const getRandomNumber = (max) => Math.floor(Math.random() * max);

      const getRandomName = (namesArray) =>
        `${namesArray[getRandomNumber(namesArray.length)]} ${
          secondNames[getRandomNumber(secondNames.length)]
        }`;

      const setRandomName = (name) => {
        document.getElementById("random-name").innerText = name;
      };

      document.getElementById("generateBoy").addEventListener("click", () => {
        const randomBoyName = getRandomName(boyNames);
        setRandomName(randomBoyName);
      });

      document.getElementById("generateGirl").addEventListener("click", () => {
        const randomGirlName = getRandomName(girlNames);
        setRandomName(randomGirlName);
      });

      document.getElementById("generatePet").addEventListener("click", () => {
        const randomPetName = getRandomName(petNames);
        setRandomName(randomPetName);
      });

      const svgContainer = document.getElementById("svg");
      const animItem = bodymovin.loadAnimation({
        wrapper: svgContainer,
        animType: "svg",
        loop: false,
        autoplay: false,
        path: "https://assets2.lottiefiles.com/packages/lf20_u4yrau.json",
      });
