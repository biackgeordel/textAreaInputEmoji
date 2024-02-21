console.log("Bonjour les amis du zero");
const personne = {
  age: 37,
  ville: "brazzaville",
  pays: "Kongo",
  getNom() {
    console.log("biakabakana");
  },
};
console.log(personne);
personne.getNom();
const test = {
  isfunction: () => {
    return "je suis une fonction";
  },
};
console.log(test.isfunction());
const prop = "variable ";
const obj1 = {};
obj1[prop] = 12;

console.log(obj1);

const population = 7e7;
const satellite = "lune";
const ville = "Mfoa";
const age = "inconnue";
const pop = "ville";
const obj2 = { [pop]: ville, population, satellite, age };

console.log(obj2);
obj2["pays"] = "Kongo";
console.log(obj2);
obj3 = {
  ville: "Amberieu en bugey",
  codePostal: 15000,
  commune: "ain",
};
console.log(obj3["codePostal"]);
const { commune, ville: vilobj3, codePostal } = obj3;
console.log(commune, vilobj3, codePostal);
const { commune: com, ...rest } = obj3;
console.log(rest.ville);
const personnage = {
  age: 36,
  ville: "Amberieur en bugey",
  pays: "france",
  codePostal: 1500,
};
console.log(personnage);
const { age: age_personnage, codePostal: code } = personnage;
console.log(age_personnage, code);
personnage.tel = "0752746770";
console.log(personnage);
console.log(parseInt(personnage.tel, 10));
const obj4 = {
  a: undefined,
};
const { a: nouveauNom = 10 } = obj4;
console.log(nouveauNom);
const per = {
  nom: "biak",
  famille: {
    pere: "georges",
    nom: "biack",
  },
};
const {
  nom,
  famille,
  famille: { pere, nom: nomFamille },
} = per;
console.log(`bonjour monsieur ${pere} ${nomFamille}`);
console.log(famille);
const per1 = {
  a: {
    b: {
      c: { test: true },
    },
  },
};
const {
  a: {
    b: {
      c: { test: valTest },
    },
  },
} = per1;
console.log(valTest);
const terre = {
  population: 7e7,
  temperature: {
    min: -7,
    max: 17,
  },
  isOld: false,
};
console.log(terre ? terre : false);
console.log(terre.hasOwnProperty("pop"));
if ("population" in terre) {
  console.log("ok");
} else {
  console.log("ko");
}
delete terre.isOld;
console.log(terre);
terre.habitable = true;
console.log(terre);
const { habitable, ...copyTerre } = terre;
console.log(copyTerre);
const objet = {
    a: 1,
    b: 2,
  },
  object1 = { c: 3, d: 4 };
console.log({ ...objet, ...object1 });
const terre2 = {
  a: "un",
  b: "deux",
  c: "trois",
};
for (property in terre2) {
  console.log(terre2[property]);
}
const ter = JSON.stringify(terre2);
console.log(ter);
console.log(JSON.parse(ter));
const origin = {
  a: 12,
  foo: {
    test: "zoo",
  },
};
// const copy = { ...origin };
const copy = JSON.parse(JSON.stringify(origin));
copy.foo.test = "foo";
console.log(copy);
console.log(origin);
const add = (...nombres) => {
  let result = 0;
  for (let i = 0; i < nombres.length; i++) {
    result += nombres[i];
  }
  console.log(result);
};
add(1, 3, 4);
const op = {
  test: 1,
  a() {
    console.log(this.test);
  },
};
op.a();
// const n = {
//   func() {
//     function atest() {
//       console.log(this);
//     }
//     atest();
//   },
// };
// n.func.call(n);
const b = {
  name: "odilon",
  lastName: "geordel",
};
function func() {
  console.log(this.name + this.lastName);
}
func.call(b);
const bi = function ads() {
  // console.log("ads");
  return "ads";
};
bi();
console.log(bi());
function bds() {
  return "bds";
}
const bs = bds();
console.log(bs);
const fer = {
  name: "biakabakana",
};
function bxc(param) {
  console.log(`${param} ${this.name}`);
}
bxc.call(fer, "salut");
const funcFleche = () => {
  console.log(this);
};
funcFleche();
const testtab = () => {
  const arr = [];
  return function () {
    for (let i = 0; i < 3; i++) {
      arr.push(function () {
        console.log(i);
      });
    }
    return arr;
  };
};
testtab()()[0]();
testtab()()[1]();
testtab()()[2]();
const comp = () => {
  let compteur = 0;
  return () => console.log(++compteur);
};
const comp1 = comp(); //1
const comp2 = comp();

