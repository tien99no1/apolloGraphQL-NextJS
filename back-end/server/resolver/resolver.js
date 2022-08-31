const { albums } = require("../data/static");

const resolvers = {
  Query: {
    albums: () => albums,
    album: (parent, args) => albums.find((album) => album.id == args.id),
  },
};

module.exports = resolvers;
