import fs from 'fs/promises'
import path from 'path';
import { fileURLToPath } from 'url';

/**
 * @typedef {object} iPeople
 * @prop {string} id
 * @prop {string} pw
 * @prop {string} memo
 */

let __dirname = path.dirname(fileURLToPath(import.meta.url));
let [, , id, pw] = process.argv;
let peoplePath = `${__dirname}/people.json`;

if(!id || !pw){
    throw '아이디 또는 비밀번호를 작성해주세요.'
} else if(!id.match(/^\w+$/) || !pw.match(/^\w+$/)){
    throw '아이디 또는 비밀번호는 숫자 또는 영문자 또는 "_" 로만 써야합니다.'
}

fs.readFile(peoplePath, {encoding:'utf-8'})
.then(v => {
    /** @type {iPeople[]} */
    let json = JSON.parse(v);
    let user = json.find(t => t.id === id);
    if(user) throw '이미 유저 있음.';
    user = {
        id, pw, memo:''
    };
    json.push(user);
    return fs.writeFile(peoplePath, JSON.stringify(json), {encoding:'utf-8'});
})
.then(() => console.log(`"${id}" 유저 등록 완료`))
.catch(err => {
    console.error(err);
});