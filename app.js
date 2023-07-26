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
  // Add more boy names here
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
  // Add more girl names here
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
  // Add more pet names here
];

const secondNames = [
  "Maples",
  "Winchester",
  "Holiday",
  "Pearson",
  "Evans",
  "Storey",
  "Garton",
  // Add more second names here
];

// Function to get a random number between 0 and max (exclusive)
const getRandomNumber = (max) => Math.floor(Math.random() * max);

// Function to get a random name from the names array
const getRandomName = (namesArray, isPet = false) => {
  const randomFirstName = namesArray[getRandomNumber(namesArray.length)];
  if (isPet) {
    return randomFirstName;
  } else {
    const randomLastName = secondNames[getRandomNumber(secondNames.length)];
    return `${randomFirstName} ${randomLastName}`;
  }
};

// Function to set the random name on the page
const setRandomName = (name) => {
  document.getElementById("random-name").innerText = name;
};

// Event listeners for generating names
document.getElementById("generateBoy").addEventListener("click", () => {
  const randomBoyName = getRandomName(boyNames);
  setRandomName(randomBoyName);
});

document.getElementById("generateGirl").addEventListener("click", () => {
  const randomGirlName = getRandomName(girlNames);
  setRandomName(randomGirlName);
});

document.getElementById("generatePet").addEventListener("click", () => {
  const randomPetName = getRandomName(petNames, true);
  setRandomName(randomPetName);
});

// Function to handle form submission and add a name to the list and corresponding array
const handleFormSubmission = (event) => {
  event.preventDefault();
  const newName = document.getElementById("nameInput").value.trim();
  const nameType = document.getElementById("nameType").value;

  if (newName !== "") {
    addNameToList(newName, nameType);
    document.getElementById("nameInput").value = "";
  }
};

// Event listener for form submission
document
  .getElementById("nameForm")
  .addEventListener("submit", handleFormSubmission);

// Function to add a name to the list and corresponding array
function addNameToList(name, type) {
  const listItem = document.createElement("div");
  listItem.textContent = name;

  // Add the new name to the corresponding array
  switch (type) {
    case "Girl":
      girlNames.push(name);
      break;
    case "Boy":
      boyNames.push(name);
      break;
    case "Pet":
      petNames.push(name);
      break;
    default:
      break;
  }

  // Save the updated names array to local storage
  saveNamesToLocalStorage();

  // Append the new name to the nameList only if it was added by the user
  nameList.appendChild(listItem);
}

// Function to save the names arrays to local storage
function saveNamesToLocalStorage() {
  localStorage.setItem("Girl", JSON.stringify(girlNames));
  localStorage.setItem("Boy", JSON.stringify(boyNames));
  localStorage.setItem("Pet", JSON.stringify(petNames));
}

// Populate the name list when the app loads
function populateNameList() {
  // Clear the nameList before repopulating it
  nameList.innerHTML = "";

  if (localStorage.getItem("Girl")) {
    const girlNames = JSON.parse(localStorage.getItem("Girl"));
    girlNames.forEach((name) => {
      // Only add names to the nameList that were added by the user
      if (!girlNames.includes(name)) {
        addNameToList(name, "Girl");
      }
    });
  }

  if (localStorage.getItem("Boy")) {
    const boyNames = JSON.parse(localStorage.getItem("Boy"));
    boyNames.forEach((name) => {
      // Only add names to the nameList that were added by the user
      if (!boyNames.includes(name)) {
        addNameToList(name, "Boy");
      }
    });
  }

  if (localStorage.getItem("Pet")) {
    const petNames = JSON.parse(localStorage.getItem("Pet"));
    petNames.forEach((name) => {
      // Only add names to the nameList that were added by the user
      if (!petNames.includes(name)) {
        addNameToList(name, "Pet");
      }
    });
  }
}

// Populate the name list when the app loads
populateNameList();
