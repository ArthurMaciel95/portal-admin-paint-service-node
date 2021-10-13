const User = require('../../models/Client/client');

module.exports = async (req, res) => {
  try {
    const id = req.params.id;

    const user = await User.findOne({ _id:id });

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
