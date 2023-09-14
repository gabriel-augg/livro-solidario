const telaPrincipal = document.getElementById('telaPrincipal')
const telaSecundaria = document.getElementById('telaSecundaria')
const sessionStorageKey = 'livro'

function apagarLivro(data){
    let values = JSON.parse(sessionStorage.getItem(sessionStorageKey) || "[]")
    values.splice(data, 1)
    sessionStorage.setItem(sessionStorageKey, JSON.stringify(values))
    mostrarValores()
    mensagemVazio()
}



function mensagemVazio(){
    let values = JSON.parse(sessionStorage.getItem(sessionStorageKey) || "[]")
    const vazio = document.querySelector('.vazio')
    if(values.length === 0){
        vazio.style.display = 'flex'
    } else {
        vazio.style.display = 'none'
    }
}

function abrirModal(){
    const modal = document.getElementById('janela-modal')
    const body = document.getElementById('telaPrincipal')
    modal.classList.remove('fechar')
    modal.classList.add('abrir')
    body.classList.remove('ativarBarra')
    body.classList.add('desativarBarra')
}


function fecharModal(){
    const modal = document.getElementById('janela-modal')
    const body = document.getElementById('telaPrincipal')
    modal.classList.remove('abrir')
    modal.classList.add('fechar')
    body.classList.remove('desativarBarra')
    body.classList.add('ativarBarra')
}

function doacoes(){
    window.location.href = './livros.html'
    fecharModal()
}

function limparCampos(){
    const campos = document.querySelectorAll('.campo-input')
    campos.forEach(u => {
        u.value = ""
    })
}

function editarValores(data){
    document.getElementById(`btnEditar${data}`).style.display = 'none'
    document.getElementById(`btnSalvar${data}`).style.display = 'inline'
    habilitarInputs(data)
}

function salvarValores(data){
    document.getElementById(`btnEditar${data}`).style.display = 'inline'
    document.getElementById(`btnSalvar${data}`).style.display = 'none'
    desabilitarInputs(data)
    let values = JSON.parse(sessionStorage.getItem(sessionStorageKey) || "[]")

    values[data].nome = document.querySelector(`.nome${data}`).value
    values[data].sobrenome = document.querySelector(`.sobrenome${data}`).value
    values[data].email = document.querySelector(`.email${data}`).value
    values[data].telefone = document.querySelector(`.telefone${data}`).value
    values[data].cep = document.querySelector(`.cep${data}`).value
    values[data].rua = document.querySelector(`.rua${data}`).value
    values[data].cidade = document.querySelector(`.cidade${data}`).value
    values[data].estado = document.querySelector(`.estado${data}`).value
    values[data].nomeDoLivro = document.querySelector(`.nomeDoLivro${data}`).value
    values[data].autor = document.querySelector(`.autor${data}`).value
    values[data].genero = document.querySelector(`.genero${data}`).value
    values[data].condicao = document.querySelector(`.condicao${data}`).value

    sessionStorage.setItem(sessionStorageKey, JSON.stringify(values))
    

}

function habilitarInputs (data){
    const campos = document.querySelectorAll(`.habilitar${data}`)
    campos.forEach(u => {
        u.disabled = false
    })
}

function desabilitarInputs (data){
    const campos = document.querySelectorAll(`.habilitar${data}`)
    campos.forEach(u => {
        u.disabled = true
    })
}


function mostrarValores(){
    let values = JSON.parse(sessionStorage.getItem(sessionStorageKey) || "[]")
    const lista = document.getElementById("lista")
    lista.innerHTML =  ''
    for(let i = 0; i < values.length; i++){
        lista.innerHTML += `<li class="item-exibir">
        <div class="campos-exibir">
            <div class="campos-cadastrar">
                <input type="text" disabled value="${values[i]['nome']}" class="campo-input-exibir habilitar${i} nome${i}" id="nome-exibir-exibir">
                <input type="text" disabled value="${values[i]['sobrenome']}" class="campo-input-exibir habilitar${i} sobrenome${i}" id="sobrenome-exibir">
                <input type="email" disabled value="${values[i]['email']}" class="campo-input-exibir habilitar${i} email${i}" autocomplete="email" id="email-exibir">
                <input type="tel" disabled value="${values[i]['telefone']}" class="campo-input-exibir habilitar${i} telefone${i}" id="telefone-exibir">
            </div>

            <div class="campos-cadastrar">
                <input type="number" disabled value="${values[i]['cep']}" class="campo-input-exibir habilitar${i} cep${i}" id="cep-exibir">
                <input type="text" disabled value="${values[i]['rua']}" class="campo-input-exibir habilitar${i} rua${i}" id="rua-exibir">
                <input type="text" disabled value="${values[i]['cidade']}" class="campo-input-exibir habilitar${i} cidade${i}" id="cidade-exibir">
                <input type="text" disabled value="${values[i]['uf']}" class="campo-input-exibir habilitar${i} estado${i}" id="uf-exibir">
            </div>

            <div class="campos-cadastrar">
                <input type="text" disabled value="${values[i]['nomeDoLivro']}" class="campo-input-exibir habilitar${i} nomeDoLivro${i}" id="nome-livro-exibir">
                <input type="text" disabled value="${values[i]['autor']}" class="campo-input-exibir habilitar${i} autor${i}" id="autor-exibir">
                <input type="text" disabled value="${values[i]['genero']}" class="campo-input-exibir habilitar${i} genero${i}" id="genero-exibir">
                <input type="text" disabled value="${values[i]['condicao']}" class="campo-input-exibir habilitar${i} condicao${i}" id="condicao-exibir">
            </div>

        </div>
        <div class="botao-exibir">
            <button class="btn-exibir" id='btnSalvar${i}'  style="display: none;" onclick='salvarValores(${i})' >Salvar</button>
            <button class="btn-exibir" id='btnEditar${i}'  onclick='editarValores(${i})' >Editar</button>
            <button class="btn-exibir"  onclick='apagarLivro(${i})' >Deletar</button>
        </div>
    </li>`
    
    }
}





