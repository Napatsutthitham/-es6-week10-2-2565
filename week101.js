//declarative function
function hello(msg,name,age){
    //console.log(`$ {msg} $ {name} $ {age}`)
    return  {msg,name,age} //object
} 

const resuit = hello('Hello World!','Mark Zuckberg',25)//called function
console.log (`${resuit.msg}${resuit.name}${resuit.age}`)