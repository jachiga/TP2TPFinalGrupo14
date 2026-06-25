import Band from "./Band.js";
import Album from "./Album.js";

Band.hasMany(Album, {
    foreignKey: "bandId"
});

Album.belongsTo(Band, {
    foreignKey: "bandId"
});

export {
    Band,
    Album
};