class Pessoas {
    constructor(nome, sobrenome, email, telefone, cep, rua, cidade, uf, nomeDoLivro, autor, genero, condicao){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.telefone = telefone;
        this.cep = cep;
        this.rua = rua;
        this.cidade = cidade;
        this.uf = uf;
        this.nomeDoLivro = nomeDoLivro;
        this.autor = autor;
        this.genero = genero;
        this.condicao = condicao;
    }
    
}



document.addEventListener('DOMContentLoaded', () => {


    if(telaPrincipal){

        const nome = document.getElementById('nome')
        const sobrenome = document.getElementById('sobrenome')
        const email = document.getElementById('email')
        const telefone = document.getElementById('telefone')
        const cep = document.getElementById('cep')
        const rua = document.getElementById('rua')
        const cidade = document.getElementById('cidade')
        const uf = document.getElementById('uf')
        const nomeLivro = document.getElementById('nomeLivro')
        const autor = document.getElementById('autor')
        const genero = document.getElementById('genero')
        const condicao = document.getElementById('condicao')
        const btnDoar = document.getElementById('btndoar')
        const linkSobre = document.querySelectorAll('.navbar a[href^="#"]')
        const linkDoacoes = document.getElementById('aDoacoes')




        function getDistanceFromTheTop(element){
            const id = element.getAttribute('href');
            return document.querySelector(id).offsetTop
        }

        function nativeScroll(distanceFromTheTop) {
            window.scroll({ 
                top: distanceFromTheTop,
                behavior: "smooth"
            })
        }

        function scrollToSection(event){
            event.preventDefault()
            const distanceFromTheTop = getDistanceFromTheTop(event.target) + 70
            nativeScroll(distanceFromTheTop)

        }

        linkSobre.forEach((link) => {
            link.addEventListener('click', scrollToSection)
        })

        linkDoacoes.addEventListener('click', scrollToSection)

    
    
        cep.addEventListener('blur', () => {
            fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
            .then((res) => res.json())
            .then(data => {
                if (data.logradouro === undefined || data.localidade === undefined || data.uf === undefined){
                    //nada acontece
                } else {
                    rua.value = data.logradouro
                    cidade.value = data.localidade
                    uf.value = data.uf
                }
            })
        })

        function novoLivro() {
            let values = JSON.parse(sessionStorage.getItem(sessionStorageKey) || "[]")
            const livroNovo = new Pessoas(nome.value, sobrenome.value, email.value, telefone.value, cep.value, rua.value, cidade.value, uf.value, nomeLivro.value, autor.value, genero.value, condicao.value)
            values.push(livroNovo)
            sessionStorage.setItem(sessionStorageKey, JSON.stringify(values))
            limparCampos()
            abrirModal()
        }

        function validacao(){

            const nome = document.getElementById('nome')
            const email = document.getElementById('email')
            const telefone = document.getElementById('telefone')
            const cep = document.getElementById('cep')
            const cidade = document.getElementById('cidade')
            const uf = document.getElementById('uf')
            const nomeLivro = document.getElementById('nomeLivro')
            const condicao = document.getElementById('condicao')
        
            if(!nome.value){
                nome.style.border = '2px solid #C93C55'
                setInterval(() => {
                    nome.style.border = ""
                }, 500)
            } else if(!email.value){
                email.style.border = '2px solid #C93C55'
                setInterval(() => {
                    email.style.border = ""
                }, 500)
            } else if(!telefone.value){
                telefone.style.border = '2px solid #C93C55'
                setInterval(() => {
                    telefone.style.border = ""
                }, 500)
            } else if (!cep.value){
                cep.style.border = '2px solid #C93C55'
                setInterval(() => {
                    cep.style.border = ""
                }, 500)
            } else if (!cidade.value){
                cidade.style.border = '2px solid #C93C55'
                setInterval(() => {
                    cidade.style.border = ""
                }, 500)
            } else if(!uf.value){
                uf.style.border = '2px solid #C93C55'
                setInterval(() => {
                    uf.style.border = ""
                }, 500)
            } else if (!nomeLivro.value){
                nomeLivro.style.border = '2px solid #C93C55'
                setInterval(() => {
                    nomeLivro.style.border = ""
                }, 500)
            } else if(!condicao.value){
                condicao.style.border = '2px solid #C93C55'
                setInterval(() => {
                    condicao.style.border = ""
                }, 500)
            } else {
                novoLivro()
            }
            
        }

        btnDoar.addEventListener('click', () => {
            validacao()
        })

    } else if (telaSecundaria){
      
        mensagemVazio()
        mostrarValores()    
    
    }
})
