var assign  = Object.assign || require('object.assign')
var request = require('request')
var retry   = require('retry-connection') 
var EE      = require('events').EventEmitter

var StatestoreAPI = function(options) {
    this.ready    = false
    this.host     = options.host
    this.port     = options.port
    this.interval = options.interval || 5000
    this.timeout  = options.timeout  || 500
}
StatestoreAPI.prototype = assign({

    listen : function() {
        this.connection = retry({ 
            host     : this.host, 
            port     : this.port,
            interval : this.interval,
            timeout  : this.timeout
        })
        this.connection.on('ready', this.handleReady.bind(this))
        this.connection.on('issue', this.handleIssue.bind(this))
        this.connection.connect()
    },

    handleReady : function() {
        if (this.ready) return
        this.ready  = true
        this.emit('up')
    },

    handleIssue : function(issue) {
        console.log(issue.message)
        if (!this.ready) return
        this.ready  = false
        this.emit('down')
    },

    getState : function(state, callback) {
        request(this.getURI()+state, function(error, response, body) {
            if (error) { callback(error); return  }
            if (response.statusCode != 200) { callback(response); return  }
            callback(null, JSON.parse(body))
        })
    },

    getURI : function() {
        return 'http://'+this.host+':'+this.port
    },

},EE.prototype)

module.exports = function(options) { return new StatestoreAPI(options)  }
