let form,
  contacts,
  prenom,
  nom,
  telephone,
  groupe,
  email,
  bio,
  file,
  creer,
  bouttonCreer,
  list,
  icon_btn,
  paragraphePhoto;
prenom = document.querySelector("#Prenom");
nom = document.querySelector("#Nom");
telephone = document.querySelector("#Telephone");
groupe = document.querySelector("#Groupe");
email = document.querySelector("#Email");
bio = document.querySelector("#Bio");
paragraphePhoto = document.querySelector("#paragraphePhoto");
let formulaire = document.getElementsByName('formulaire')
// file = document.querySelector("#uploadFile");
// file.setAttribute('draggable', 'true')
bouttonCreer = document.querySelector(".creer");
list = document.querySelector(".list");
icon_btn = document.querySelector(".list_btn");
contacts = document.querySelector("#contacts");
let inputs = document.querySelectorAll("input");
let btnRenit = document.querySelector(".renit");
let tab = getContacts();
showContacts()
prenom.addEventListener("blur", validationPrenom);
nom.addEventListener("blur", validationNom);
telephone.addEventListener("blur", validationTel);
groupe.addEventListener("blur", validationGroupe);
email.addEventListener("blur", validationEmail);
bio.addEventListener("blur", validationBio);

const dropBox = document.querySelector(".dropBox");
const uploadFile = document.getElementById("uploadFile");
console.log(dropBox);
// Écouter l'événement de déposer

uploadFile.addEventListener("change", validationFile);

// Empêcher le comportement par défaut du navigateur pour les événements de glisser-déposer

dropBox.addEventListener("dragover", (e) => {
  e.preventDefault();
});

btnRenit.addEventListener("click", function (e) {
  inputs.forEach((input) => (input.value = ""));
});

bouttonCreer.addEventListener("click", function (e) {
  e.preventDefault()
  if (validationAll() === true) {
    let image = document.querySelector("#imgForm");
    image.removeAttribute("style");
    image.setAttribute(
      "style",
      "justify-content: center; text-align: center; width:100%; border-radius: 50%; border: 1px solid black; height: 100%"
    );

    tab.push({
      Prenom: prenom.value,
      Nom: nom.value,
      Telephone: telephone.value,
      Groupe: groupe.value,
      Email: email.value,
      Bio: bio.value,
      Photo: image,
    });
    saveContacts(tab);
    showContacts();
    
  } else {
    console.log("error");
  }
  console.log(list);
  dropBox.appendChild(paragraphePhoto);
  console.log(dropBox);
});

function validationPrenom() {
  const form = document.querySelector("form");

  return validatePrenom(form.Prenom);

  function validatePrenom(item) {
    let prenomError = document.querySelector("#prenomError");
    let regex = /[A-Za-z]{3,50}/;

    if (item.value == "") {
      item.setAttribute("style", "border: solid red;");
      prenomError.innerHTML =
        "<span style= 'color : red'>Veillez renseigner votre prenom</span>";
      return false;
    } else {
      if (item.value.length >= 3 && item.value.length <= 50) {
        item.removeAttribute("style");

        if (regex.test(item.value)) {
          prenomError.innerHTML = "";
          item.removeAttribute("style");
          return true;
        } else {
          item.setAttribute("style", "border: solid red;");
          prenomError.innerHTML =
            "<span style= 'color : red'> Le caractères doivent être des lettres </span>";
          item.value.innerHTML = "";
          return false;
        }
      } else {
        item.setAttribute("style", "border: solid red;");
        prenomError.innerHTML =
          "<span style= 'color : red'> Le champ doit contenir entre 3 et 50 caractères</span>";
      }
      return false;
    }
  }
}

function validationNom() {
  const form = document.querySelector("form");

  return validateName(form.Nom);

  function validateName(item) {
    let nomError = document.querySelector("#nomError");
    let regex = /[A-Za-z]{3,50}/;

    if (item.value == "") {
      item.setAttribute("style", "border: solid red;");
      nomError.innerHTML =
        "<span style= 'color : red'>Veillez renseigner votre nom</span>";
      return false;
    } else {
      if (item.value.length >= 3 && item.value.length <= 50) {
        item.removeAttribute("style");

        if (regex.test(item.value)) {
          nomError.innerHTML = "";
          item.removeAttribute("style");
          return true;
        } else {
          item.setAttribute("style", "border: solid red;");
          nomError.innerHTML =
            "<span style= 'color : red'> Le caractères doivent être des lettres </span>";
          item.value.innerHTML = "";
          return false;
        }
      } else {
        item.setAttribute("style", "border: solid red;");
        nomError.innerHTML =
          "<span style= 'color : red'> Le champ doit contenir entre 3 et 50 caractères</span>";
      }
      return false;
    }
  }
}

