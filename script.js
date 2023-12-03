let form, prenom, nom, telephone, groupe, email, bio, file, creer, bouttonCreer, list, icon_btn;
prenom = document.querySelector("#Prenom");
nom = document.querySelector("#Nom");
telephone = document.querySelector("#Telephone");
groupe = document.querySelector("#Groupe");
email = document.querySelector("#Email");
bio = document.querySelector("#Bio");
file = document.querySelector("#uploadFile");
bouttonCreer = document.querySelector('.creer');
list = document.querySelector(".list");
icon_btn = document.querySelector(".list_btn")
let inputs = document.querySelectorAll("input")
let btnRenit = document.querySelector('.renit')




prenom.addEventListener('blur', validationPrenom)
nom.addEventListener('blur', validationNom)
telephone.addEventListener('blur', validationTel)
groupe.addEventListener('blur', validationGroupe)
email.addEventListener('blur', validationEmail)
bio.addEventListener('blur', validationBio)


btnRenit.addEventListener("click", function (e) {
    inputs.forEach((input) => (input.value = ""))

})

console.log(file);

bouttonCreer.addEventListener('click', function () {
    console.log(file.value);

    if (validationAll() === true) {

        let imgPhoto = document.createElement('img');
        imgPhoto.setAttribute('src', `${file.value}`);
        imgPhoto.setAttribute('alt', 'Photo du contact');
        imgPhoto.setAttribute('style', 'border-radius: 50%; border:1px solid black; margin: 1em;');

        console.log(imgPhoto);
        let tab = [];
        let monObjet = {
            Prenom: prenom.value,
            Nom: nom.value,
            Telephone: telephone.value,
            Groupe: groupe.value,
            Email: email.value,
            Bio: bio.value,
            Photo: imgPhoto,
        }

        let divImg = document.createElement('div');
        let divText = document.createElement('div');
        let divBtn = document.createElement('div');

        divImg.innerHTML = monObjet.Photo;
        divText.innerHTML = `<span style='font-size:1.3em;'>${monObjet.Prenom + ' ' + monObjet.Nom + ' - ' + monObjet.Groupe}</span>` + '<br>' + `<span style='color: blue'>${monObjet.Telephone}</span>` + '<br>' + `<span style='  display: flex;
        justify-content: start; flex-wrap: wrap;'>${monObjet.Bio}</span>`

        divImg.setAttribute('style', 'justify-content: top; position: absolute; text-align: center; width:15%; flex-grow: 1;')
        divText.setAttribute('style', 'display:flex; margin-left: 2em; flex-direction:column; flex-grow: 2; height: 100%; text-align: left; justify-content: center; width:65%;')
        divBtn.setAttribute('style', 'display:flex; flex-direction:row; height: 10%; text-align: flex-grow: 3; right; justify-content: right;');



        let btnModif = document.createElement('button');
        btnModif.setAttribute('style', 'width:1em; height:1em; text-align: right;')
        btnModif.innerHTML = "<span style='text-align: right;'><img style='width: 100%; height:100%;' src='https://t4.ftcdn.net/jpg/06/04/78/55/240_F_604785541_MbPwS5Hib6h6cEVgrdPh49t88xGOqLuB.jpg' alt='icon modif'/></span>"
        btnModif.setAttribute('id', 'editBtn');

        let btnSup = document.createElement('button');
        btnSup.setAttribute('style', 'width:1em; height:1em; text-align: right;')
        btnSup.innerHTML = "<span style='text-align: right;'><img style='width: 100%; height:100%;' src='https://cdn-icons-png.flaticon.com/128/6861/6861362.png' alt='icon suppr'/></span>"
        btnSup.setAttribute('id', 'deleteBtn');

        divBtn.appendChild(btnModif);
        divBtn.appendChild(btnSup);

        let contact = document.createElement('div');
        contact.setAttribute('style', 'display:flex; flex-direction:row; border: 1px solid #C4C4C4;  height: 18vh;justify-content: space-between;');
        contact.appendChild(imgPhoto);
        contact.setAttribute('id', 'NumeroDeContact');

        contact.appendChild(divText);
        contact.appendChild(divBtn);


        tab.push(monObjet);
        tab.push(contact);

        console.log(tab);
        list.setAttribute('style', 'display: flex; flex-direction: column;')
        list.appendChild(contact);
        inputs.forEach((input) => (input.value = ""))

        console.log(contact);
        console.log(list);
        console.log(tab.length);
        editContact(monObjet)
        deleteContact(tab)

    }
    else {
        console.log('error');
    }
    console.log(list);

});


