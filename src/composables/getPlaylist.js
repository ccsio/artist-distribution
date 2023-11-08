import {ref} from 'vue'

const getPlaylist = (accessToken,playlistID) => {

    // Spotify API endpoint to get track information
    const playlistUrl = `https://api.spotify.com/v1/playlists/${playlistID}`

    // Request headers with the access token
    const headers = {
    'Authorization': `Bearer ${accessToken}`,
    };

    // Send a GET request to retrieve track information
    fetch(playlistUrl, {
    method: 'GET',
    headers: headers,
    })
    .then(response => response.json())
    .then(data => {
    console.log(data)
    return {data}
    })
    .catch(error => console.error('Error getting track information:', error));
}

export default getPlaylist