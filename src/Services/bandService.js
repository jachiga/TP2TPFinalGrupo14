import Band from "../Models/Band.js";

class BandService {
  async getAll() {
    return Band.findAll();
  }

  async getById(id) {
    return Band.findByPk(id);
  }

  async create(data) {
    return Band.create(data);
  }

  async update(id, data) {
    const band = await Band.findByPk(id);

    if (!band) {
      const error = new Error("Banda no encontrada");
      error.statusCode = 404;
      throw error;
    }

    return band.update(data);
  }

  async delete(id) {
    const band = await Band.findByPk(id);

    if (!band) {
      const error = new Error("Banda no encontrada");
      error.statusCode = 404;
      throw error;
    }

    await band.destroy();

    return {
      message: "Banda eliminada exitosamente",
    };
  }
}

export default BandService;
