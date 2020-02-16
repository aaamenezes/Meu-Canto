// Mês e ano atual calendário agendar visitas

function mesAnoAtual() {
    let mes = []
    mes[0] = "Janeiro"
    mes[1] = "Fevereiro"
    mes[2] = "Março"
    mes[3] = "Abril"
    mes[4] = "Maio"
    mes[5] = "Junho"
    mes[6] = "Julho"
    mes[7] = "Agosto"
    mes[8] = "Setembro"
    mes[9] = "Outubro"
    mes[10] = "Novembro"
    mes[11] = "Dezembro"

    let ano = new Date().getFullYear()
    
    document.getElementById('mesAnoAtual').innerHTML = mes[new Date().getMonth()] + " de " + ano
}

mesAnoAtual()