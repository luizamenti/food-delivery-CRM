// const botaocadastro = document.querySelector("#botaocadastro");

// botaocadastro.addEventListener("click", function(e){

// const nome = document.querySelector("#nome");


// const nomevalue = nome.value;

// console.log(nomevalue)




// })


function clicarBotao () {
    console.log('Oi')
    let nome = document.getElementById('nome').value()
    
    let email = document.getElementById('email')

    email.setAttribute('value', nome)
}

let botaocadastro = document.getElementById('botaocadastro')
console.log('botaocadastro', botaocadastro)
botaocadastro.addEventListener('click', clicarBotao)