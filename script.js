const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {
    event.preventDefault()

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const idade = document.getElementById("idade").value;

    const lista = document.getElementById("lista-alunos");

    if (nome === "") {
        alert("Digite seu nome!");
    }

    if (idade === 18) {
        alert("Aluno menor de idade!");
    }

    const novoAluno = document.createElement("li");

    novoAluno.innerHTML = 
        "Nome: " + nome +
        " | E-mail: " + email +
        " | Idade: " + idade;

    lista.appendChild(novoAluno);

    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("idade").value = "";

    alert("Aluno cadastrado com sucesso!");

});