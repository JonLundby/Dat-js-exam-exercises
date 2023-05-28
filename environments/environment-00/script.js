"use strict";

window.addEventListener("load", startApp);

function startApp() {
  hideText();
  document.querySelector("#btn-knap").addEventListener("click", clicked);
}

function clicked() {
  console.log("Det virker!");
  document.querySelector("#result_failure").classList.add("hide");
  document.querySelector("#result_success").classList.add("show");
}

function hideText() {
  document.querySelector("#result_failure").classList.add("hide");
  document.querySelector("#result_success").classList.add("hide");
}
