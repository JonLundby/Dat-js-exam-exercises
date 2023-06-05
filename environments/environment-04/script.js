"use strict";

import { teachers } from "./teachers.js";

window.addEventListener("load", startApp);

function startApp() {
  showTeachers();
  createTeacher("jon", "jon@email.com");
}

function showTeachers() {
  document.querySelector("#teachers-list").innerHTML = "";

  for (const teacher of teachers) {
    const htmlTeacher = /*html*/ `
                        <li>${teacher.name} </br> ${teacher.email}</li>
                        </br>
        `;

    document.querySelector("#teachers-list").insertAdjacentHTML("beforeend", htmlTeacher);
  }
}

function createTeacher(name, email) {
  // const name = name;
  // const email = email;

  const newTeacher = {
    name: name,
    email: email,
  };

  teachers.push(newTeacher);

  showTeachers();
}
