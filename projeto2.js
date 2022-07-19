// Resgatar JSON 'cadastro' e transformar em objeto 'infosSalvas'
let infosCadastro = JSON.parse(localStorage.getItem('cadastro'))

// Designar infos do cadastro aos campos desabilitados
let nome2 = document.getElementById('nome2')
nome2.setAttribute('value', infosCadastro.nome)

let email2 = document.getElementById('email2')
email2.setAttribute('value', infosCadastro.email)

let celular2 = document.getElementById('celular2')
celular2.setAttribute('value', infosCadastro.celular)

let cidade2 = document.getElementById('cidade2')
cidade2.setAttribute('value', infosCadastro.cidade)

let rua2 = document.getElementById('rua2')
rua2.setAttribute('value', infosCadastro.rua)

let numero2 = document.getElementById('numero2')
numero2.setAttribute('value', infosCadastro.numero)
