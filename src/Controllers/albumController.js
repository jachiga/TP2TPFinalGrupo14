class AlbumController {
  constructor(service) {
    this.service = service;
  }

  getAll = async (req, res) => {
    try {
      const albums = await this.service.getAll();
      res.status(200).json({ success: true, data: albums });
    } catch (error) {
      this.handleError(res, error);
    }
  };

  getById = async (req, res) => {
    const { id } = req.params;

    try {
      const album = await this.service.getById(id);

      if (!album) {
        return res.status(404).json({ success: false, message: "Album not found" });
      }

      return res.status(200).json({ success: true, data: album });
    } catch (error) {
      return this.handleError(res, error);
    }
  };

  create = async (req, res) => {
    const data = req.body;

    if (!data.title || !data.year || !data.bandId) {
      return res.status(400).json({
        success: false,
        message: "Title, year and bandId are required",
      });
    }

    try {
      const newAlbum = await this.service.create(data);
      return res.status(201).json({ success: true, data: newAlbum });
    } catch (error) {
      return this.handleError(res, error);
    }
  };

  update = async (req, res) => {
    const { id } = req.params;
    const data = req.body;

    if (!data.title || !data.year || !data.bandId) {
      return res.status(400).json({
        success: false,
        message: "Title, year and bandId are required",
      });
    }

    try {
      const updatedAlbum = await this.service.update(id, data);
      return res.status(200).json({ success: true, data: updatedAlbum });
    } catch (error) {
      return this.handleError(res, error);
    }
  };

  delete = async (req, res) => {
    const { id } = req.params;

    try {
      const deletedAlbum = await this.service.delete(id);
      return res.status(200).json({ success: true, message: deletedAlbum.message });
    } catch (error) {
      return this.handleError(res, error);
    }
  };

  handleError = (res, error) => {
    const statusCode = error.statusCode || (error.name === "SequelizeValidationError" ? 400 : 500);

    return res.status(statusCode).json({
      success: false,
      message: error.message || "Internal server error",
    });
  };
}

export default AlbumController;
