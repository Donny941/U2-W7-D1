// Exercise - 1

class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.name = _firstName;
    this.surname = _lastName;
    this.age = _age;
    this.location = _location;
  }
  static ageDiff(firstPerson, secondPerson) {
    if (firstPerson.age > secondPerson.age) {
      console.log(`${firstPerson.name} é piú vecchio di ${secondPerson.name}`);
    } else if (secondPerson.age > firstPerson.age) {
      console.log(`${secondPerson.name} é piú vecchio di ${firstPerson.name}`);
    }
  }
}

const alan = new User("Alan", "Donati", 30, "Sondrio");

const giampi = new User(
  "Giampierggioggero",
  "Schivasassi",
  67,
  "Settimo Milanese"
);

console.log(alan);
console.log(giampi);

User.ageDiff(alan, giampi);

console.log("$=======================================$");

// Exercise - 2
const allPets = [];
const form = document.querySelector("form");
const submitButton = form.querySelector("button");
// console.log(form);
// console.log(submitButton);

submitButton.addEventListener("click", function (e) {
  e.preventDefault();

  let petUserInsert = [];

  const petName = document.getElementById("petName").value;
  const owner = document.getElementById("owner").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  petUserInsert.push(petName, owner, species, breed);
  //   console.log(petUserInsert);

  let newPet = new Pet(
    petUserInsert[0],
    petUserInsert[1],
    petUserInsert[2],
    petUserInsert[3]
  );
  // allPets.forEach((existingPet) => {
  //   Pet.sameOwner(newPet, existingPet);
  // });

  allPets.push(newPet);
  console.log(allPets);
  if (allPets.length >= 2) {
    Pet.sameOwner(allPets[0], allPets[1]);
  }

  const exerciseDiv = document.querySelector(".exercise-2");
  const exerciseRow = exerciseDiv.querySelector(".row");
  const col = document.createElement("div");
  const tab = document.createElement("div");

  col.classList.add("col");
  tab.classList.add(
    "bg-dark",
    "text-light",
    "mt-5",
    "p-4",
    "border",
    "rounded",
    "shadow-lg"
  );

  exerciseRow.appendChild(col);
  col.appendChild(tab);

  Object.entries(newPet).forEach(([key, value]) => {
    const keyText = document.createElement("h3");
    const inputText = document.createElement("span");

    keyText.innerText = `${key}: `;
    inputText.innerText = value;

    keyText.appendChild(inputText);
    tab.appendChild(keyText);
  });
});

class Pet {
  constructor(_name, _owner, _species, _breed) {
    this.PetName = _name;
    this.Owner = _owner;
    this.Species = _species;
    this.Breed = _breed;
  }
  static sameOwner(firstPet, secondPet) {
    if (firstPet.Owner === secondPet.Owner) {
      const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
      const appendAlert = (message, type) => {
        const wrapper = document.createElement("div");
        wrapper.innerHTML = `<div class="alert alert-${type} alert-dismissible" role="alert">
           <div>${message}</div>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>`;
        alertPlaceholder.append(wrapper);
      };
      appendAlert("Two Animals have same Owner!!", "warning");
    }
  }
}
