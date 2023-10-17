let btnAjouter = document.getElementById("btn-add");
let btnEffacer = document.getElementById("btn-effacer");
let inputInitule = document.getElementById("intitule");
let inputSomme = document.getElementById("somme");
let listeDep = document.getElementById("list-dep");
let spanTotal = document.getElementById("total");

let sommeGlobale = 0;

btnAjouter.addEventListener("click", () => {
  console.log(inputInitule.value, inputSomme.value);
  console.log(typeof inputInitule.value, typeof inputSomme.value);

  if (!inputInitule.value.trim().length || !inputSomme.value.trim().length) {
    presentAlert();
    return;
  }

  let newLabel = document.createElement("ion-label");
  newLabel.textContent = `${inputInitule.value} : ${inputSomme.value} $`;
  //   newLabel.textContent = inputInitule.value + " : " + inputSomme.value + "$";
  let newItem = document.createElement("ion-item");
  let newList = document.createElement("ion-list");
  newItem.appendChild(newLabel);
  listeDep.appendChild(newItem);

  sommeGlobale += +inputSomme.value;
  spanTotal.textContent = sommeGlobale;
  effacer();
});

function effacer() {
  inputInitule.value = "";
  inputSomme.value = "";
}

btnEffacer.addEventListener("click", effacer);

function presentAlert() {
  const alert = document.createElement("ion-alert");
  alert.header = "Erreur de saisie";
  alert.message = "Veuillez saisir les deux inputs";
  alert.buttons = [
    {
      text: "Yes",
      handler: () => {
        console.log("Yes");
      },
    },
    {
      text: "No",
      role: "cancel",
    },
  ];

  document.body.appendChild(alert);
  alert.present();
}