function validationPrenom() {
    const form = document.querySelector('form')
    // form.addEventListener('submit', (event) => {
    //     event.preventDefault();
    //     validatePrenom(form.Prenom)

    // })
    return validatePrenom(form.Prenom)

    function validatePrenom(item) {
        let prenomError = document.querySelector('#prenomError')
        let regex = /[A-Za-z]{3,50}/

        if (item.value == "") {
            item.setAttribute('style', 'border: solid red;')
            prenomError.innerHTML = "<span style= 'color : red'>Veillez renseigner votre prenom</span>"
            return false
        } else {
            if (item.value.length >= 3 && item.value.length <= 50) {
                item.removeAttribute('style')

                if (regex.test(item.value)) {
                    prenomError.innerHTML = ""
                    item.removeAttribute('style')
                    return true
                } else {
                    item.setAttribute('style', 'border: solid red;')
                    prenomError.innerHTML = "<span style= 'color : red'> Le caractères doivent être des lettres </span>"
                    item.value.innerHTML = ""
                    return false
                }
            } else {
                item.setAttribute('style', 'border: solid red;')
                prenomError.innerHTML = "<span style= 'color : red'> Le champ doit contenir entre 3 et 50 caractères</span>"

            }
            return false
        }



    }
}

function validationNom() {
    const form = document.querySelector('form')
    // form.addEventListener('submit', (event) => {
    //     event.preventDefault();
    //     validateName(form.Nom)

    // })
    return validateName(form.Nom)

    function validateName(item) {
        let nomError = document.querySelector('#nomError')
        let regex = /[A-Za-z]{3,50}/

        if (item.value == "") {
            item.setAttribute('style', 'border: solid red;')
            nomError.innerHTML = "<span style= 'color : red'>Veillez renseigner votre nom</span>"
            return false
        } else {
            if (item.value.length >= 3 && item.value.length <= 50) {
                item.removeAttribute('style')

                if (regex.test(item.value)) {
                    nomError.innerHTML = ""
                    item.removeAttribute('style')
                    return true
                } else {
                    item.setAttribute('style', 'border: solid red;')
                    nomError.innerHTML = "<span style= 'color : red'> Le caractères doivent être des lettres </span>"
                    item.value.innerHTML = ""
                    return false
                }
            } else {
                item.setAttribute('style', 'border: solid red;')
                nomError.innerHTML = "<span style= 'color : red'> Le champ doit contenir entre 3 et 50 caractères</span>"

            }
            return false
        }

    }
}

function validationTel() {
    const form = document.querySelector('form')
    // form.addEventListener('submit', (event) => {
    //     event.preventDefault();
    //     validateTelephone(form.Telephone)

    // })
    return validateTelephone(form.Telephone)

    function validateTelephone(item) {
        let telError = document.querySelector('#telError')
        let regex = /085|084|082|081|099|097/

        if (item.value == "") {
            item.setAttribute('style', 'border: solid red;')
            telError.innerHTML = "<span style= 'color : red'>Veillez renseigner votre numéro de téléphone</span>"
            return false
        } else {
            if (item.value.length == 10) {
                item.removeAttribute('style')

                if (regex.test(item.value)) {
                    telError.innerHTML = ""
                    item.removeAttribute('style')
                    return true
                } else {
                    item.setAttribute('style', 'border: solid red;')
                    telError.innerHTML = "<span style= 'color : red'> Le numero doit être un numéro national. Ex : 082.... ou 099...</span>"
                    item.value.innerHTML = ""
                    return false
                }
            } else {
                item.setAttribute('style', 'border: solid red;')
                telError.innerHTML = "<span style= 'color : red'> Le champ doit contenir 10 chiffres</span>"

            }
            return false
        }



    }
}

function validationGroupe() {
    const form = document.querySelector('form')
    // form.addEventListener('submit', (event) => {
    //     event.preventDefault();
    //     validateGroupe(form.Groupe)

    // })
    return validateGroupe(form.Groupe)

    function validateGroupe(item) {
        let groupeError = document.querySelector('#groupeError')
        let regex = /[A-Za-z]{3,15}/

        if (item.value == "") {
            item.setAttribute('style', 'border: solid red;')
            groupeError.innerHTML = "<span style= 'color : red'>Veillez renseigner votre groupe</span>"
            return false
        } else {

            if (item.value.length >= 3 && item.value.length <= 50) {
                item.removeAttribute('style')

                if (regex.test(item.value)) {
                    groupeError.innerHTML = ""
                    item.removeAttribute('style')
                    return true
                } else {
                    item.setAttribute('style', 'border: solid red;')
                    groupeError.innerHTML = "<span style= 'color : red'> Le caractères doivent être des lettres </span>"
                    item.value.innerHTML = ""
                    return false
                }
            } else {
                item.setAttribute('style', 'border: solid red;')
                groupeError.innerHTML = "<span style= 'color : red'> Le champ doit contenir entre 3 et 50 caractères</span>"

            }
            return false
        }

    }
}

