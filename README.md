# dux-statestore-api-client

StateStore API client for [Dux](https://github.com/asbjornenge/dux).

## Install

    npm install dux-statestore-api-client

## Use

    var client = require('dux-statestore-api-client')({
        host : 'dux-statestore.dux.test',
        port : 8000
    })
    client.on('up', client.getState.bind(client, '/containers', function(err, containers) {
        console.log(err, containers)
    }))
    client.listen()

## Changelog

### 2.0.0

* De-agrumentified the options

### 1.0.0

* Initial release :tada:

enjoy
