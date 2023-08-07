import { boyNames, girlNames, petNames, secondNames } from "/data.js";

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
  // Check if the name already exists in the corresponding array
  const nameExists =
    type === "Girl"
      ? girlNames.includes(name)
      : type === "Boy"
      ? boyNames.includes(name)
      : type === "Pet"
      ? petNames.includes(name)
      : false;

  // If the name doesn't exist, add it to the array and local storage
  if (!nameExists) {
    const listItem = document.createElement("div");
    listItem.textContent = name;
    nameList.appendChild(listItem);

    // Add the new name to the corresponding array
    switch (type) {
      case "Girl":
        girlNames.push(name);
        localStorage.setItem("Girl", JSON.stringify(girlNames));
        break;
      case "Boy":
        boyNames.push(name);
        localStorage.setItem("Boy", JSON.stringify(boyNames));
        break;
      case "Pet":
        petNames.push(name);
        localStorage.setItem("Pet", JSON.stringify(petNames));
        break;
      default:
        break;
    }
  }
}

// Populate the name list when the app loads
function populateNameList() {
  const nameList = document.getElementById("nameList");

  // Clear the nameList before repopulating it
  nameList.innerHTML = "";

  // Function to add a name to the nameList
  function addNameToNameList(name) {
    const listItem = document.createElement("div");
    listItem.textContent = name;
    nameList.appendChild(listItem);
  }

  if (localStorage.getItem("Girl")) {
    const girlNamesFromStorage = JSON.parse(localStorage.getItem("Girl"));
    girlNamesFromStorage.forEach((name) => {
      // Only add names to the nameList that were added by the user
      if (!girlNames.includes(name)) {
        addNameToNameList(name);
      }
    });
  }

  if (localStorage.getItem("Boy")) {
    const boyNamesFromStorage = JSON.parse(localStorage.getItem("Boy"));
    boyNamesFromStorage.forEach((name) => {
      // Only add names to the nameList that were added by the user
      if (!boyNames.includes(name)) {
        addNameToNameList(name);
      }
    });
  }

  if (localStorage.getItem("Pet")) {
    const petNamesFromStorage = JSON.parse(localStorage.getItem("Pet"));
    petNamesFromStorage.forEach((name) => {
      // Only add names to the nameList that were added by the user
      if (!petNames.includes(name)) {
        addNameToNameList(name);
      }
    });
  }
}

// Populate the name list when the app loads
populateNameList();
