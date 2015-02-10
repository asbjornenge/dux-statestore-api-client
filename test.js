var client = require('./index')({
        host : 'dux-statestore.dux.test',
        port : 8000
})
client.on('up', client.getState.bind(client, '/containers', function(err, containers) {
    console.log(err, containers)
}))
client.listen()
