const Transaccion = require('../models/Transaccion');

module.exports = {
  completarTransaccion: async (req, res) => {
    try {
      const transaccionId = req.params.transaccionId;
      await Transaccion.completeTransaction(transaccionId);
      res.status(200).json({ message: 'Transacción completada correctamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al completar transacción' });
    }
  }
};