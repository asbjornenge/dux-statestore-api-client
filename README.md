# dux-statestore-api-client

StateStore API client for [Dux](https://github.com/asbjornenge/dux).

## Install

    npm install dux-statestore-api-client

## Use
    this.host     = options['statestore-host']
    this.port     = options['statestore-port']

    var client = require('dux-statestore-api-client')({
        'statestore-host' : 'dux-statestore.dux.test',
        'statestore-port' : 8000
    })
    client.getState('/containers', function(err, containers) {
        console.log(err, container)
    })

## Changelog

### 1.0.0

* Initial release :tada:

enjoy
