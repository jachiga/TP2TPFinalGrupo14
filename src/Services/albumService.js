import Album from "../Models/Album.js";
import Band from "../Models/Band.js";

class AlbumService {
  async getAll() {
    return Album.findAll({
      include: Band,
    });
  }

  async getById(id) {
    return Album.findByPk(id, {
      include: Band,
    });
  }

  async create(data) {
    await this.ensureBandExists(data.bandId);
    return Album.create(data);
  }

  async update(id, data) {
    const album = await Album.findByPk(id);

    if (!album) {
      const error = new Error("Album no encontrado");
      error.statusCode = 404;
      throw error;
    }

    await this.ensureBandExists(data.bandId);
    return album.update(data);
  }

  async delete(id) {
    const album = await Album.findByPk(id);

    if (!album) {
      const error = new Error("Album no encontrado");
      error.statusCode = 404;
      throw error;
    }

    await album.destroy();

    return {
      message: "Album eliminado exitosamente",
    };
  }

  async ensureBandExists(bandId) {
    const band = await Band.findByPk(bandId);

    if (!band) {
      const error = new Error("Banda no encontrada");
      error.statusCode = 404;
      throw error;
    }
  }
}

export default AlbumService;
