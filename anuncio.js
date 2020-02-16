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
