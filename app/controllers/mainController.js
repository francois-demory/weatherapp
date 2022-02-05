const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const mainController = {
    async home(req, res, next) {
        try {
            const current = await (await fetch(`${process.env.currentWeatherURL}&key=${process.env.apiKey}&city=montpellier`)).json();
            const forecast = await (await fetch(`${process.env.forecastWeatherURL}&key=${process.env.apiKey}&city=montpellier`)).json();
            const currentDatas = current.data[0];
            const forecastDatas = forecast.data;
            res.render('index', { currentDatas, forecastDatas });
        } catch(err) {
            next(err);
        }
    },

    async searchCity(req, res, next) {
        try {
            const searchedCity = req.body.city;
            const current = await (await fetch(`${process.env.currentWeatherURL}&key=${process.env.apiKey}&city=${searchedCity}`)).json();
            const forecast = await (await fetch(`${process.env.forecastWeatherURL}&key=${process.env.apiKey}&city=${searchedCity}`)).json();
            const currentDatas = current.data[0];
            const forecastDatas = forecast.data;
            res.render('index', { currentDatas, forecastDatas });
        } catch(err) {
            next(err);
        }
    }
}

module.exports = mainController;