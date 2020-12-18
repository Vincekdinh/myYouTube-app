import axios from "axios";

const KEY = "AIzaSyBBuOi6tRAgTe7jmu5ut4AOoqE-Zjke4l4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
