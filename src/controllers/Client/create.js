const User = require('../../models/Client');

module.exports = async (req, res) => {
  try {
    const user = await User.client.create(req.body);
    res.json({
      status: true,
      message: 'usuário criando com sucesso!',
    });
  } catch (erro) {
    console.error(erro);
  }
};
