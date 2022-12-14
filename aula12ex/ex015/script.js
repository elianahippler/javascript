function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.lenght == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } 
    
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''

        var img = document.createElement('img')

        res.style.textAlign = 'center'
        img.style.borderRadius = '50%'
        img.style.width = '400px'
        img.style.height = '400px'

        if (fsex[0].checked){

            if(idade >= 0 && idade < 3){
                img.setAttribute('src', 'imagens/bebeh.jpg')
                res.innerHTML = `Bebê com ${idade} ano(s).`
                res.appendChild(img)
            } 
            else if (idade >= 3 && idade < 13){
                img.setAttribute('src', 'imagens/criançah.jpg')
                res.innerHTML = `Criança com ${idade} anos.`
                res.appendChild(img)
            } 
            else if (idade >= 13 && idade < 25){
                img.setAttribute('src', 'imagens/jovemh.jpg')
                res.innerHTML = `Jovem com ${idade} anos.`
                res.appendChild(img)
            } 
            else if (idade >= 25 && idade < 60){
                img.setAttribute('src', 'imagens/adultoh.jpg')
                res.innerHTML = `Adulto com ${idade} anos.`
                res.appendChild(img)
            } 
            else {
                img.setAttribute('src', 'imagens/idosoh.jpg')
                res.innerHTML = `Idoso com ${idade} anos.`
                res.appendChild(img)
            }
        } 

        else if (fsex[1].checked){

            if(idade >= 0 && idade < 3){
                img.setAttribute('src', 'imagens/bebem.jpg')
                res.innerHTML = `Bebê com ${idade} ano(s).`
                res.appendChild(img)
            } 
            else if (idade >= 3 && idade < 13){
                img.setAttribute('src', 'imagens/criancam.jpg')
                res.innerHTML = `Criança com ${idade} anos.`
                res.appendChild(img)
            } 
            else if (idade >= 13 && idade < 25){
                img.setAttribute('src', 'imagens/jovemm.jpg')
                res.innerHTML = `Jovem com ${idade} anos.`
                res.appendChild(img)
            } 
            else if (idade >= 25 && idade < 60){
                img.setAttribute('src', 'imagens/adultom.jpg')
                res.innerHTML = `Adulta com ${idade} anos.`
                res.appendChild(img)
            } 
            else {
                img.setAttribute('src', 'imagens/idosom.jpg')
                res.innerHTML = `Idosa com ${idade} anos.`
                res.appendChild(img)
            }
        }
    }
}