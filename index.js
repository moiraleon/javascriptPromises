let p = new Promise((resolve, reject)=>{
    let a = 1 + 1
    if (a == 2){
        resolve('Success')
    } else{
        reject('Failed')
    }
})

p.then((message) => {
    console.log('In the then clause: '+message)
}).catch((message) => {
    console.log('In the catch clause: '+message)
})