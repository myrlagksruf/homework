const express = require('express');
const app = express();
const fs = require('fs/promises');
app.get('/', async (req, res) =>{
    try{
        let file = await fs.readFile('index.html', {encoding:'utf-8'});
        res.end(file);
    } catch(err){
        console.error(err);
    }
    
})
app.get('/src/*', async (req, res) => {
    
    try{
        console.log(decodeURI(req.path))
        let file = await fs.readFile(`.${decodeURI(req.path)}`);
        res.end(file);
    } catch(err){
        console.error(err);
    }
    
})
app.listen(80);