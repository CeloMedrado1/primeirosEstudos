function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')    
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`
    if (hora > 0 && hora < 12) {
        //BOM DIA
        img.src = 'imgs/manha.jpg'
        document.body.style.background = '#fceaa8'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        img.src = 'imgs/tarde.jpg'
        document.body.style.background = '#b65f2a'
    } else {
        //BOA NOITE
        img.src = 'imgs/noite.jpg'
        document.body.style.background = 'rgba(37,77,126,255)'
    }
}