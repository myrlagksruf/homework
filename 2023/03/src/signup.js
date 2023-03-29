import fs from 'fs'
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

fs.readFile(peoplePath, {encoding:'utf-8'}, (err, data) => {
    if(err){
        throw err;
    }
    
    // 여기에 코드 작성
});