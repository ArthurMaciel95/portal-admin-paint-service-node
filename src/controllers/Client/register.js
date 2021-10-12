const User = require('../../models/Client/client');

module.exports = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json({
      data: user,
      status: true,
      message: 'usuário criando com sucesso!',
    });
  } catch (erro) {
    console.error(erro);
  }
};