comp1(); //1
comp1();
comp2();
const tabArray = [[1, 2], 3];
const [[el1, el2]] = tabArray;
console.log(tabArray);
console.log(el1);
console.log(el2);
// const obg = {
//   per: {
//     a1: 1,
//     b2: 2,
//   },
//   bn: "od",
// };
// const {
//   per: { a1, b2 },
// } = obg;
// console.log(a1, b2);
const tableau = [
  { quantity: 10, produit: "chemises", prix: 5 },
  { quantity: 5, produit: "patalons", prix: 10 },
  { quantity: 5, produit: "pull", prix: 12 },
  { quantity: 5, produit: "short", prix: 20 },
];
const newTab = tableau
  .map((element) => ({
    ...element,
    produit: element.produit.toUpperCase(),
  }))
  .filter((element) => element.prix >= 10);
console.log(newTab);
const prixTotal = () => {
  let total = 0;
  newTab.forEach((element) => {
    total += element.prix * element.quantity;
  });
  return total;
};
console.log(prixTotal());
const tabfind = ["terre", "soleil", "lune"];
console.log(tabfind.find((element) => element === "soleil"));
console.log(tabfind.indexOf("terre"));
const val = tableau.findIndex((element) => element.prix > 10);
console.log(val);
const copyTab = Array.from(tableau);
console.log(copyTab);
const objIterable = {
  a: 1,
  b: 2,
  c: 3,
};
console.log(Array.from("bonjour"));
const tab1 = [1, 2, 3, 4, 5, 1, 4, 6, 1, 7];
// const tab1Slice = tab1.slice(1, 3);
// console.log(tab1Slice);
// console.log(tab1.splice(2, 2));
const index = (val) => {
  let index = tab1.indexOf(val);
  const tabIndexOf = [];
  while (index !== -1) {
    console.log("valeur index: ", index);
    tabIndexOf.push(index);
    index = tab1.indexOf(val, index + 1);
    console.log("valeur 1 index: ", index);
  }
  return tabIndexOf;
};
console.log(index(4));
console.log(document);
console.log(document.body);
console.log(document.head);
console.log(document.getRootNode());
// const h1 = document.createElement("h1");
// h1.textContent = "element 1";
// document.body.before(h1);
const h1 = document.querySelector("h1");
console.log(h1.childNodes[0].data);
console.log(h1.children);
console.log(h1.childNodes);
const ul = document.querySelector("ul");
console.log(ul);
console.log(ul.childNodes);
console.log(ul.children);
const tabElement = [...ul.children];
console.log(tabElement);
console.log(tabElement.map((element) => element.textContent));
for (let i = 0; i < ul.children.length; i++) {
  console.log(ul.children[i].textContent);
}
for (let val of ul.children) {
  console.log(val.textContent);
}
const elementMap = Array.from(ul.children).map(
  (element) => element.textContent
);
console.log(elementMap);
console.log(ul.nextSibling);
console.log(ul.nextElementSibling);
console.log(ul.previousSibling);
console.log(ul.previousElementSibling);
console.log(ul.parentNode);
console.log(ul.parentElement);
const input = document.querySelector("input");

input.addEventListener("input", (event) => {
  event.target.style.color = "black";
  let valInput = `${event.target.value}`;
  const element = event.target;
  console.log(valInput.match(/[\d]{2}/));
  let tab;
  // let tab = valInput.match(/[\d]{2}/g);
  if (tab !== null) {
    // if (tab.length === 4) {
    //   event.target.value = `${tab[0]}/${tab[1]}/${tab[2]}${tab[3]}`;
    // }

    if (valInput.match(/^[\d]{3}/)) {
      tab = valInput.match(/^[\d]{2}/);
      console.log(tab);
      event.target.value = `${tab[0]}/${event.target.value[2]}`;
    }

    if (valInput.match(/^[\d]{2}\/[\d]{3}$/)) {
      tab = valInput.match(/[\d]{2}/g);
      console.log("deuxiemme condition:", tab);
      event.target.value = `${tab[0]}/${tab[1]}/${event.target.value[5]}`;
    }
    if (valInput.match(/[\d]{2}\/[\d]{2}\/[\d]{4}/)) {
      tab = valInput.match(
        /(?<jour>[\d]{2})\/(?<mois>[\d]{2})\/(?<annee>[\d]{4})/
      );
      console.log("final: ", tab.groups);
      //on stocke les conditions dans des constantes
      const jour =
        parseInt(tab.groups.jour, 10) > 0 &&
        parseInt(tab.groups.jour, 10) <= 31;
      const mois =
        parseInt(tab.groups.mois, 10) > 0 &&
        parseInt(tab.groups.mois, 10) <= 12;
      const annee =
        parseInt(tab.groups.annee, 10) > 1900 &&
        parseInt(tab.groups.annee, 10) <= 2015;

      if (jour && mois && annee) {
        event.target.value = `${tab.groups.jour}/${tab.groups.mois}/${tab.groups.annee}`;
      } else {
        event.target.style.color = "red";
        event.target.value = `${tab.groups.jour}/${tab.groups.mois}/${tab.groups.annee}`;
        element.setCustomValidity("date de naissance est incompatible");
        element.reportValidity();
        element.select();
      }
    }
  }
});
const section = document.querySelector("section");

