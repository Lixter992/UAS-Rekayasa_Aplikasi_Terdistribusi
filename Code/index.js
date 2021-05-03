const express = require('express');
const axios = require('axios');
const app = express();

app.get('/brewery', async (req, res) => {
    const respon = await axios.get('https://api.openbrewerydb.org/breweries');
    console.log(respon)
    res.send(respon.data)
});

app.get('/brewery/type/micro', async (req, res) => {
    const respon = await axios.get('https://api.openbrewerydb.org/breweries?by_type=micro');
    console.log(respon)
    res.send(respon.data)
});

app.get('/brewery/by/name', async (req, res) => {
    const respon = await axios.get('https://api.openbrewerydb.org/breweries?by_name=modern%20times');
    console.log(respon)
    res.send(respon.data)
});

const server = app.listen(8080, function () {
   const host = server.address().address
   const port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})