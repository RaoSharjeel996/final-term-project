
import { showProductContainer } from "./homeProductCards.js";

// Fetch the JSON file dynamically
fetch("../api/products.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((products) => {
    showProductContainer(products);
  })
  .catch((error) => console.error("Error loading products:", error));

  

// Define a function named `showProductContainer` that takes an array of products as input.
showProductContainer(products);

//todo Don't Forget To LIKE SHARE & SUBSCRIBE TO H&S Mart TECHNCIAL YOUTUBE CHANNEL 👉 https://www.youtube.com/H&S Marttechnical
