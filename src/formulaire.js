const form = document.querySelector("form");
const firstName = document.querySelector("#firstName");
const password = document.querySelector("#password");
const email = document.querySelector("#email");
let validEmail, validPassword, validFirstName;
const parentPassword = password.parentElement;
const divError = document.createElement("ul");
divError.classList.add("no-valid");
parentPassword.after(divError);
const container = document.createElement("div");

form.after(container);

const controllerFirstName = (event) => {
  console.log(event.target.value);
  let valid = false;
  const regex = /^[a-z]+[-| ]{0,1}[a-z]+$/g;
  let prenom = `${event.target.value}`;
  if (prenom.length !== 0) {
    if ((valid = regex.test(prenom))) {
      if (firstName.classList.contains("inputColor-invalid")) {
        firstName.classList.replace("inputColor-invalid", "inputColor-valid");
      } else {
        firstName.classList.add("inputColor-valid");
      }
    } else {
      if (firstName.classList.contains("inputColor-valid")) {
        firstName.classList.replace("inputColor-valid", "inputColor-invalid");
      } else {
        firstName.classList.add("inputColor-invalid");
      }
    }
  } else {
    firstName.classList.remove("inputColor-invalid");
    firstName.classList.remove("inputColor-valid");
  }
  return valid;
};
const controllerPassword = (event) => {
  let valid = false;
  let validEnd = false;
  console.log(event.target.value);
  let pass = `${event.target.value}`;
  if (pass.length !== 0) {
    divError.classList.replace("no-valid", "valid");

    if (/[a-z-A-z-0-9]{5,}/.test(pass)) {
      divError.innerHTML = `<li>
        <i class="fas fa-check"></i>Mot de passe de plus de 5 caractères</li>`;
      //on verifie les premiers caractères du mot de passe
      if ((valid = /^[A-Z]+/.test(pass))) {
        divError.innerHTML += `<li>
        <i class="fas fa-check"></i></i>Mot de passe commençant par un majuscule</li>`;
      } else {
        divError.innerHTML += `<li><i class="fas fa-times"></i>Mot de passe commençant par un majuscule</li>`;
      }
      if ((validEnd = /[$&#]+$/g.test(pass))) {
        divError.innerHTML += `<li>
      <i class="fas fa-check"></i>
      Mot de passe se terminant par des caractères spéciaux</li>`;
        if (valid && validEnd) {
          password.classList.remove("inputColor-invalid");
          password.classList.add("inputColor-valid");
        }
      } else {
        divError.innerHTML += `<li><i class="fas fa-times"></i> Mot de passe se terminant par des caractères spéciaux</li>`;
        password.classList.add("inputColor-invalid");
        password.classList.remove("inputColor-valid");
      }
    } else {
      divError.innerHTML = `<li><i class="fas fa-times"></i>Mot de passe de plus de 5 caractères</li>`;
      password.classList.add("inputColor-invalid");
    }

    setTimeout(() => {
      console.log(document.querySelectorAll("ul>li"));
      const liste = document.querySelectorAll("ul>li");

      liste.forEach((element) => {
        console.log(element.classList.add("apparition"));
      });
    }, 1000);
  } else {
    //suppressions des classes quand la valeur de pass  est 0
    password.classList.remove("inputColor-invalid");
    password.classList.remove("inputColor-valid");
    password.classList.remove("inputColor-warning");

    divError.innerHTML = " ";
    divError.classList.replace("valid", "no-valid");
  }

  return valid && validEnd ? true : false;
};

const controllerEmail = (event) => {
  const valEmail = `${event.target.value}`;
  let test = false;
  if (valEmail.length !== 0) {
    if ((test = /^[a-z]+[a-z-0-9]+@[a-z]+\.[a-z]+$/.test(valEmail))) {
      email.classList.add("inputColor-valid");
      email.classList.remove("inputColor-invalid");
    } else {
      email.classList.add("inputColor-invalid");
      email.classList.remove("inputColor-valid");
    }
  } else {
    email.classList.remove("inputColor-invalid");
    email.classList.remove("inputColor-valid");
  }
  return test;
};

email.addEventListener("input", (event) => {
  validEmail = controllerEmail(event);
  console.log(validEmail);
});
password.addEventListener("input", (event) => {
  validPassword = controllerPassword(event);
  console.log(validPassword);
});
firstName.addEventListener("input", (event) => {
  validFirstName = controllerFirstName(event);
  console.log(validFirstName);
});
form.addEventListener("submit", (event) => {
  event.preventDefault();
  // container.textContent = " ";

  console.log(validEmail);
  console.log("validPassword :", validPassword);
  console.log("firstName :", validFirstName);
  if (validEmail && validFirstName && validPassword) {
    const data = new FormData(form);
    //reset des inputs du formulaires
    console.log("bonjour".repeat(3));
    firstName.value = "";
    divError.innerHTML = "";
    divError.classList.replace("valid", "no-valid");
    firstName.classList.remove("inputColor-valid");
    password.classList.remove("inputColor-valid");
    email.classList.remove("inputColor-valid");
    password.value = "";
    email.value = "";
    container.innerHTML = "<h1>Information</h1>";
    data.forEach((element) => {
      console.log(element);
      container.innerHTML += `<p>${element}</p>`;
    });
  }
});
