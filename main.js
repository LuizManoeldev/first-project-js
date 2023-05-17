var cadastrados = [];

function cadastrar(form) {
    console.log(form.email.value);
    cadastrados.push({ email: form.email.value, senha: form.pwrd.value });
    cadastrados.map(listarCadastrados);
}

function listarCadastrados(item) {
    var tbodyRef = document
        .getElementsByTagName("table")[0]
        .getElementsByTagName("tbody")[0];

    var newRow = tbodyRef.insertRow();

    var email = newRow.insertCell();
    var senha = newRow.insertCell(1);

    var emailString = document.createTextNode(item.email);
    var senhaString = document.createTextNode(item.senha);
    email.appendChild(emailString);
    senha.appendChild(senhaString);
    cadastrados = [];
}

function verificarSenha(value) {
    var senhas = []
    var table = document.getElementById("tabela");
    for (var i = 0, row;
        (row = table.rows[i]); i++) {

        if (i > 0) {

            senhas.push(table.rows[i].children[1].textContent);
        }
    }
    console.log(senhas)
    document.getElementById("senhasFracas").textContent = senhas.filter(verificarTamanho)
}

function verificarTamanho(value) {
    if (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/g.test(value)) {
        return false;
    } else {
        return value;
    }
    // return value.length < 4

}

async function fetchAPI() {
    fetch('https://jsonplaceholder.typicode.com/todos/1').then(function(res) {
        return res.json();
    }).then(function(json) {
        document.getElementById("apiJSON").textContent = JSON.stringify(json);
    })
}