function calcular(){
    let txtn = document.getElementById('txtn')
    let n = Number(txtn.value)
    let res = document.getElementById('resultado')

    for (var t = n; n <= 0; t = t * 1){
        res.innerHTML += (t)
    }
}

//não consegui fazer funcionar