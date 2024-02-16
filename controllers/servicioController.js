const Servicio = require('../models/Servicio');

module.exports = {
  listarServicios: async (req, res) => {
    try {
      const servicios = await Servicio.findAll();
      res.status(200).json(servicios);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al obtener lista de servicios' });
    }
  }
};