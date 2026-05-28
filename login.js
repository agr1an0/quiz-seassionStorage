const nomeInput = document.querySelector('#nome')
const senhaInput = document.querySelector('#senha')
const botao = document.querySelector('#botao')
let containerSave = document.querySelector('#criarConta')

botao.addEventListener('mousedown', confirmar)

document.addEventListener('keyup', function teclado(e) {
    if (e.key == 'Enter') {
        if (nomeInput.value !== '' || senhaInput.value !== '') {
            confirmar()
        }
    }
})
function confirmar() {
    let nome = nomeInput.value
    let senha = senhaInput.value
    if (nome == 'a' && senha == 'a') {
    window.location.href = 'home.html'
    } else if (nome == 'a' && senha !== 'a') {
        window.location.href = 'error404.html'
        } else if(nome !== 'a') {
            containerSave.style.display = 'block'
            }
}