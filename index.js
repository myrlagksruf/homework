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
const baseCss = `<link rel="stylesheet" href="./base.css"></head>`;
app.set('view engine', 'ejs');
app.get('/', async (req, res) =>{
    await indexPage(req, res);
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
    res.setHeader('Content-Type', 'text/html');
    let file = null;
    try{
        file = await fs.readFile(`./${decodeURI(req.path)}`, { encoding:'utf-8' });
    } catch(err){
        console.log('index.html 파일 없음.');
        await indexPage(req, res, '/index.html', '');
        return false;
    }
    if(req.path.match(/index\.html$/)) {
        file = file.replace('</head>', `${resizeMain}</head>`);
        file = file.replace('</head>', `${devScript}</head>`);
        file = file.replace('</head>', baseCss);
    } else{
        file = file.replace('</head>', `${resizeIframe}</head>`)
    }
    res.end(file);
    
});
app.get('/*.(png|jpg|webp|gif|svg|css)', async (req, res) => {
    try{
        console.log(decodeURI(req.path));
        if(req.path.match(/\.svg$/)) res.setHeader('Content-Type', 'image/svg+xml');
        else if(req.path.match(/\.css$/)) res.setHeader('Content-Type', 'text/css');
        let file = await fs.readFile(`./${decodeURI(req.path)}`);        
        res.end(file);
    } catch(err){
        console.error(err);
        res.end(null);
    }
});

app.get('/*.md', async (req, res) => {
    try{
        let path = req.path.split('/');
        res.download(`./${decodeURI(req.path)}`, decodeURI(path[1]));
    } catch(err){
        console.error(err);
    }
});

async function indexPage(req, res, ori, las){
    let path = req.path.replace(ori, las);
    try{
        console.log(path);
        let dir = await fs.opendir(`.${decodeURI(path)}`);
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
}

app.listen(80);