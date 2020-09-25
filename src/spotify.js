export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = "33ee23f0397a4066bdf19baacd846095";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  if (window.location.hash) {
    var token = new URL(window.location).hash
      .split("&")
      .filter((el) => {
        if (el.match("access_token") !== null) return true;
      })[0]
      .split("=")[1];

    return token;
  }
};

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
