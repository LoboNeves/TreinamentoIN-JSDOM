const lista = document.getElementById("lista");

function printnome() {
    const nome = document.createElement('li');
    nome.innerText = document.getElementById("Mytext").value;
    nome.contentEditable = true;
    lista.appendChild(nome);
    document.getElementById("Mytext").value = ''
}

lista.addEventListener('click', function(e) {
    this.removeChild(e.target);
})
