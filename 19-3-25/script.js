let container = document.getElementById("container");
let url = "https://thoughtful-simple-yard.glitch.me/products";

let loader = document.getElementById("loader");
let title = document.getElementById("title");
let description = document.getElementById("description");
let category = document.getElementById("category");
let price = document.getElementById("price");
let rating = document.getElementById("rating");
let btn = document.getElementById("btn");
let imageUrlInput = document.getElementById("imageURL");
let idInput = document.getElementById("id");

let inputs = document.querySelectorAll("input");
inputs.forEach(input => {
    input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {  
            event.preventDefault();  
            btn.click();  
        }
    });
});

btn.addEventListener("click", async function () {
    if (title.value === "" || description.value === "" || category.value === "" || price.value === "" || rating.value === "" || imageUrlInput.value === "") {
        alert("Please enter all data properly.");
    } else {
        let method = idInput.value !== "" ? "PUT" : "POST";
        let mainUrl = method === "PUT" ? `${url}/${idInput.value}` : url;

        try {
            let response = await fetch(mainUrl, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    "title": title.value,
                    "price": price.value,
                    "description": description.value,
                    "rating": rating.value,
                    "category": category.value,
                    "image": imageUrlInput.value
                })
            });

            if (response.ok) {
                getData();
                alert(method === "PUT" ? "Data Updated" : "Data Added");
                title.value = "";
                price.value = "";
                description.value = "";
                rating.value = "";
                category.value = "";
                idInput.value = "";
                imageUrlInput.value = "";
            }
        } catch (err) {
            console.error(err);
        }
    }
});

async function getData() {
    try {
        let response = await fetch(url);
        if (response.ok) {
            let data = await response.json();
            displayData(data);
        }
    } catch (err) {
        console.error(err);
    }
}

function displayData(products) {
    container.innerHTML = "";
    products.forEach(obj => {
        let item = document.createElement("div");
        item.innerHTML = `
            <p class="title">${obj.title}</p>
            <img src='${obj.image}' class='image'>
            <p class="description">${obj.description}</p>
            <p class="price">${obj.price}</p>
            <p class="rating">${obj.rating}</p>
            <button onclick="deleteData('${obj.id}')">Delete</button>
            <button onclick="updateData('${obj.id}')">Update</button>
        `;
        container.appendChild(item);
    });
}

async function updateData(id) {
    try {
        let response = await fetch(`${url}/${id}`);
        if (response.ok) {
            let obj = await response.json();

            title.value = obj.title;
            price.value = obj.price;
            description.value = obj.description;
            rating.value = obj.rating;
            category.value = obj.category;
            idInput.value = obj.id;
            imageUrlInput.value = obj.image;

            window.scroll({ top: 0, behavior: "smooth" });
        }
    } catch (err) {
        console.error(err);
    }
}

async function deleteData(id) {
    try {
        let response = await fetch(`${url}/${id}`, { method: "DELETE" });
        if (response.ok) {
            getData();
            alert("Data Deleted");
        }
    } catch (err) {
        console.error(err);
    }
}

getData();

