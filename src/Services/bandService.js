import Band from "../Models/Band.js";

class BandService {

    async getAll() {
        return await Band.findAll();
    }

    async getById(id) {
        return await Band.findByPk(id);
    }

    async create(data) {
        return await Band.create(data);
    }

    async update(id, data) {
        const band = await Band.findByPk(id);

        if (!band) {
            throw new Error("Band not found");
        }

        return await band.update(data);
    }

    async delete(id) {
        const band = await Band.findByPk(id);

        if (!band) {
            throw new Error("Band not found");
        }

        await band.destroy();

        return {
            message: "Band deleted successfully"
        };
    }
}

export default BandService;