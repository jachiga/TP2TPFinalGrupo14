class BandController {

    constructor(service) {
        this.service = service;
    }

    getAll = async (req, res) => {
        try {
            const bands = await this.service.getAll();
            res.status(200).json(bands);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };

    getById = async (req, res) => {
        const { id } = req.params;
        try {
            const band = await this.service.getById(id);
            if (!band) {
                return res.status(404).json({ message: "Band not found" });
            }
            res.status(200).json(band);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };

    create = async (req, res) => {
        const data = req.body;
        try {
            const newBand = await this.service.create(data);
            res.status(201).json(newBand);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };

    update = async (req, res) => {
        const { id } = req.params;
        const data = req.body;
        try {
            const updatedBand = await this.service.update(id, data);
            res.status(200).json(updatedBand);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };

    delete = async (req, res) => {
        const { id } = req.params;
        try {
            const deletedBand = await this.service.delete(id);
            res.status(200).json(deletedBand);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };
}