let user = {
    name: "покупки",
    age: "24.7"
}


let box = document.getElementById("box")

box.innerHTML = `<h1>${user.name}</h1> <p>${user.age}</p>`

let products = [
    {
        title: "трактор",
        price: 500,
        image: "https://www.tradicia-k.ru/images/technic/original/000/011/389/52.jpg"
    },

    {
        title: "помада",
        price: 200,
        image: "https://galatnsk.ru/image/catalog/001/2019.11.16-3455.jpg"
    },

    {
        title: "кровать",
        price: 1000,
        image:"https://www.mebelpl.kg/images/stories/virtuemart/product/tqt7y8oh0antyi28qube1ybaen9ghs5e.jpg"
    },

    

]

let about = document.getElementById("about")
let searchInput = document.getElementById("search")
let btn = document.getElementById("btn")

function showProduct(list) {
    about.innerHTML = list.map((item) => {
        return (
            `  
              <div class="container">
                <div class="card">
                    <img src="${item.image}"/>
                    <div class="info">
                    <h3>${item.title}</h3>
                    <p>${item.price}</p>

                    </div>
                   <div class="btns"><button>Add to cart</button></div>
                </div>
                 </div>
            `
        )
    }).join("")
}

showProduct(products)

function filterproduct() {
    let text = searchInput.value.toLowerCase()

    const filtered = products.filter(item => item.title.toLocaleLowerCase().includes(text))

    showProduct(filtered)
}

btn.onclick = filterproduct