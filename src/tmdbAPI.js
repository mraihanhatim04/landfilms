import axios from "axios";

export const getNowPlayingMovies = async () => {
  const response = await axios.get(
    `${import.meta.env.VITE_APP_BASE_URL}/movie/now_playing`,
    {
      params: {
        api_key: import.meta.env.VITE_APP_API_KEY,
        language: "en-US",
        page: 1,
      },
    }
  );
  return response.data.results;
};
