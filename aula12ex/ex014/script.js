function carregar(){
    var msg = window.document.getElementById('msg')
    var msgb = window.document.getElementById('msgb')
    var img = window.document.getElementById('imagem')
    var section = window.document.getElementById('section')
    
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`

    if( hora >= 6 && hora < 12){
        msgb.innerHTML = 'Bom Dia'
        img.src = "imagens/manha.jpg"
        document.body.style.backgroundImage = 'linear-gradient(to bottom, #7879AF, #F7A49E)'
        section.style.background = '#F2BC79'
    }
    else if (hora >= 12 && hora < 18){
        msgb.innerHTML = 'Boa Tarde'
        img.src = "imagens/tarde.jpg"
        document.body.style.backgroundImage = 'linear-gradient(to bottom, #F29441, #AE8489)'
        section.style.background = '#F2BF5E'
    }
    else if (hora >= 18 && hora <= 23){
        msgb.innerHTML = 'Bom Noite'
        img.src = "imagens/noite.jpg"
        document.body.style.backgroundImage = 'linear-gradient(to bottom, #231640, #1B7302)'
        section.style.background = '#26191E'
    }
    else if (hora > 23 || hora < 6){
        msgb.innerHTML = 'Bom Madrugada'
        img.src = "imagens/madrugada.jfif"
        document.body.style.backgroundImage = 'linear-gradient(to bottom, #0D0D0D, #8C7C4D)'
        section.style.background = '#242426'
    }
    else{
        //erro
    }
}
