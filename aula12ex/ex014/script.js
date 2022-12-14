function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`

    if( hora >= 6 && hora < 12){
        //bom dia
        img.src = "imagens/manha.jpg"
    }
    else if (hora >= 12 && hora < 18){
        //boa tarde
        img.src = "imagens/tarde.jpg"
    }
    else if (hora >= 18 && hora <= 23){
        //boa noite
        img.src = "imagens/noite.jpg"
    }
    else if (hora > 23 || hora < 6){
        //boa madrugada
        img.src = "imagens/madrugada.jfif"
    }
    else{
        //erro
    }
}
