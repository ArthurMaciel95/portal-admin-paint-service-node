const User = require('../../models/Client/client');

module.exports = async (req, res) => {
  try {
    const emailAlreadyExist = await User.findOne({ email: req.body.email });

    if (emailAlreadyExist) {
      res.json({
        status: false,
        message: 'Email já existe.',
      });
    }

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
