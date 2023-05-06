"use strict";

window.addEventListener("load", startApp);

let userList;
async function startApp() {
  userList = await getUsers();

  console.log(userList);

  
  const result = userList.filter(isAdmin);

  function isAdmin(user) {
    if (user.role === "admin") {
      return user;
    }
  }
  result.forEach(showUser);
}

async function getUsers() {
  const response = await fetch(`users.json`);
  const data = await response.json();

  return data;
}

function showUser(user) {
  const html = /*html*/ `
            <li>${user.name}: ${user.active}</li>
    `;

  document.querySelector("#userlist").insertAdjacentHTML("beforeend", html);

  if (user.role === "admin") {
    document.querySelector("#admin-count").insertAdjacentHTML("beforeend", html);
  }
}
