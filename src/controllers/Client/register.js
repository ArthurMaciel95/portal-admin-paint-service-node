module.exports = (req, res) => {
    try {
        res.json({
            status: true,
            message: "Register",
        });
    } catch (erro) {
        console.error(erro);
    }
};
