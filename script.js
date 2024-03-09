$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },
        submitHandler: function(form) {
            reset
        },
        invalidHandler: function(event, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        },
        messages: {
            nome: 'Por favor insira seu nome completo',
            email: 'Por favor insira seu email',
            telefone: 'Por favor insira seu numero de celular',
            cpf: 'Por favor insira seu CPF',
            endereco: 'Por favor insira seu endereco',
            cep: 'Por favor insira seu CEP'
        }
    })
})

