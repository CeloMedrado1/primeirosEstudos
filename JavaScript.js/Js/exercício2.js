function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[Erro] Verifique se os dados estão corretos')
    } else {    
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = '' 
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')     
        if (fsex[0].checked) {
            gênero = 'Masculino'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imgs/bebeh.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imgs/jovemh.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imgs/adultoh.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'imgs/idosoh.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Feminino'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imgs/bebem.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imgs/jovemm.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imgs/adultam.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'imgs/idosam.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}