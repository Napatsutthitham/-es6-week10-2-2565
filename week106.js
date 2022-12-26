function sum(...args){
    let total = 0
    for(const a of args) 
     total = total + a
    
  return total
}

const y = sum (10,20,30,40,50)
console.log(y)
