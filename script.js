function verificar (){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade  = ano-Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <10) {
                // Criança
                img.setAttribute('src', 'BEBE M.png' )
            } else if (idade >=10 && idade < 21) {
                //Jovem
                img.setAttribute('src', 'JOVEM M.png' )
            } else if (idade >=21 && idade < 50) {
                // Adulto
                img.setAttribute('src', 'HOMEM.png' )
            } else {
                // Idoso
                img.setAttribute('src', 'SENHOR M.png' )
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade <10) {
                // Criança
                img.setAttribute('src', 'BEBE F.png' )
            } else if (idade >=10 && idade < 21) {
                //Jovem
                img.setAttribute('src', 'JOVEM F.png' )
            } else if (idade >=21 && idade < 50) {
                // Adulto
                img.setAttribute('src', 'MULHER.png' )
            } else {
                // Idoso
                img.setAttribute('src', 'SENHORA F.png' )
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}