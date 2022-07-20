// Resgatar JSON 'cadastro' e transformar em objeto 'infosSalvas'
let infosCadastro = JSON.parse(localStorage.getItem('cadastro'))

// Designar infos do objeto cadastro aos campos de cadastro
let nome2 = document.getElementById('nome2')
nome2.setAttribute('value', infosCadastro.nome)

let email2 = document.getElementById('email2')
email2.setAttribute('value', infosCadastro.email)

let celular2 = document.getElementById('celular2')
celular2.setAttribute('value', infosCadastro.celular)

let bairro2 = document.getElementById('bairro2')
bairro2.setAttribute('value', infosCadastro.bairro)

let rua2 = document.getElementById('rua2')
rua2.setAttribute('value', infosCadastro.rua)

let numero2 = document.getElementById('numero2')
numero2.setAttribute('value', infosCadastro.numero)

objIndexPrato = {
    1: 'Risoto',
    2: 'Lasagna',
    3: 'Pizza'
}

let nomePrato = objIndexPrato[infosCadastro.prato]

// Designar infos do objeto cadastro aos campos de histórico
let tabela = document.getElementById('tabela')

let newRow = tabela.insertRow(-1)
let newCell = newRow.insertCell(-1)
let newText = document.createTextNode(nomePrato)
newCell.appendChild(newText)

let newCell2 = newRow.insertCell(-1)
let newText2 = document.createTextNode(infosCadastro.valor)
newCell2.appendChild(newText2)

let newCell3 = newRow.insertCell(-1)
let newText3 = document.createTextNode(infosCadastro.pontos)
newCell3.appendChild(newText3)