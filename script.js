let form, prenom, nom, telephone, groupe, email, bio, dropBox, creer, bouttonCreer, list, icon_btn;
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
console.log(telephone.value);
console.log(nom.value);



bouttonCreer.addEventListener('click', function () {
    if (telephone.value == "" || nom.value == "" || prenom.value == "") {

        validationTel()
        validationNom()
        validationPrenom()
        validationGroupe()
    }
    else {
        console.log(prenom.value);
        let tab = document.createElement('div');
        tab.innerHTML = dropBox.value + "\n" + prenom.value + nom.value + groupe.value + telephone.value + bio.value

        list.appendChild(tab);
        console.log(tab);
    }
});

// function showContacts() {

// }



// function saveData(newContact) {
//     localStorage.setItem("contact", this.newContact);

// }
// function getData(newContact) {
//     const getData = createElement('div');
// }


function validationPrenom() {
    const form = document.querySelector('form')
    let p = document.querySelector('.error')
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        validatePrenom(form.Prenom)

    })


    function validatePrenom(item) {
        let prenomError = document.querySelector('#prenomError')
        let regex = /[A-Za-z]{3,15}/

        if (item.value.length >= 3 && item.value.length <= 15) {
            item.removeAttribute('style')

            if (regex.test(item.value)) {
                console.log('letters is coorectly writen');



                prenomError.innerHTML = ""
                item.removeAttribute('style')

            } else {
                item.setAttribute('style', 'border: solid red;')
                prenomError.innerHTML = "<span style= 'color : red'> Le caractères doivent être des lettres </span>"
                item.value.innerHTML = ""

            }
        } else {
            item.setAttribute('style', 'border: solid red;')
            prenomError.innerHTML = "<span style= 'color : red'> Le champ doit contenir entre 3 et 15 caractères</span>"

        }





    }
}






function validationNom() {
    const form = document.querySelector('form')
    let p = document.querySelector('.error')
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        validateName(form.Nom)

    })


    function validateName(item) {
        let nomError = document.querySelector('#nomError')
        let regex = /[A-Za-z]{3,15}/

        if (item.value.length >= 3 && item.value.length <= 15) {
            item.removeAttribute('style')

            if (regex.test(item.value)) {
                console.log('letters is coorectly writen');



                nomError.innerHTML = ""
                item.removeAttribute('style')

            } else {
                item.setAttribute('style', 'border: solid red;')
                nomError.innerHTML = "<span style= 'color : red'> Le caractères doivent être des lettres </span>"
                item.value.innerHTML = ""

            }
        } else {
            item.setAttribute('style', 'border: solid red;')
            nomError.innerHTML = "<span style= 'color : red'> Le champ doit contenir entre 3 et 15 caractères</span>"

        }





    }
}





function validationTel() {
    const form = document.querySelector('form')
    let p = document.querySelector('.error')
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        validateTelephone(form.Telephone)

    })


    function validateTelephone(item) {
        let telError = document.querySelector('#telError')
        let regex = /085|084|082|081|099|097/

        if (item.value.length == 10) {
            item.removeAttribute('style')

            if (regex.test(item.value)) {
                console.log('letters is coorectly writen');



                telError.innerHTML = ""
            item.removeAttribute('style')

            } else {
                item.setAttribute('style', 'border: solid red;')
                telError.innerHTML = "<span style= 'color : red'> Le numero doit être un numéro national. Ex : 082.... ou 099...</span>"
                item.value.innerHTML = ""

            }
        } else {
            item.setAttribute('style', 'border: solid red;')
            telError.innerHTML = "<span style= 'color : red'> Le champ doit contenir 10 chiffres</span>"

        }





    }
}



function validationGroupe() {
    const form = document.querySelector('form')
    let p = document.querySelector('.error')
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        validateGroupe(form.Groupe)

    })


    function validateGroupe(item) {
        let groupeError = document.querySelector('#groupeError')
        let regex = /[A-Za-z]{3,15}/

        if (item.value.length >= 3 && item.value.length <= 15) {
            item.removeAttribute('style')

            if (regex.test(item.value)) {
                console.log('letters is coorectly writen');



                groupeError.innerHTML = ""
                item.removeAttribute('style')

            } else {
                item.setAttribute('style', 'border: solid red;')
                groupeError.innerHTML = "<span style= 'color : red'> Le caractères doivent être des lettres </span>"
                item.value.innerHTML = ""

            }
        } else {
            item.setAttribute('style', 'border: solid red;')
            groupeError.innerHTML = "<span style= 'color : red'> Le champ doit contenir entre 3 et 15 caractères</span>"

        }





    }
}



















