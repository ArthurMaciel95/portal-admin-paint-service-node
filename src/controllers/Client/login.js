module.exports = (req, res) => {
    try {
        res.json({
            status: true,
            message : "Login"
        })
    } catch (erro) {
        console.error(erro)
    }
};
