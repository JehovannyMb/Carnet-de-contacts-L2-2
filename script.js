
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
//   console.log(prenom.value);
//   let tab = document.createElement('div');
//   tab.innerHTML = dropBox.value + "\n" + prenom.value + nom.value + groupe.value + telephone.value + bio.value

//   list.appendChild(tab);
//   console.log(tab);
//   let imgElement = document.createElement('div')
//   // imgElement.setAttribute('style', 'width: 25%; height: 25vh; border-radius: 50%; border: 1px solid black');

//   tab.setAttribute('style', 'width: 25%; height: 25vh; border-radius: 50%; border: 1px solid black; text-align: center; padding-top: 5em;');

//   tab.innerHTML = imgElement
//   // list.appendChild(imgElement)
//   imgElement.appendChild(dropBox.value)
//   let

// });
// addContact()



const dropBox = document.querySelector('.dropBox');
const uploadFile = document.getElementById('uploadFile');

// Écouter l'événement de déposer

uploadFile.addEventListener('change', (e) => {
  e.preventDefault();
  console.log('dropped');
  const file = e.target.files[0];
  const image = document.createElement('img');

  const reader = new FileReader();

  reader.onload = (e) => {
    image.src = e.target.result;
    dropBox.appendChild(image);
  };
  reader.readAsDataURL(file);

});

// Empêcher le comportement par défaut du navigateur pour les événements de glisser-déposer

dropBox.addEventListener('dragover', (e) => {
  e.preventDefault();
});




// functions modiffier contacts

// function modifierContact(id, nouveauNom, nouveauEmail) {
//   // Trouver l'élément du formulaire correspondant au contact à modifier
//   let contactElement = document.getElementById(id);
  
//   // Modifier les valeurs des champs nom et email
//   contactElement.querySelector('.nom').value = nouveauNom;
//   contactElement.querySelector('.email').value = nouveauEmail;
// }









































