section.firstElementChild.classList.add("text-primary");
section.firstElementChild.classList.add("test");
section.lastElementChild.classList.add("text-warning");
console.log("valeur de classList:", section.firstElementChild.classList.value);
for (let val of section.firstElementChild.classList) {
  console.log(val);
}

// input.addEventListener("keyup", (event) => {
//   if (event.target.value.length === 3 && event.code === "Backspace") {
//     event.target.value = event.target.value.slice(0, 2);
//   }
//   if (event.target.value.length === 6 && event.code === "Backspace") {
//     console.log(event.target.value);

//     event.target.value = event.target.value.slice(0, 5);
//   }
// });
const textarea = document.querySelector("textarea");
textarea.addEventListener("input", (event) => {
  console.log(event.target.value);
});
const emoji = document.querySelector(".container-emoji");
emoji.addEventListener("click", (event) => {
  console.log(event.target);
  if (!event.target.classList.contains("container-emoji")) {
    textarea.value += event.target.textContent;
  }
});
const button = document.querySelector("button");
const container = document.querySelector(".cont");
button.addEventListener("click", () => {
  container.classList.toggle("show");
});
//ajouter commentaire
const btnCommet = document.querySelector(".commet");

btnCommet.addEventListener("click", () => {
  const commet = document.querySelector(".commentaire > h2");

  if (container.classList.contains("show")) {
    container.classList.remove("show");
  }

  if (textarea.value.match(/https?:\/\/[a-zA-Z0-9_\.\/\-:&\?=]+/)) {
    const div = document.createElement("div");
    div.classList.add("item-commet");
    let lien = textarea.value.match(/https?:\/\/[a-zA-Z0-9_\.\/\-:\?=&%#]+/g);
    console.log(lien);
    let iteration = 0;
    lien = lien.map((element, index, tb) => {
      console.log(index);
      iteration++;

      if (element === tb[iteration] && iteration < tb.length) {
        const a = `<a href="${element}">${element}</a>`;
        console.log(index, " : ", a);

        textarea.value = textarea.value.replaceAll(element, a);
      } else {
        //  console.log("element lien", element);
        const a = `<a href="${element}">${element}</a>`;
        console.log(" lien crée:", a);
        textarea.value = textarea.value.replace(element, a);
      }

      div.innerHTML = textarea.value;
      console.log(div.innerHTML);
      return div;
    });

    console.log(...lien);
    commet.after(...lien);
  } else {
    const div = document.createElement("div");
    div.classList.add("item-commet");
    div.textContent = textarea.value;
    commet.after(div);
  }

  textarea.value = "";
});
//create elements
const app = document.querySelector("#app");
const sectionApp = document.createElement("section");
const paragraphe = document.createElement("p");
const a = document.createElement("a");
const paragrapheText = document.createTextNode("je suis un paragraphe");
const aText = document.createTextNode("je suis un lien");
const classElement = document.createAttribute("class");
const titre = document.createElement("h1");
textTitre = document.createTextNode("mon titre");
titre.append(textTitre);
//create attribute
const aHref = document.createAttribute("href");

aHref.value = "http://localhost:4000/";
app.appendChild(sectionApp);
sectionApp.append(paragraphe);
sectionApp.setAttributeNode(classElement);
sectionApp.insertAdjacentElement("beforeend", titre);
sectionApp.insertBefore(
  document.createTextNode("je suis un noeud de type texte"),
  paragraphe
);
paragraphe.after("bonjour", "salut", "sohan et celeste");
classElement.nodeValue = "red";
paragraphe.append(paragrapheText, a);
a.appendChild(aText);
a.setAttributeNode(aHref);
// paragraphe.removeChild(paragrapheText);
// a.remove();
paragrapheText.replaceWith("nouveau texte");
const square = document.querySelector(".square");
// square.onmouseover = function (event) {
//   console.log(event);
//   console.log(this);
//   this.style.background = "red";
// };
// const scrollContent = document.querySelector(".scroll-content");
// scrollContent.addEventListener("mouseover", (event) => {
//   square.textContent = event.target.textContent;
// });
square.addEventListener(
  "click",
  (event) => {
    console.log(event);
  },
  {
    once: true,
  }
);
