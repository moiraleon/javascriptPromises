const option1 = true
const option2 = false

function watchTutorialCallback(callback, errorCallback){
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

watchTutorialCallback((message) =>{
    console.log('Success: ' + message)
},(error) =>{
    console.log(error.name + ' ' + error.message)
}
)