function validationTel() {
  const form = document.querySelector("form");

  return validateTelephone(form.Telephone);

  function validateTelephone(item) {
    let telError = document.querySelector("#telError");
    let regex = /085|084|082|081|099|097/;

    if (item.value == "") {
      item.setAttribute("style", "border: solid red;");
      telError.innerHTML =
        "<span style= 'color : red'>Veillez renseigner votre numéro de téléphone</span>";
      return false;
    } else {
      if (item.value.length == 10) {
        item.removeAttribute("style");

        if (regex.test(item.value)) {
          telError.innerHTML = "";
          item.removeAttribute("style");
          if (isValueExist(telephone) == true) {
            telError.innerHTML = "<span style= 'color : red'> le numero est déjà utilisé </span>";;
            item.setAttribute("style", "border: solid red;");
            return false;
          }
          return true;
        } else {
          item.setAttribute("style", "border: solid red;");
          telError.innerHTML =
            "<span style= 'color : red'> Le numero doit être un numéro national. Ex : 082.... ou 099...</span>";
          item.value.innerHTML = "";
          return false;
        }
      } else {
        item.setAttribute("style", "border: solid red;");
        telError.innerHTML =
          "<span style= 'color : red'> Le champ doit contenir 10 chiffres</span>";
      }
      return false;
    }
  }
}

function validationGroupe() {
  const form = document.querySelector("form");

  return validateGroupe(form.Groupe);

  function validateGroupe(item) {
    let groupeError = document.querySelector("#groupeError");
    let regex = /[A-Za-z]{3,15}/;

    if (item.value == "") {
      item.setAttribute("style", "border: solid red;");
      groupeError.innerHTML =
        "<span style= 'color : red'>Veillez renseigner votre groupe</span>";
      return false;
    } else {
      if (item.value.length >= 3 && item.value.length <= 50) {
        item.removeAttribute("style");

        if (regex.test(item.value)) {
          groupeError.innerHTML = "";
          item.removeAttribute("style");
          return true;
        } else {
          item.setAttribute("style", "border: solid red;");
          groupeError.innerHTML =
            "<span style= 'color : red'> Le caractères doivent être des lettres </span>";
          item.value.innerHTML = "";
          return false;
        }
      } else {
        item.setAttribute("style", "border: solid red;");
        groupeError.innerHTML =
          "<span style= 'color : red'> Le champ doit contenir entre 3 et 50 caractères</span>";
      }
      return false;
    }
  }
}

function validationEmail() {
  const form = document.querySelector("form");

  return validateEmail(form.Email);

  function validateEmail(item) {
    let emailError = document.querySelector("#emailError");
    let regex = /[A-Za-z0-9-_]+@[A-Za-z]{2,15}\.[a-z]{2,10}/;

    if (item.value == "") {
      item.setAttribute("style", "border: solid red;");
      emailError.innerHTML =
        "<span style= 'color : red'>Veillez renseigner votre mail</span>";
      return false;
    } else {
      if (item.value.length >= 3 && item.value.length <= 50) {
        item.removeAttribute("style");

        if (regex.test(item.value)) {
          emailError.innerHTML = "";
          item.removeAttribute("style");
          if (isValueExist(email) == true) {
            emailError.innerHTML = "<span style= 'color : red'> l'email est déjà utilisé </span>";
            item.setAttribute("style", "border: solid red;");
            return false;
          }
          return true;
        } else {
          item.setAttribute("style", "border: solid red;");
          emailError.innerHTML =
            "<span style= 'color : red'> Le caractères doivent être des lettres </span>";
          item.value.innerHTML = "";
          return false;
        }
      } else {
        item.setAttribute("style", "border: solid red;");
        emailError.innerHTML =
          "<span style= 'color : red'> Le champ doit contenir entre 3 et 50 caractères</span>";
      }
      return false;
    }
  }
}

