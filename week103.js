 const user = function  getUser(Fname,age){
    return {Fname,age}
     
}
const {Fname,age} = getUser("Mark",25)
console.log(`${Fname} ${age}`)