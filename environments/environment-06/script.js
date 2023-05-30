"use strict";

window.addEventListener("load", startApp);

let itemsList = [];

let basket = [];

let itemsCount = 0;
let itemsPrice = 0;
let itemsWeight = 0;

async function startApp() {
  itemsList = await getItems();

  console.log(itemsList);

  itemsList.forEach(displayItems);
}

async function getItems() {
  const response = await fetch(`products.json`);
  const data = await response.json();

  return data;
}

function displayItems(item) {
  const html = /*html*/ `
        <article>
            <h3>NAME: ${item.name}</h3>
            <p>vægt: ${item.weight}</p>
            <p>pris: ${item.price},-</p>
            <button>Læg i kurv</button>
        </article>
    `;

  document.querySelector("#products").insertAdjacentHTML("beforeend", html);
  document.querySelector("article:last-child button").addEventListener("click", addToBasket);
  
  function addToBasket() {
      basket.push(item);
      
      itemsCount++;
      document.querySelector("#total-in-basket").textContent = Number(itemsCount);
      
      itemsPrice += item.price;
      document.querySelector("#total-products").textContent = Number(itemsPrice);
      
      itemsWeight += item.weight;
      document.querySelector("#total-weight").textContent = Number(itemsWeight);

      const htmlItem = /*html*/ `
                <tr>
                    <td>
                <button class="remove">-</button>
                  ANTAL
                <button class="add">+</button>
              </td>
              <td>${item.name}</td>
              <td>PRIS PR STK ${item.price},-</td>
              <td>PRIS I ALT${itemsPrice},-</td>
            </tr>
      `;

      document.querySelector("#basket tbody").insertAdjacentHTML("beforeend", htmlItem);
  }
}
