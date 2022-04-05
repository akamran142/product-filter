let products = {
  data: [
    {
      productName: "Buttermilk Pancakes",
      category: "Breakfast",
      price: "15.99",
      image: "item-1.jpeg",
      para: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    },
    {
      productName: "Diner Double",
      category: "Lunch",
      price: "13.99",
      image: "item-2.jpeg",
      para: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    },
    {
      productName: "Godzilla Milkshake",
      category: "Shakes",
      price: "6.99",
      image: "item-3.jpeg",
      para: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    },
    {
      productName: "Country Delight",
      category: "Breakfast",
      price: "20.99",
      image: "item-4.jpeg",
      para: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    },
    {
      productName: "Egg Attack",
      category: "Lunch",
      price: "22.99",
      image: "item-5.jpeg",
      para: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    },
    {
      productName: "Oreo Dream",
      category: "Shakes",
      price: "18.99",
      image: "item-6.jpeg",
      para: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    },
    {
      productName: "Bacon Overflow",
      category: "Breakfast",
      price: "8.99",
      image: "item-7.jpeg",
      para: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    },
    {
      productName: "American Classic",
      category: "Lunch",
      price: "12.99",
      image: "item-8.jpeg",
      para: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    },
    {
      productName: "Steak Dinner",
      category: "Dinner",
      price: "39.99",
      image: "item-10.jpeg",
      para: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    },
    {
      productName: "Quarantine Buddy",
      category: "Shakes",
      price: "16.99",
      image: "item-9.jpeg",
      para: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    },
  ],
};

for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  //price
  let price = document.createElement("h6");
  price.innerText = "$" + i.price;
  container.appendChild(price);
  //paragraph
  let paragraph = document.createElement("p");
  paragraph.innerText = i.para;
  container.appendChild(paragraph);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});

//Initially display all products
window.onload = () => {
  filterProduct("all");
};
