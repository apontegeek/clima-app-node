const axios = require('axios');
const appid = 'd86c71d36db4c60ff606940425e89dac';

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${appid}&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}