function validationEmail() {
    const form = document.querySelector('form')
    // form.addEventListener('submit', (event) => {
    //     event.preventDefault();
    //     validateEmail(form.Email)

    // })
    return validateEmail(form.Email)

    function validateEmail(item) {
        let emailError = document.querySelector('#emailError')
        let regex = /[A-Za-z0-9-_]+@[A-Za-z]{2,15}\.[a-z]{2,10}/

        if (item.value == "") {
            item.setAttribute('style', 'border: solid red;')
            emailError.innerHTML = "<span style= 'color : red'>Veillez renseigner votre mail</span>"
            return false
        } else {

            if (item.value.length >= 3 && item.value.length <= 50) {
                item.removeAttribute('style')

                if (regex.test(item.value)) {
                    emailError.innerHTML = ""
                    item.removeAttribute('style')
                    return true
                } else {
                    item.setAttribute('style', 'border: solid red;')
                    emailError.innerHTML = "<span style= 'color : red'> Le caractères doivent être des lettres </span>"
                    item.value.innerHTML = ""
                    return false
                }
            } else {
                item.setAttribute('style', 'border: solid red;')
                emailError.innerHTML = "<span style= 'color : red'> Le champ doit contenir entre 3 et 50 caractères</span>"

            }
            return false
        }

    }
}

function validationBio() {
    const form = document.querySelector('form')
    // form.addEventListener('submit', (event) => {
    //     event.preventDefault();
    //     validateBio(form.Bio)

    // })
    return validateBio(form.Bio)

    function validateBio(item) {
        let bioError = document.querySelector('#bioError')
        let regex = /[A-Za-z0-9 -_']+/

        if (item.value == "") {
            item.setAttribute('style', 'border: solid red;')
            bioError.innerHTML = "<span style= 'color : red'>Veillez renseigner votre biographie</span>"
            return false
        } else {

            if (item.value.length >= 3 && item.value.length <= 2500) {
                item.removeAttribute('style')

                if (regex.test(item.value)) {
                    bioError.innerHTML = ""
                    item.removeAttribute('style')
                    return true

                } else {
                    item.setAttribute('style', 'border: solid red;')
                    bioError.innerHTML = "<span style= 'color : red'> Le caractères doivent être des lettres </span>"
                    item.value.innerHTML = ""

                }

            } else {
                item.setAttribute('style', 'border: solid red;')
                bioError.innerHTML = "<span style= 'color : red'> Le champ doit contenir entre 3 et 2500 caractères</span>"
                return false
            }
        }

    }
}

function validationAll() {
    const returns = validationPrenom() && validationNom() && validationTel() && validationGroupe() && validationEmail() && validationBio()
    return returns
}

function editContact(monObjet) {
    let editBtn = document.querySelector('#editBtn');
    editBtn.addEventListener('click', (e) => {
        prenom.value = monObjet.Prenom;
        nom.value = monObjet.Nom;
        telephone.value = monObjet.Telephone;
        groupe.value = monObjet.Groupe;
        email.value = monObjet.Email;
        bio.value = monObjet.Bio;
        file.value = monObjet.Photo;
        console.log('cool');
        console.log(prenom);
        console.log(prenom.value);
    })
    console.log('function1');
}


function deleteContact(tab) {
    let deleteBtn = document.querySelector('#deleteBtn');
    // let numeroDeContact = document.querySelector('#numeroDeContact');

    deleteBtn.addEventListener('click', function() {
        // if(numeroDeContact.parentNode){
        //     numeroDeContact.parentNode.removeChild(numeroDeContact);
        // }
let parent = deleteBtn.parentNode;
parent.removeChild(deleteBtn);

        // tab.pop()
        console.log('cool2');
        // console.log(tab);



    })
    console.log('function2');

}

// function showContacts() {

// }
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

;
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




// }
// function getData(newContact) {
//     const getData = createElement('div');
// }


