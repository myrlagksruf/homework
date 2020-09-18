const express = require('express');
const app = express();
const fs = require('fs/promises');
let notDir = null;
let _callObj = null;
let _options = null;
let devScript = '';
(async()=>{
    obj = JSON.parse(await fs.readFile('./system.json', { encoding:'utf-8' }));
    notDir = obj.notDir;
    _callObj = obj._callObj;
    _options = obj._options;
    devScript = `<script src="dev.js?src=1" callObj=${JSON.stringify(_callObj)} options=${JSON.stringify(_options)}></script>`;
})();
const resizeMain = `<script src="resizeMain.js?src=1"></script>`;
const resizeIframe = `<style>*{box-sizing:border-box;}body,html{margin:0;overflow:hidden;}</style><script src="resizeIframe.js?src=1"></script>`;
const baseCss = `<link rel="stylesheet" href="./base.css"></head>`;
const skeleton = `{
    window.addEventListener('keydown',async e=>{
        if(e.ctrlKey&&e.code==='KeyS'){
            let a = document.createElement('a');
            a.href = './skeleton.zip';
            a.click();
        }
    });
}`;
app.set('view engine', 'ejs');
app.get('/', async (req, res) =>{
    await indexPage(req, res);
});
app.get('/*.js', async (req, res) => {
    try{
        res.setHeader('Content-Type', 'application/javascript');
        let path = req.path.split('/');
        path = path[path.length - 1];
        let file = null;
        if(req.query.src === '1') file = await fs.readFile(`./src/${decodeURI(path)}`);
        else {
            file = await fs.readFile(`.${decodeURI(req.path)}`, {encoding : 'utf-8'});
            file = [file, skeleton].join('\n');
        }
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

app.get('/*.(md|zip)', async (req, res) => {
    try{
        let path = req.path.split('/');
        res.download(`./${decodeURI(path.join('/'))}`, decodeURI(path[path.length - 1]));
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