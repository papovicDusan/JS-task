function function1(){
    return new Promise((resolve,reject)=>{
        setTimeout(() =>{
            Math.random()<0.5 ? resolve('Success!'):reject('Error!')
        },3000)
        })
    }

    function1()
    .then(data=> {console.log(data)})
    .catch(error=> {console.log(error)})