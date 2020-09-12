userOperation = function (req, res) {
    const command = req.body.command
    switch(command) {
        case 'REGISTER_USER':
            registerUser(req, res)
            break
        default:
            return res
                .status(500)
                .send({
                    status: 'ERROR',
                    message: 'No se ha encontrado la operación'
                })
    }
}

function registerUser(req, res) {
    const user = req.body.transaction
    console.log(user)
    return res
        .status(200)
        .send({
            status: 'SUCCESS',
            message: 'Usuario registrado correctamente'
        })
}

module.exports = userOperation