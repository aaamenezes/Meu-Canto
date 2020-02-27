// Mudar 'abas' do formulário no lado direito do site

    // Definir variáveis
let enviarMensagem, agendarVisita, fazerProposta
let mensagem, visita, proposta

    // Colocar cada aba em uma variável
enviarMensagem = document.getElementById('enviarMensagem')
agendarVisita = document.getElementById('agendarVisita')
fazerProposta = document.getElementById('fazerProposta')

mensagem = document.getElementById('mensagem')
visita = document.getElementById('visita')
proposta = document.getElementById('proposta')

    // Bloquear direcionamento dos links
document.getElementById("enviar").addEventListener("click", function(event){
    event.preventDefault()
});

document.getElementById("agendar").addEventListener("click", function(event){
    event.preventDefault()
});

document.getElementById("fazer").addEventListener("click", function(event){
    event.preventDefault()
});

    // Remover e adicionar a borda as respectivas abas, e também ocultar e exibir o conteúdo respectivo de cada aba
enviarMensagem.addEventListener("click", function() {
    
    enviarMensagem.classList.add('selecionada')
    mensagem.style.display = 'block'

    agendarVisita.classList.remove('selecionada')
    visita.style.display = 'none'

    fazerProposta.classList.remove('selecionada')
    proposta.style.display = 'none'
})

agendarVisita.addEventListener("click", function() {
    
    enviarMensagem.classList.remove('selecionada')
    mensagem.style.display = 'none'

    agendarVisita.classList.add('selecionada')
    visita.style.display = 'block'

    fazerProposta.classList.remove('selecionada')
    proposta.style.display = 'none'
})

fazerProposta.addEventListener("click", function() {
    
    enviarMensagem.classList.remove('selecionada')
    mensagem.style.display = 'none'

    agendarVisita.classList.remove('selecionada')
    visita.style.display = 'none'

    fazerProposta.classList.add('selecionada')
    proposta.style.display = 'block'
})

// Cadastrar horários de visitas

    // Hora de fim = hora de início + 2 horas


function horaFim2h() {

    let horaInicio = document.getElementById('horaInicio')
    let horaFim = document.getElementById('horaFim')
    
    let minutoInicio = document.getElementById('minutoInicio')
    let minutoFim = document.getElementById('minutoFim')

    horaFim.value = parseInt(horaInicio.value) + 2
    minutoFim.value = minutoInicio.value
}

function cadastraVisita() {

    let dom = document.getElementById('dom')
    let seg = document.getElementById('seg')
    let ter = document.getElementById('ter')
    let qua = document.getElementById('qua')
    let qui = document.getElementById('qui')
    let sex = document.getElementById('sex')
    let sab = document.getElementById('sab')
    let dia = ""
    
    // exibir dias da semana marcados

    if(dom.checked) dia += dom.id + "/"
    if(seg.checked) dia += seg.id + "/"
    if(ter.checked) dia += ter.id + "/"
    if(qua.checked) dia += qua.id + "/"
    if(qui.checked) dia += qui.id + "/"
    if(sex.checked) dia += sex.id + "/"
    if(sab.checked) dia += sab.id + "/"

    // exibir horário informado

    alert("Cadastros: será nos dias " + dia + ", das " + horaInicio.value + ":" + minutoInicio.value + " às " + horaFim.value + ":" + minutoFim.value)

} 