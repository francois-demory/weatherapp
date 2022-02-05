const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const mainController = {
    async home(req, res, next) {
        try {
            const query = await (await fetch(`${process.env.apiURL}${process.env.apiKey}&query=montpellier`)).json();
            const city = query.location;
            const datas = query.current;
            res.render('index', {city, datas});
        } catch(err) {
            next(err);
        }
    },

    async searchCity(req, res, next) {
        try {
            const searchedCity = req.body.city;
            const query = await (await fetch(`${process.env.apiURL}${process.env.apiKey}&query=${searchedCity}`)).json();
            const city = query.location;
            const datas = query.current;
            res.render('index', {city, datas});
        } catch(err) {
            next(err);
        }
    }
}

module.exports = mainController;