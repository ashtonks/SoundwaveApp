import axios from "axios";

const spotifyApiToken = "https://accounts.spotify.com/api/token";
const clientSecret = "88e842c8a75e4c40873af2696f6a51a0";
const baseURL = 'https://api.spotify.com/v1';

// var redirect_uri = 'http://localhost:8888/callback';

// var app = express();

// app.get('/login', function(req, res) {

//   var state = generateRandomString(16);
//   var scope = 'user-read-private user-read-email';

//   res.redirect('https://accounts.spotify.com/authorize?' +
//     querystring.stringify({
//       response_type: 'code',
//       client_id: client_id,
//       scope: scope,
//       redirect_uri: redirect_uri,
//       state: state
//     }));
// });

const generateRandomString = (length) => {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };


// export const requestToken = async ()=> {
//     try{
//         axios({
//             method: 'post',
//             url: "https://accounts.spotify.com/api/token",
//             headers: 'Content-Type: application/x-www-form-urlencoded',
//             data: {
//                 grant_type: 'client_credentials',
//                 client_id: `${process.env.EXPO_PUBLIC_SPOTIFY_CLIENT_ID}`,
//                 client_secret: `${process.env.EXPO_PUBLIC_SPOTIFY_CLIENT_SECRET}`,
//                 // client_secret: `${clientSecret}`,
//             }
//         })
//         // .then((data)=>(console.log(data)));
//         .then(function (response){
//             return response;
//         });
//     }catch (e) {
//         console.error(e)
//         throw (e)
//     }
// }

// export let api = requestToken();

// const authToken = async (response) => {
//     let api = axios.create({
//         baseURL: process.env.EXPO_PUBLIC_SPOTIFY_BASE_URL,
//         timeout: 3600,
//         headers: {'Authorization': `Bearer ${response.access_token}`}
//     })
//     return api;
// }

// export const api = await authToken(requestToken());

// export const getPosts = async ()=> {
//     try{
//         api.get()
//     }catch (e) {
//         console.error('Error has occured, GET: ' + e);
//         throw e;
//     }
// }