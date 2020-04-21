// Comando para establecer la conexión

var socket = io();

var label = $('#lblNuevoTicket');

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

//on 'estadoActual'
socket.on('estadoActual', function(resp) {
    console.log(resp);
    label.text(resp.actual);
})

$('button').on('click', function() {

    socket.emit('siguienteTicket', null, function(siguienteTicket, callback) {
        label.text(siguienteTicket);
    });
    //console.log('click');

});