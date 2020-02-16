// Exibir/ocultar div com filtros extras

function ocultarExibir(elemento) {
    let display = document.getElementById(elemento).style.display;
    if (display == "flex") {
        document.getElementById(elemento).style.display = 'none'
    } else {
        document.getElementById(elemento).style.display = 'flex'
    }
}

function ocultarExibirMapa() {
    let display = document.getElementById('mapa').style.display;
    if (display == "none") {

        document.getElementById('mapa').style.display = 'block'

        document.getElementsByClassName('resultados')[0].style.width = "50%"
        document.getElementsByClassName('mapa')[0].style.width = "30%"

    } else {

        document.getElementById('mapa').style.display = 'none'

        document.getElementsByClassName('resultados')[0].style.width = "72%"
        document.getElementsByClassName('mapa')[0].style.width = "8%"

    }
}

// Abrir/fechar menu lateral

document.querySelector('.abrir-menu').addEventListener('click', e => {
    document.querySelector('.menu').classList.add('aberto')
})

document.querySelector('.fechar-menu').addEventListener('click', e => {
    document.querySelector('.menu').classList.remove('aberto')
})

document.querySelector('.backdrop').addEventListener('click', e => {
    document.querySelector('.menu').classList.remove('aberto')
})

// Grade/lista: resultados de pesquisa

function gradeOuLista() {

    let miniatura = document.querySelectorAll('.miniatura-row')
    
    if (document.getElementById('gradeOuLista').classList.contains('carrossel-column')) {

        document.getElementById('gradeOuLista').classList.add('carrossel-row')
        document.getElementById('gradeOuLista').classList.remove('carrossel-column')

        for (i=0 ; i<miniatura.length ; i++) {
            miniatura[i].classList.remove('miniatura-row')
            miniatura[i].classList.add('miniatura-column')
        }
        
    } else {

        document.getElementById('gradeOuLista').classList.add('carrossel-column')
        document.getElementById('gradeOuLista').classList.remove('carrossel-row')

        miniatura = document.querySelectorAll('.miniatura-column')

        for (i=0 ; i<miniatura.length ; i++) {
            miniatura[i].classList.remove('miniatura-column')
            miniatura[i].classList.add('miniatura-row')
        }
    }
}

// Caixa de select oculta outros campos

function selectMudaInput() {

    let select = document.getElementById('tipoDeImovel').value

    let input = []
    for (let i = 0; i < document.querySelectorAll('.podeSumir').length; i++) {
        input.push(document.querySelectorAll('.podeSumir')[i])
    }

    if (select == "casa") {
        for (let i = 0; i < input.length; i++) {
            input[i].style.display = "none"
        }
    } else {
        for (let i = 0; i < input.length; i++) {
            input[i].style.display = "flex"
        }
    }

}

// Colorir botão de radio sim ou nao dos formularios

// function colorirRadio() {
            
//     let sim = document.getElementById('sim')
//     let nao = document.getElementById('nao')
//     let labelSim = document.getElementById('labelSim')
//     let labelNao = document.getElementById('labelNao')
    
    
//         if (sim.checked == true && nao.checked == false) {
            
//             labelSim.style.color = "#fff"                
//             labelSim.style.backgroundColor = "#00008b"

//             labelNao.style.color = "#00008b"                
//             labelNao.style.backgroundColor = "#fff"

//         } else if (sim.checked == false && nao.checked == true) {
            
//             labelSim.style.color = "#00008b"                
//             labelSim.style.backgroundColor = "#fff"

//             labelNao.style.color = "#fff"                
//             labelNao.style.backgroundColor = "#00008b"

//         }
//     }