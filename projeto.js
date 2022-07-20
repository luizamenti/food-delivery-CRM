// Lista pratos e indexes
listaPratoIndex = [[1, 'Risoto'], [2, 'Lasagna'], [3, 'Pizza']]

//Pratos disponíveis
const risoto = {
    id: 1,
    nomePrato: 'Risoto',
    preco: 40,
    pontosAcumulados: 20
}

const lasagna = {
    id: 2,
    nomePrato: 'Lasagna',
    preco: 50,
    pontosAcumulados: 25
}

const pizza = {
    id: 3,
    nomePrato: 'Pizza',
    preco: 60,
    pontosAcumulados: 30
}

let listaPratos = []
listaPratos.push(risoto, lasagna, pizza)

let campoValor = document.getElementById('mostrar_valor')
let campoPontos = document.getElementById('mostrar_pontos')
let botaoValorPontos = document.getElementById('botao_mostrar_valor')

function mostrarValorEPontos () {
    let indexPratoSelecionado = document.getElementById('pratos').selectedIndex
    for (let i = 0; i < listaPratos.length; i++) {
        if (listaPratos[i].id === indexPratoSelecionado) {
            let valorDoPrato = listaPratos[i].preco
            let pontosDoPrato = listaPratos[i].pontosAcumulados
            campoValor.setAttribute('value', valorDoPrato)
            campoPontos.setAttribute('value', pontosDoPrato)
        }
    }
}

botaoValorPontos.addEventListener('click', mostrarValorEPontos)

function clicarBotao () {
    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let celular = document.getElementById('celular').value
    let bairro = document.getElementById('bairro').value
    let rua = document.getElementById('rua').value
    let numero = document.getElementById('numero').value
    let pratoSelecionado = document.getElementById('pratos').selectedIndex
    let valorPratoEscolhido = campoValor.getAttribute('value')
    let pontosPratoEscolhido = campoPontos.getAttribute('value')

    localStorage.setItem('cadastro', JSON.stringify({
        'nome': nome,
        'email': email,
        'celular': celular,
        'bairro': bairro,
        'rua': rua,
        'numero': numero,
        'prato': pratoSelecionado,
        'valor': valorPratoEscolhido,
        'pontos': pontosPratoEscolhido
    }))
}

let botaocadastro = document.getElementById('botaocadastro')
botaocadastro.addEventListener('click', clicarBotao)