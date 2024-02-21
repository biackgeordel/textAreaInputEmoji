import { login, test } from "./index";
login();
test();
const auth = import("./feature/feat.js");
auth.then((personne) => {
  console.log("import dynamique:");
  console.log(personne);
  //   personne.login();
});
