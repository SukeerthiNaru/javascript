let container = document.createElement("div");
container.className = "container"
function getData(){
    fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {displayData(data)})
    .catch(err => console.error(err))
}

function displayData(data){
    for (let obj of data){
        let item = document.createElement("div");
        item.className = "item"
        item.innerHTML = `<img class= "image" src = "${obj.image}"> 
                          <p class = "title" ><b>${obj.title}</b> - <span>${obj.price}</span></p>
                          <p class = "category" >${obj.category}</p>
                          <p class = "rating" > <b>${obj.rating.rate}⭐</b> </p>`
        container.appendChild(item)
    }
    document.body.appendChild(container)
}
getData();