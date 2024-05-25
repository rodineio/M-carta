var nome = window.prompt('Por Favor, digite o seu nome')
var h1 = window.document.querySelector('h1.h1')

window.alert('É com você mesmo que quero falar, ' + nome + ' vamos lá?')

h1.innerHTML = nome + ', tenho um segredo para te contar!'

var botao = window.document.querySelector('input.btn')

botao.addEventListener('mouseenter', entrar)
botao.addEventListener('click', Apresentar) //addEventListener = fica prestando atenção nos eventos

function entrar(){
    botao.innerText = 'É só clicar que te conto tudo!'
}

var titulo = window.document.querySelector('h1#atitulo')
var paragrafo = window.document.querySelector('p#paragrafo')

function Apresentar(){
 
    window.location.href = 'coracao2.html'

}