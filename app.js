const http = require('http') // including http library 
const fs = require('fs')
const port = 3000 // port that is going to be listen

const server = http.createServer(function(req, res) { // creating the server

    // activity handling 

    console.log('Request recieved. Sending data....')

    res.writeHead(200, { 'Rcontent-type': 'text/html' }) // setup the header telling it will send an html doc
    fs.readFile('Resources/index.html', function(error, data) { // read the html file

        // check for errors
        if (error) {

            res.writeHead(404) // not able to find the html file
            res.write('Error: file not found')

        } else {

            res.write(data) // send the data

        }

        res.end()

    })

})

server.listen(port, function(error) { // listen to specified port

    // checking for errors

    if (error) {

        console.log('error while listening to port ', error)

    } else {

        console.log('server listening to ', port)

    }

})