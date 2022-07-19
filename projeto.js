function clicarBotao () {
    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let celular = document.getElementById('celular').value
    let cidade = document.getElementById('cidade').value
    let rua = document.getElementById('rua').value
    let numero = document.getElementById('numero').value

    localStorage.setItem('cadastro', JSON.stringify({
        'nome': nome,
        'email': email,
        'celular': celular,
        'cidade': cidade,
        'rua': rua,
        'numero': numero
    }))
}

let botaocadastro = document.getElementById('botaocadastro')
botaocadastro.addEventListener('click', clicarBotao)