function validationBio() {
  const form = document.querySelector("form");

  return validateBio(form.Bio);

  function validateBio(item) {
    let bioError = document.querySelector("#bioError");
    let regex = /[A-Za-z0-9 -_']+/;

    if (item.value == "") {
      item.setAttribute("style", "border: solid red;");
      bioError.innerHTML =
        "<span style= 'color : red'>Veillez renseigner votre biographie</span>";
      return false;
    } else {
      if (item.value.length >= 3 && item.value.length <= 2500) {
        item.removeAttribute("style");

        if (regex.test(item.value)) {
          bioError.innerHTML = "";
          item.removeAttribute("style");
          return true;
        } else {
          item.setAttribute("style", "border: solid red;");
          bioError.innerHTML =
            "<span style= 'color : red'> Le caractères doivent être des lettres </span>";
          item.value.innerHTML = "";
        }
      } else {
        item.setAttribute("style", "border: solid red;");
        bioError.innerHTML =
          "<span style= 'color : red'> Le champ doit contenir entre 3 et 2500 caractères</span>";
        return false;
      }
    }
  }
}
//
function validationFile() {
  const form = document.querySelector("form");
  return validateFile(form.uploadFile);
  function validateFile() {
    let erreur = document.querySelector(".erreurFormat");
    let fileImage = document.forms["formulaire"]["photo"];
    let filePath = fileImage.value;
    let validImageExt = /[\.jpg| \.jpeg| \.png]$/;
    if (!validImageExt.exec(filePath)) {
      // image.value = "";
      erreur.innerText = "Format requis : PNG , JPEG, JPG ";
      erreur.setAttribute("style", "visibility: visible ; color : #ff3838 ");
      dropBox.setAttribute("style", "border : solid #ff3838");
      return false;
    } else {
      if (fileImage.files && fileImage.files[0]) {
        let reader = new FileReader();
        reader.onload = (e) => {
          let image = document.createElement("img");
          image.setAttribute(
            "style",
            "  width: 100%; height: 100%; top : 0 ; left : 0 ;position: absolute; text-align: center; border: dashed 1px #918585;"
          );
          image.setAttribute("id", "imgForm");
          image.src = e.target.result;
          // imgPhoto = URL.createObjectURL(image.files[0]);
          dropBox.appendChild(image);
          dropBox.setAttribute("style", "position : relative");
          erreur.setAttribute("style", "visibility: hidden");

        };

        reader.readAsDataURL(fileImage.files[0]);
        return true;
      }
    }
  }
}
//
function validationAll() {
  const returns =
    validationPrenom() &&
    validationNom() &&
    validationTel() &&
    validationGroupe() &&
    validationEmail() &&
    validationBio() && validationFile();
  return returns;
}

function editContact(index) {
  console.log("tab", tab);

  prenom.value = tab[index].Prenom;
  nom.value = tab[index].Nom;
  telephone.value = tab[index].Telephone;
  groupe.value = tab[index].Groupe;
  email.value = tab[index].Email;
  bio.value = tab[index].Bio;
  console.log(prenom.value);
  console.log(inputs.value);

  tab.splice(index, 1);
  // showContacts()
  console.log(prenom.value);
  console.log(inputs.value);
}

function deleteContact(index) {
  tab.splice(index, 1);
  showContacts();
}

function showContacts() {
  console.log("show");
  contacts.innerHTML = "";
  tab.forEach((element, index) => {
    let divImg = document.createElement("div");
    let divText = document.createElement("div");
    let divBtn = document.createElement("div");

    divImg.appendChild(element.Photo);

    divText.innerHTML =
      `<span style='font-size:1.3em;'>${
        element.Prenom + " " + element.Nom + " - " + element.Groupe
      }</span>` +
      "<br>" +
      `<span style='color: blue'>${element.Telephone}</span>` +
      "<br>" +
      `<span style='  display: flex;
      justify-content: start; flex-wrap: wrap;'>${element.Bio}</span>`;

    divImg.setAttribute("style", " width:15%; flex-grow: 1;");
    divText.setAttribute(
      "style",
      "display:flex; margin-left: 2em; flex-direction:column; flex-grow: 2; height: 100%; text-align: left; justify-content: center; width:65%;"
    );
    divBtn.setAttribute(
      "style",
      "display:flex; flex-direction:row; height: 10%; text-align: flex-grow: 3; right; justify-content: right;"
    );

    let btnModif = document.createElement("button");
    btnModif.setAttribute(
      "style",
      "width:1em; height:1em; text-align: right; background-color: white; border: 1px solid white;"
    );
    btnModif.innerHTML =
      "<span style='text-align: right;'><img style='width: 100%; height:100%;' src='https://t4.ftcdn.net/jpg/06/04/78/55/240_F_604785541_MbPwS5Hib6h6cEVgrdPh49t88xGOqLuB.jpg' alt='icon modif'/></span>";
    btnModif.setAttribute("id", "editBtn");
    btnModif.setAttribute("onclick", `editContact(${index})`);

    let btnSup = document.createElement("button");
    btnSup.setAttribute(
      "style",
      "width:1em; height:1em; text-align: right; background-color: white; border: 1px solid white;"
    );
    btnSup.innerHTML =
      "<span style='text-align: right;'><img style='width: 100%; height:100%;' src='https://cdn-icons-png.flaticon.com/128/6861/6861362.png' alt='icon suppr'/></span>";
    btnSup.setAttribute("id", "deleteBtn");
    btnSup.setAttribute("onclick", `deleteContact(${index})`);

    divBtn.appendChild(btnModif);
    divBtn.appendChild(btnSup);

    let contact = document.createElement("div");
    contact.setAttribute(
      "style",
      "display:flex; flex-direction:row; border: 1px solid #C4C4C4;  height: 18vh; width: 100%; justify-content: space-between; padding-top: 0%; margin-top: 0%"
    );
    contact.setAttribute("id", "NumeroDeContact");
    contact.appendChild(divImg);
    contact.appendChild(divText);
    contact.appendChild(divBtn);

    contacts.appendChild(contact);

    inputs.forEach((input) => (input.value = ""));
    bio.value = "";
    uploadFile.file = ""
  });
}
function isValueExist(item) {
  // Checking each object from songs
  for (let i = 0; i < tab.length; i++) {
    if (
      item.value == tab[i].Telephone ||
      item.value == tab[i].Email
    ) {
      item.style.border = "solid 2px #ff3838";
      return true; // return immediately when finding that the song exists
    } else {
      return false; // song doesn't exist
    }
  }
}
function saveContacts(contact) {
  console.log("save");
  localStorage.setItem("contact", JSON.stringify(contact));
}

function getContacts() {
  // localStorage.clear()
  let liste = localStorage.getItem("contacts");
  return liste ? JSON.parse(liste) : [];
}
