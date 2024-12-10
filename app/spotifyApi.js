import axios from "axios";

const spotifyApiToken = "https://accounts.spotify.com/api/token";
const clientSecret = "88e842c8a75e4c40873af2696f6a51a0";
const baseURL = 'https://api.spotify.com/v1';

export const api = await authToken(requestToken());

const requestToken = async ()=> {
    try{
        axios({
            method: 'post',
            url: "https://accounts.spotify.com/api/token",
            headers: 'Content-Type: application/x-www-form-urlencoded',
            data: {
                grant_type: 'client_credentials',
                client_id: `${process.env.EXPO_PUBLIC_SPOTIFY_CLIENT_ID}`,
                client_secret: `${clientSecret}`,
            }
        })
        .then(function (response){
            return response;
        });
    }catch (e) {
        console.error(e)
        throw (e)
    }
}


const authToken = async (response) => {
    let api = axios.create({
        baseURL: process.env.EXPO_PUBLIC_SPOTIFY_BASE_URL,
        timeout: 3600,
        headers: {'Authorization': `Bearer ${response.access_token}`}
    })
    return api;
}


export const getPosts = async ()=> {
    try{
        api.get()
    }catch (e) {
        console.error('Error has occured, GET: ' + e);
        throw e;
    }
}