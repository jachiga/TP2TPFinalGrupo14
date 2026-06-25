class AlbumController {

    constructor(service) {
        this.service = service;
    }

    getAll = async (req, res) => {
        try {
            const albums = await this.service.getAll();
            res.status(200).json(albums);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };

    // resto de métodos...
}