const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray')


module.exports = {
    async index(request, response) {
        // Buscar todos devs num raio de 10km
        // Filtrar por tecnologia
        const { latitude, longitude, techs } = request.query;

        const techsArray = parseStringAsArray(techs);

        // Filtra os devs que tiverem as tecnologias procuradas dentro
        // de techsArray
        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                },
            },
        });

        return response.json({ devs });
    }
}