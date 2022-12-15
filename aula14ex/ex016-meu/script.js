function contar(){
    var inicio = document.getElementById('inicio') 
    var i = Number(inicio.value)

    var fim = document.getElementById('fim')
    var f = Number(fim.value)

    var passo = document.getElementById('passo')
    var p = Number(passo.value)

    var r = document.getElementById('resultado')

    for(var c = i; c <= f; c += p){
        r.innerHTML += ` ${c},`
    }
}

function limpar(){
    var r = document.getElementById('resultado')
    r.innerHTML = 'Preparando a contagem...'
}