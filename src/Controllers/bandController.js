class BandController {
  constructor(service) {
    this.service = service;
  }

  getAll = async (req, res) => {
    try {
      const bands = await this.service.getAll();
      res.status(200).json({ success: true, data: bands });
    } catch (error) {
      this.handleError(res, error);
    }
  };

  getById = async (req, res) => {
    const { id } = req.params;

    try {
      const band = await this.service.getById(id);

      if (!band) {
        return res.status(404).json({ success: false, message: "Band not found" });
      }

      return res.status(200).json({ success: true, data: band });
    } catch (error) {
      return this.handleError(res, error);
    }
  };

  create = async (req, res) => {
    const data = req.body;

    if (!data.name || !data.genre) {
      return res.status(400).json({
        success: false,
        message: "Name and genre are required",
      });
    }

    try {
      const newBand = await this.service.create(data);
      return res.status(201).json({ success: true, data: newBand });
    } catch (error) {
      return this.handleError(res, error);
    }
  };

  update = async (req, res) => {
    const { id } = req.params;
    const data = req.body;

    if (!data.name || !data.genre) {
      return res.status(400).json({
        success: false,
        message: "Name and genre are required",
      });
    }

    try {
      const updatedBand = await this.service.update(id, data);
      return res.status(200).json({ success: true, data: updatedBand });
    } catch (error) {
      return this.handleError(res, error);
    }
  };

  delete = async (req, res) => {
    const { id } = req.params;

    try {
      const deletedBand = await this.service.delete(id);
      return res.status(200).json({ success: true, message: deletedBand.message });
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

export default BandController;
