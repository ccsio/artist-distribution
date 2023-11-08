import {ref} from 'vue'

const authentication = () => {
  const accessToken = ref(null)
  
  const getToken = () => {
    const clientId = process.env.VUE_APP_API_KEY
    const clientSecret = process.env.VUE_APP_SECRET_API_KEY
  
    // Spotify API endpoint to obtain an access token
    const tokenUrl = 'https://accounts.spotify.com/api/token';
  
    // Base64 encode the client ID and client secret
    const base64Credentials = btoa(`${clientId}:${clientSecret}`);
  
    // Request body to obtain the access token
    const data = 'grant_type=client_credentials';
  
    // Request headers with the base64-encoded credentials
    const headers = {
      'Authorization': `Basic ${base64Credentials}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    };
  
    // Send a POST request to get the access token
    fetch(tokenUrl, {
      method: 'POST',
      headers: headers,
      body: data,
    })
    .then(response => response.json())
    .then(data => {
      accessToken.value = data.access_token;
      console.log('Access token:', accessToken);
  
      // Now you can use the access token to make API requests to Spotify
    })
    .catch(error => console.error('Error getting access token:', error));
  }
  
  return {accessToken, getToken}

}

export default authentication