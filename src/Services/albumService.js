import Album from "../Models/Album.js";

class AlbumService {

    async getAll() {
        return await Album.findAll();
    }

    async getById(id) {
        return await Album.findByPk(id);
    }

    async create(data) {
        return await Album.create(data);
    }

    async update(id, data) {
        const album = await Album.findByPk(id);

        if (!album) {
            throw new Error("Album not found");
        }

        return await album.update(data);
    }

    async delete(id) {
        const album = await Album.findByPk(id);

        if (!album) {
            throw new Error("Album not found");
        }

        await album.destroy();

        return {
            message: "Album deleted successfully"
        };
    }
}

export default AlbumService;