function jogo(numeroGerado, resposta){

    if (numeroGerado > resposta){
        return  resultado = {
            "acertou": false,
            "mensagemErro": 'Tente um número maior'
        }
    }else if (numeroGerado < resposta){
        return  resultado = {
            "acertou": false,
            "mensagemErro": 'Tente um número menor'
        }
    }else if (numeroGerado == resposta){
        return  resultado = {
            "acertou": true,
            "mensagemErro": 'não há'
        }
    }   
}

module.exports =  jogo