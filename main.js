const form = document.getElementById("validacao")
const numero1 = document.getElementById("numero1")
const numero2 = document.getElementById("numero2")

function validaNumero(numero1, numero2) {
    return Number(numero2) > Number(numero1);
}

//Validaçao para ver se o numero 2 e maior ou nao que numero 1
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numeroValido = validaNumero(numero1.value, numero2.value)
    const MensagemSucesso = `${numero2.value} e maior que ${numero1.value}: Logo e valido`
    const MensagemError = `${numero2.value} nao e maior que ${numero1.value}: Logo e invalido`

    if (numeroValido) {
        const containerMensagemSucesso = document.getElementById("message")
        containerMensagemSucesso.innerHTML = MensagemSucesso
        containerMensagemSucesso.style.display = 'block';
    } else {
        const containerMensagemError = document.getElementById("message")
        containerMensagemError.innerHTML = MensagemError
        containerMensagemError.style.display = 'block';
        containerMensagemError.style.backgroundColor = 'red'
    }
})
