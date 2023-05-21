const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');
const spotifyWevApi = require('spotify-web-api-node');

const app = express();

app.post('/login', (req, res) => {
    const code = req.body.code

    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: '51cf8a77417743a1997a8a0b024a1687',
        clientSecret: '0691bc496edd4147bb2f3406ed179d3b'
    });

    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    }).catch(() => {
        res.sendStatus(400)
    })
});