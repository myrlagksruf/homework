const express = require('express');
const app = express();
const fs = require('fs/promises');
const notDir = ['.git', 'node_modules', 'src', 'views'];
const _callObj = {
    first:"location.href='about:blank';"
}
const _options = {
    contextmenu:false,
    keydown : {
        F12 : true,
        KeyU : true,
        KeyS : true,
        KeyI : true
    }
}
const devScript = `<script src="dev.js" callObj=${JSON.stringify(_callObj)} options=${JSON.stringify(_callObj)}></script>`;
const resizeMain = `<script src="resizeMain.js"></script>`;
const resizeIframe = `<style>*{box-sizing:border-box;}body,html{margin:0;overflow:hidden;}</style><script src="resizeIframe.js"></script>`;
app.set('view engine', 'ejs');
app.get('/', async (req, res) =>{
    try{
        let dir = await fs.opendir('./');
        let dirObj = {
            dir: []
        }
        for await (const dirent of dir){
            if(notDir.some(v => v === dirent.name) || !dirent.isDirectory()) continue;
            dirObj.dir.push(dirent.name);
        }
        res.render('index', dirObj);
    } catch(err){
        console.error(err);
    }
    
});
app.get('/*.js', async (req, res) => {
    try{
        res.setHeader('Content-Type', 'application/javascript');
        let path = req.path.split('/');
        path = path[path.length - 1];
        let file = await fs.readFile(`./src/${decodeURI(path)}`);        
        res.end(file);
    } catch(err){
        console.error(err);
    }
});
app.get(`/*.html`, async (req, res) => {
    try{
        let path = req.path.split('/');
        path = path[path.length - 1];
        req.headers['sec-fetch-dest'];
        if(path !== 'index.html' && req.headers['sec-fetch-dest'] !== 'iframe'){
            res.render('error');
            return false;
        }
        res.setHeader('Content-Type', 'text/html');
        let file = await fs.readFile(`./${decodeURI(req.path)}`, { encoding:'utf-8' });
        if(path === 'index.html') {
            //file = file.replace('</head>', `${resizeMain}</head>`);
            file = file.replace('</head>', `${devScript}${resizeMain}</head>`);
            //console.log(file.match(/<iframe[^]+?src="([^]+?)"[^]+?<\/iframe>/));
            file = file.replace(/<iframe[^]+?src=".?\/?([^]+?).html"[^]+?<\/iframe>/gi, '<iframe src="$1.html" id="kim$1"></iframe>');
        } else{
            let title = `kim${path.split('.')[0]}`
            if(file.match(/<title>((.|\n)*?)<\/title>/)) file = file.replace(/<title>((.|\n)*?)<\/title>/, `<title>${title}</title>${resizeIframe}`);
            else file = file.replace('</head>', `<title>${title}</title>${resizeIframe}</head>`)
        }
        res.end(file);
    } catch(err){
        console.error(err);
    }
});
app.get('/*.(png|jpg|webp)', async (req, res) => {
    try{
        console.log(decodeURI(req.path));
        let file = await fs.readFile(`./${decodeURI(req.path)}`);        
        res.end(file);
    } catch(err){
        console.error(err);
    }
});
app.listen(80);