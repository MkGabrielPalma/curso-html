const body = document.body
function clicar() {
    const h1 = document.createElement("h1")
    const img = document.createElement("img")
    body.innerHTML = ""
    img.srcset = "giving-a-rose-163.jpg"
    h1.textContent = "Te amo flor <3"
    body.appendChild(h1)
    body.appendChild(img)
}