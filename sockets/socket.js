const { io } = require('../index');

//Mensagem do socket
io.on('connection', client => {
    console.log('Cliente conectado');

    client.on('disconnect', () => {
        console.log('Cliente desconectado.');
    });
    client.on('mensagem', (payload) => {
        console.log('mensagem', payload);
        io.emit('mensagem', { admin: "Nova mensagem" });
    })
});