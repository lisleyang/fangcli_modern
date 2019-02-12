import {add} from './utils';
import {defaults} from 'lodash'
console.log(defaults({ 'a': 1 }, { 'a': 3, 'b': 2 }));

Object.assign({},{a:1,b:2,c:3})
Promise.resolve().finally();
new Promise((resolve,reject)=>{
    resolve(123)
}).then(res=>console.log(res))
console.log(add(1));
