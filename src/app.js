/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
const who = ["The dog", "My grandma", "The mailman", "My bird"];
const action = ["ate", "peed", "crushed", "broke"];
const what = ["my homework", "my phone", "the car"];
const when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];
const randomWho = Math.floor(Math.random() * who.length);
const randomAction = Math.floor(Math.random() * action.length);
const randomWhat = Math.floor(Math.random() * what.length);
const randomWhen = Math.floor(Math.random() * when.length);
const excuse =
  who[randomWho] +
  " " +
  action[randomAction] +
  " " +
  what[randomWhat] +
  " " +
  when[randomWhen];
console.log(excuse);
document.getElementById("excuse").innerHTML = excuse;
