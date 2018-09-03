interface Context{
    keys : any;
}
interface NodeRequire{
    context:(name:string,isDic:boolean,reg:RegExp)=>Context
}

const testsContext = require.context('./specs', true, /\.spec$/)
testsContext.keys().forEach(testsContext)

