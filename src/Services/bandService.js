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
      const error = new Error("Band not found");
      error.statusCode = 404;
      throw error;
    }

    return band.update(data);
  }

  async delete(id) {
    const band = await Band.findByPk(id);

    if (!band) {
      const error = new Error("Band not found");
      error.statusCode = 404;
      throw error;
    }

    await band.destroy();

    return {
      message: "Band deleted successfully",
    };
  }
}

export default BandService;
