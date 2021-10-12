const User = require('../../models/Client/client');

module.exports = async (req, res) => {
  try {
    const uuid = req.params.uuid;

    const user = await User.findOne({ uuid });

    if (!user) {
      res.json({
        status: false,
        message: 'Usuario não existe.',
      });
    }

    res.json({
      data: user,
      status: true,
      message: 'usuário encontrado!',
    });
  } catch (erro) {
    console.error(erro);
  }
};
