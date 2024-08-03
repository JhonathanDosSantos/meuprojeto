function displayCartItems(){
    document.querySelector("tbody").innerHTML =""
    document.querySelector(".col-4").innerHTML =""
    const carrinho = JSON.parse(localStorage.getItem("carrinho"))
    let total = 0
    carrinho.forEach(produto => {
        total += produto.price
const tr = document.createElement("tr")
tr.innerHTML =`
<td>${produto.title}</td>
<td>${produto.price}</td>
<td class="botao"></td>
`
const btnRemover = document.createElement("button")
btnRemover.classList = "btn btn-danger"
btnRemover.textContent = "remover"
btnRemover.addEventListener("click", () => remover(produto.id))
tr.querySelector(".botao").append(btnRemover)
document.querySelector("tbody").append(tr)

    })
    if(total > 0){
    document.querySelector(".col-4").innerHTML = `
    <h2>dados do pedido</h2>
    <p>total: ${total}</p>
    `
    const btnFinalizar = document.createElement("button")
    btnFinalizar.classList = "btn btn-primary"
    btnFinalizar.textContent = "encerrar compra"
    btnFinalizar.addEventListener("click", () => encerrarCompra())
document.querySelector(".col-4").append(btnFinalizar)
    }
}
function encerrarCompra(){
    localStorage.clear()
    alert("pedido finalizado")
    displayCartItems()
}
function remover(id){
    const carrinho = JSON.parse(localStorage.getItem("carrinho"))
    const novoCarrinho = carrinho.filter(produto => {return id !== produto.id})
    localStorage.setItem("carrinho", JSON.stringify(novoCarrinho))
    alert("produto removido")
    displayCartItems()
}
displayCartItems()