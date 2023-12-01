
let prenom, nom, telephone, groupe, email, bio, dropBox, creer, bouttonCreer, list, icon_btn;
prenom = document.querySelector("#Prenom");
nom = document.querySelector("#Nom");
telephone = document.querySelector("#Telephone");
groupe = document.querySelector("#Groupe");
email = document.querySelector("#Email");
bio = document.querySelector("#Bio");
dropBox = document.querySelector(".dropBox");
bouttonCreer = document.querySelector('.creer');
list = document.querySelector(".list");
icon_btn = document.querySelector(".list_btn")

console.log(prenom.value);
bouttonCreer.addEventListener('click', function () {
  console.log(prenom.value);
  let tab = document.createElement('div');
  tab.innerHTML = dropBox.value + "\n" + prenom.value + nom.value + groupe.value + telephone.value + bio.value

  list.appendChild(tab);
  console.log(tab);
  let imgElement = document.createElement('div')
  // imgElement.setAttribute('style', 'width: 25%; height: 25vh; border-radius: 50%; border: 1px solid black');

  tab.setAttribute('style', 'width: 25%; height: 25vh; border-radius: 50%; border: 1px solid black; text-align: center; padding-top: 5em;');

  tab.innerHTML = imgElement
  // list.appendChild(imgElement)
  imgElement.appendChild(dropBox.value)
  let

});
// addContact()



// Fonction d'affichage d'image
const dropBoximg = document.querySelector('.dropBox');
const uploadFile = document.getElementById('uploadFile');

// Écouter l'événement de déposer
dropBox.addEventListener('change', (e) => {
  e.preventDefault();
  console.log('dropped');
  const file = e.target.files[0];
  const image = document.createElement('img');

  const reader = new FileReader();

  reader.onload = (e) => {
    image.src = e.target.result;
    dropBoximg.appendChild(image);
  };
  reader.readAsDataURL(file);

});

// Empêcher le comportement par défaut du navigateur pour les événements de glisser-déposer
dropBox.addEventListener('dragover', (e) => {
  e.preventDefault();
});


// Fonction pour réafficher les informations sur le formulaire
function afficherInformations() {
  // Récupérer les éléments du formulaire
  const inputNom = document.getElementById("nom");
  const inputAge = document.getElementById("age");
  const inputEmail = document.getElementById("email");

  // Afficher les informations sur le formulaire

}
































// let prenom, nom, telephone, groupe, email, bio, dropBox, creer, bouttonCreer, list, icon_btn;
// prenom = document.querySelector("#Prenom");
// nom = document.querySelector("#Nom");
// telephone = document.querySelector("#Telephone");
// groupe = document.querySelector("#Groupe");
// email = document.querySelector("#Email");
// bio = document.querySelector("#Bio");
// dropBox = document.querySelector(".dropBox");
// bouttonCreer = document.querySelector('.creer');
// list = document.querySelector(".list");
// icon_btn = document.querySelector(".list_btn")

// console.log(prenom.value);
// bouttonCreer.addEventListener('click', function () {
//     console.log(prenom.value);
//     let tab = document.createElement('div');
//     tab.innerHTML = dropBox.value + "\n" + prenom.value + nom.value + groupe.value + telephone.value + bio.value

//     list.appendChild(tab);
//     console.log(tab);
//     let imgElement = document.createElement('div')
//     imgElement.setAttribute('style', 'width: 75%; height: 18vh; border-radius: 50%; border: 1px solid black');

//     list.appendChild(imgElement)
//     imgElement.appendChild(dropBox.value)
//     let 


// });
// addContact()




































// document.getElementById("boutonAjouter").addEventListener("click", function () {
//   let input = document.createElement("input");
//   input.type = "file";

//   input.onchange = function (e) {
//     let file = e.target.files[0];
//     let reader = new FileReader();

//     reader.onload = function () {

//       // Créez une balise <img> pour afficher l'image
//       let img = document.createElement("img");
//       img.src = reader.result;


//       // Ajoutez l'image au carnet de contacts
//       document.getElementById("carnetContacts").appendChild(img);
//     };

//     reader.readAsDataURL(file);
//   };

//   input.click();
// });




