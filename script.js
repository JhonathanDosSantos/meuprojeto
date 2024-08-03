fetch("https://api.mercadolibre.com/sites/MLB/search?q=notebooks&limit=13").then(Response => Response.json()).then(data => {
    data.results.forEach(produto => {
        const coluna =document.createElement("div")
        coluna.classList = "col-4"
        coluna.innerHTML = `
        <img src="${produto.thumbnail}" alt="${produto.title}">
        <h2>${produto.title}</h2>
        <p>${produto.price}</p>
        `
        const btn = document.createElement("button")
        btn.classList = "btn btn-primary"
        btn.textContent = "comprar"
        btn.addEventListener("click", () => addToCart(produto))
        coluna.append(btn)
        document.querySelector(".row").append(coluna)
    })
})

function addToCart(produto){
    let carrinho = JSON.parse(localStorage.getItem("carrinho"))
    if(carrinho === null) carrinho =[]
    carrinho.push(produto)
    localStorage.setItem("carrinho", JSON.stringify(carrinho))
    alert("produto adicionado")
        }