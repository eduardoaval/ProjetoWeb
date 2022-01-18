const Media = require('../models/Media');
const fs = require('fs');
const { default: fetch } = require('cross-fetch');

module.exports = {
    async createMedia(req, res){
        const {
            title,
            description,
            score,
            imagePoster,
            imageBanner,
            tags,
            platform,
            author,
            year,
            synopsis,
            cast,
            curiosities,
            plot,
            releaseDate,
            type
      } = req.body;

        const media = await Media.create({
            title,
            description,
            score,
            imagePoster,
            imageBanner,
            tags,
            platform,
            author,
            year,
            synopsis,
            cast,
            curiosities,
            plot,
            releaseDate,
            type
      });

        return res.json(media);
    },

    async index(req, res) {
        const medias = await Media.findAll();

        return res.json(medias);
    },

    async getById(req, res) {
        const { mediaId }  = req.params;
        const media = await Media.findByPk(mediaId);

        return res.json(media);
    },

    async update(req,res) {
        const {
            title,
            description,
            score,
            imagePoster,
            imageBanner,
            tags,
            platform,
            author,
            year,
            synopsis,
            cast,
            curiosities,
            plot,
            releaseDate,
            type
        } = req.body;

        const { mediaId }  = req.params;

        const media = await Media.findByPk(mediaId);

        if(!media){
            return res.status(400).json({ error: "Media not found"});
        }

        await User.update({
            title,
            description,
            score,
            imagePoster,
            imageBanner,
            tags,
            platform,
            author,
            year,
            synopsis,
            cast,
            curiosities,
            plot,
            releaseDate,
            type
        }, { where: { id: mediaId }})

        return res.json(media);
    },

    async createData(req, res){
        let data = fs.readFileSync("public/json/homepagecopy.json");
        let mediaData = JSON.parse(data);
        let ids = mediaData.items.map(x=> x.id);
        ids.forEach( async (id) => {
            const response = await fetch(`https://imdb-api.com/en/API/Title/k_8aiyz0zj/${id}/Images,Wikipedia`);
            const media = await response.json();
            await Media.create({
                title: media.title,
                description: media.wikipedia.plotShort.plainText,
                score: Number(media.imDbRating),
                imagePoster: media.image,
                imageBanner: media.images.items[0].image,
                tags: media.genres,
                platform: null,
                author: media.directors,
                year: Number(media.year),
                synopsis: media.plot,
                cast: media.stars,
                curiosities: media.wikipedia.plotFull.plainText,
                plot: media.plot,
                releaseDate: media.releaseDate,
                type: media.type
            });
        });
        
        return res.json();
    }
}