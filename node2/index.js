var express = require('express');
var app = express();

app.get('/api', (req, res) => {
    console.log('in the /api')
res.json({message: 'Hello from the Server!'});

});

app.listen(8085, ()=>{
    console.log('API listening on port 8085');
});/**
 * Created by venkateshkoka on 3/10/18.
 */
