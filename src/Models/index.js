import Album from "./Album.js";
import Band from "./Band.js";

Band.hasMany(Album, {
  foreignKey: "bandId",
  onDelete: "CASCADE",
});

Album.belongsTo(Band, {
  foreignKey: "bandId",
});

export {
  Album,
  Band,
};
