$(document).ready(function(){
    $(document).on('click', 'li', function(){
        if($(this).css('text-decoration').includes('line-through')) {
            $(this).css('text-decoration', 'none');
        } else {
            $(this).css('text-decoration', 'line-through');
        }
    });
    $('form').on('submit', function(e) {
        e.preventDefault();
        const tarefa = $('#Tarefa').val();
        const novoItemLista = $('<li></li>').text(tarefa);
        $('ul').append(novoItemLista);
    });
});