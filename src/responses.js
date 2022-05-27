module.exports = {    
    $data,
    $error
}

async function $data(data, res) {
    res.status(200).send({
        success: true,
        data
    })
}

async function $error(error, res) {

    if(error.stack)
        console.log(error.stack)
        
    else
        console.log(error)

    res.status(error.code).send({
        success: false,
        error
    })

}