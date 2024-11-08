const API_KEY = import.meta.env.VITE_API_KEY;



const requests = {
  fetchTrending:
    `/trending/all/week?api_key=${API_KEY}&language=en-Us`,

  fetchTopRatedMovies:
    `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies:
    `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies:
    `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies:
    `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanticMovies:
    `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchNetflixOrginals:
    `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchDocumentaries:
    `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchTvShows: `tv/popular?api_key=${API_KEY}&language=en_US&page=1`,

};
const arrRequests = Object.keys(requests).map((key) => [key, requests[key]]);



export default requests;
export { API_KEY, arrRequests };