const option1 = true
const option2 = false

function sampleCallback(callback, errorCallback){
    if(option1){
        errorCallback({
            name: 'option1',
            message: 'Chocolate is best'
        })
    }else if (option2){
        errorCallback({
            name: 'option2',
            message: 'Strawberry is best'
        })
    }else{
        callback('Vanilla is best')
    }
}

sampleCallback((message) =>{
    console.log('Success: ' + message)
},(error) =>{
    console.log(error.name + ' ' + error.message)
}
)

function samplePromise(callback, errorCallback){
    if(option1){
        errorCallback({
            name: 'option1',
            message: 'Chocolate is best'
        })
    }else if (option2){
        errorCallback({
            name: 'option2',
            message: 'Strawberry is best'
        })
    }else{
        callback('Vanilla is best')
    }
}